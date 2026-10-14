import nodemailer from 'nodemailer';
import { CONTACT, SITE_URL } from '@/lib/site';

/*
 * Formulaire de contact — remplace l'endpoint REST WordPress kameo/v1/contact.
 * Mêmes règles : honeypot, champs requis, email valide, message ≥ 10 caractères,
 * 5 envois aboutis par heure et par adresse IP, Reply-To vers le visiteur.
 * En plus : requête JSON du site lui-même uniquement, taille et longueur des champs bornées,
 * champs d'une ligne nettoyés des retours à la ligne, plafond global de 60 envois par heure.
 *
 * Configuration (variables d'environnement) :
 *   SMTP_HOST, SMTP_PORT (465 par défaut), SMTP_USER, SMTP_PASS,
 *   CONTACT_TO (défaut contact@agence-kameo.fr), CONTACT_FROM (défaut SMTP_USER).
 */

export const runtime = 'nodejs';

const MAX_PER_HOUR = 5; // par adresse IP
const MAX_GLOBAL_PER_HOUR = 60; // tous visiteurs confondus : borne l'abus même si l'adresse IP est usurpée
const MAX_BODY_BYTES = 20_000;
const LIMITS: Record<string, number> = { nom_prenom: 120, email: 254, entreprise: 150, telephone: 40, message: 5_000 };
const HOUR = 3_600_000;
const sent = new Map<string, { n: number; until: number }>();
let total = { n: 0, until: 0 };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

/*
 * Adresse IP du visiteur. L'hébergeur fixe x-real-ip (Vercel, nginx `proxy_set_header X-Real-IP`) ;
 * à défaut, le DERNIER élément de X-Forwarded-For, ajouté par le proxy : le premier est fourni par
 * le client et peut être choisi librement.
 */
function clientIp(req: Request): string {
  const real = req.headers.get('x-vercel-forwarded-for') || req.headers.get('x-real-ip');
  if (real) return real.split(',')[0].trim();
  const xff = req.headers.get('x-forwarded-for');
  return xff ? xff.split(',').pop()!.trim() : 'inconnue';
}

const isEmail = (s: string) => /^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]+$/.test(s);
/** Texte d'une ligne : sans caractère de contrôle ni séparateur de ligne Unicode. */
const oneLine = (v: unknown) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]+/g, ' ').trim() : '');
/** Texte sur plusieurs lignes : retours à la ligne normalisés, autres caractères de contrôle retirés. */
const multiLine = (v: unknown) =>
  typeof v === 'string' ? v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f-\u009f]/g, '').trim() : '';

/** Requête envoyée par le site lui-même (pas par un formulaire d'un autre site). */
function sameOrigin(req: Request): boolean {
  const site = req.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') return false;
  const origin = req.headers.get('origin');
  if (!origin) return true; // outils sans en-tête Origin : le Content-Type JSON exigé impose déjà un preflight aux navigateurs
  try {
    const o = new URL(origin);
    return o.origin === SITE_URL || o.host === req.headers.get('host');
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ code: 'forbidden', message: 'Origine refusée.' }, 403);
  // JSON obligatoire : un formulaire HTML d'un autre site ou un envoi « text/plain » est refusé
  if (!(req.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) {
    return json({ code: 'unsupported_media_type', message: 'Requête invalide.' }, 415);
  }
  const tooLarge = () => json({ code: 'too_large', message: 'Message trop long.' }, 413);
  if (Number(req.headers.get('content-length') || 0) > MAX_BODY_BYTES) return tooLarge();

  let p: unknown;
  try {
    const raw = await req.text();
    if (Buffer.byteLength(raw) > MAX_BODY_BYTES) return tooLarge();
    p = JSON.parse(raw);
  } catch {
    return json({ code: 'bad_request', message: 'Requête invalide.' }, 400);
  }
  if (!p || typeof p !== 'object' || Array.isArray(p)) return json({ code: 'bad_request', message: 'Requête invalide.' }, 400);
  const f = p as Record<string, unknown>;

  // Honeypot (champ invisible pour les robots)
  if (oneLine(f.website)) return json({ success: true });

  const nom = oneLine(f.nom_prenom);
  const email = oneLine(f.email);
  const company = oneLine(f.entreprise);
  const phone = oneLine(f.telephone);
  const message = multiLine(f.message);
  for (const [field, value] of Object.entries({ nom_prenom: nom, email, message })) {
    if (!value) return json({ code: 'missing_field', message: `Champ requis : ${field}` }, 400);
  }
  for (const [field, value] of Object.entries({ nom_prenom: nom, email, entreprise: company, telephone: phone, message })) {
    if (value.length > LIMITS[field]) return json({ code: 'too_long', message: `Champ trop long : ${field}` }, 400);
  }
  if (!isEmail(email)) return json({ code: 'invalid_email', message: 'Adresse email invalide.' }, 400);
  if (message.length < 10) return json({ code: 'message_too_short', message: 'Message trop court (minimum 10 caractères).' }, 400);

  const recipient = process.env.CONTACT_TO || CONTACT.email;

  // Limitation de débit : seuls les envois aboutis comptent ; entrées expirées purgées
  const ip = clientIp(req);
  const now = Date.now();
  for (const [k, v] of sent) if (v.until <= now) sent.delete(k);
  if (total.until <= now) total = { n: 0, until: now + HOUR };
  const rec = sent.get(ip);
  if ((rec && rec.n >= MAX_PER_HOUR) || total.n >= MAX_GLOBAL_PER_HOUR) {
    return json(
      { code: 'debit_depasse', message: `Trop d'envois depuis cette connexion. Merci de réessayer dans une heure, ou de nous écrire directement à ${recipient}.` },
      429,
    );
  }

  const line = '—'.repeat(50);
  const date = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(new Date());
  let body = `Nouvelle demande de contact\n${line}\n\n`;
  body += `Nom / Prénom : ${nom}\n`;
  body += `Email        : ${email}\n`;
  if (company) body += `Entreprise   : ${company}\n`;
  if (phone) body += `Téléphone    : ${phone}\n`;
  body += `\nMessage :\n${message}\n`;
  body += `\n${line}\nEnvoyé le ${date.replace(' ', ' à ')}`;

  if (!process.env.SMTP_HOST) {
    console.error('[contact] SMTP_HOST non configuré : message non envoyé');
    return json({ code: 'send_failed', message: "Erreur lors de l'envoi. Veuillez réessayer." }, 500);
  }

  try {
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      requireTLS: port !== 465, // STARTTLS obligatoire sur 587 : identifiants jamais envoyés en clair
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    await transport.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER || recipient,
      to: recipient,
      replyTo: { name: nom, address: email },
      subject: `[Kameo] Nouveau message de ${nom.slice(0, 80)}`,
      text: body,
    });
  } catch (err) {
    console.error('[contact] envoi impossible', err);
    return json({ code: 'send_failed', message: "Erreur lors de l'envoi. Veuillez réessayer." }, 500);
  }

  sent.set(ip, { n: (rec?.n ?? 0) + 1, until: rec?.until ?? now + HOUR });
  total.n++;
  return json({ success: true, message: 'Message envoyé avec succès !' });
}
