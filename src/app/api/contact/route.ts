import nodemailer from 'nodemailer';
import { CONTACT } from '@/lib/site';

/*
 * Formulaire de contact — remplace l'endpoint REST WordPress kameo/v1/contact.
 * Mêmes règles : honeypot, champs requis, email valide, message ≥ 10 caractères,
 * 5 envois aboutis par heure et par adresse IP, Reply-To vers le visiteur.
 *
 * Configuration (variables d'environnement) :
 *   SMTP_HOST, SMTP_PORT (465 par défaut), SMTP_USER, SMTP_PASS,
 *   CONTACT_TO (défaut contact@agence-kameo.fr), CONTACT_FROM (défaut SMTP_USER).
 */

export const runtime = 'nodejs';

const MAX_PER_HOUR = 5;
const sent = new Map<string, { n: number; until: number }>();

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

function clientIp(req: Request): string {
  for (const h of ['x-forwarded-for', 'x-real-ip']) {
    const v = req.headers.get(h);
    if (v) return v.split(',')[0].trim();
  }
  return '';
}

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const clean = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export async function POST(req: Request) {
  let p: Record<string, unknown>;
  try {
    p = await req.json();
  } catch {
    return json({ code: 'bad_request', message: 'Requête invalide.' }, 400);
  }

  // Honeypot (champ invisible pour les robots)
  if (clean(p.website)) return json({ success: true });

  for (const field of ['nom_prenom', 'email', 'message']) {
    if (!clean(p[field])) return json({ code: 'missing_field', message: `Champ requis : ${field}` }, 400);
  }
  const nom = clean(p.nom_prenom).replace(/[\r\n]+/g, ' ');
  const email = clean(p.email);
  const message = clean(p.message);
  const company = clean(p.entreprise);
  const phone = clean(p.telephone);
  if (!isEmail(email)) return json({ code: 'invalid_email', message: 'Adresse email invalide.' }, 400);
  if (message.length < 10) return json({ code: 'message_too_short', message: 'Message trop court (minimum 10 caractères).' }, 400);

  const recipient = process.env.CONTACT_TO || CONTACT.email;

  // Limitation de débit : seuls les envois aboutis comptent
  const ip = clientIp(req);
  const now = Date.now();
  const rec = ip ? sent.get(ip) : undefined;
  if (rec && rec.until > now && rec.n >= MAX_PER_HOUR) {
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
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    await transport.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER || recipient,
      to: recipient,
      replyTo: { name: nom, address: email },
      subject: `[Kameo] Nouveau message de ${nom}`,
      text: body,
    });
  } catch (err) {
    console.error('[contact] envoi impossible', err);
    return json({ code: 'send_failed', message: "Erreur lors de l'envoi. Veuillez réessayer." }, 500);
  }

  if (ip) {
    const cur = rec && rec.until > now ? rec.n : 0;
    sent.set(ip, { n: cur + 1, until: now + 3600_000 });
  }
  return json({ success: true, message: 'Message envoyé avec succès !' });
}
