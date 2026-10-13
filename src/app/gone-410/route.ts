/* Réponse 410 Gone pour les contenus supprimés (liste GONE de lib/redirects.ts),
   servie par le proxy. Le 410 sort l'URL de l'index plus vite qu'un 404. */
export const dynamic = 'force-static';

const HTML = `<!DOCTYPE html>
<html lang="fr-FR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, follow" />
<title>Contenu supprimé | Kameo</title>
<style>
@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-900.woff2) format('woff2');font-weight:900;font-display:swap}
@font-face{font-family:Satoshi;src:url(/fonts/Satoshi-500.woff2) format('woff2');font-weight:500;font-display:swap}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f1115;color:#fff;font-family:Satoshi,system-ui,sans-serif;padding:24px}
main{max-width:560px;text-align:center}img{width:160px;height:auto;margin-bottom:40px}
h1{font-weight:900;font-size:clamp(28px,5vw,40px);letter-spacing:-.02em;margin:0 0 16px}
p{color:rgba(255,255,255,.7);line-height:1.6;margin:0 0 32px}
nav{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
a{color:#fff;text-decoration:none;border:1.5px solid rgba(255,255,255,.2);border-radius:999px;padding:12px 20px;font-weight:500}
a:first-child{background:linear-gradient(136.79deg,#E14B89 5.13%,#F8903C 84.98%);border-color:transparent}
</style>
</head>
<body>
<main>
<img src="/images/hero.webp" alt="Kameo" width="400" height="126" />
<h1>Ce contenu n’existe plus</h1>
<p>La page demandée a été supprimée définitivement. Nos services et nos conseils sont toujours là.</p>
<nav>
<a href="/">Retour à l’accueil</a>
<a href="/agence-wordpress-paris/">Agence WordPress Paris</a>
<a href="/developpement-sur-mesure/">Développement sur-mesure</a>
<a href="/blog/">Le blog</a>
</nav>
</main>
</body>
</html>`;

export function GET() {
  return new Response(HTML, {
    status: 410,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
}
