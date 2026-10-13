<?php
/* Usage: php render.php <theme_dir> <out_dir> */
$GLOBALS['THEME_DIR'] = $argv[1];
$OUT = $argv[2];
$ONLY = $argv[3] ?? null;
@mkdir($OUT, 0777, true);
require __DIR__ . '/wp-stub.php';
require $THEME_DIR . '/functions.php';
kameo_create_realisation_posts();

$pages = [
  // slug => [title, template]
  'accueil' => ['Accueil', 'front-page.php'],
  'notre-agence' => ['Notre agence', 'page-notre-agence.php'],
  'benjamin-dayan' => ['Benjamin Dayan : Fondateur', 'page-benjamin-dayan.php'],
  'agence-wordpress-paris' => ['Agence WordPress Paris', 'page-agence-wordpress-paris.php'],
  'creation-site-wordpress' => ['Création de site WordPress', 'page-creation-site-wordpress.php'],
  'refonte-wordpress' => ['Refonte WordPress', 'page-refonte-wordpress.php'],
  'maintenance-wordpress' => ['Maintenance WordPress', 'page-maintenance-wordpress.php'],
  'expertises-branding' => ['Expertises Branding', 'page-expertises-branding.php'],
  'expertises-motion' => ['Expertises Motion Design', 'page-expertises-motion.php'],
  'developpement-sur-mesure' => ['Développement sur-mesure', 'page-developpement-sur-mesure.php'],
  'creation-site-ecommerce' => ['Création de site e-commerce', 'page-creation-site-ecommerce.php'],
  'creation-marketplace' => ['Création de marketplace', 'page-creation-marketplace.php'],
  'creation-crm-sur-mesure' => ['Création de CRM sur-mesure', 'page-creation-crm-sur-mesure.php'],
  'creation-saas-ia' => ['Création de SaaS IA', 'page-creation-saas-ia.php'],
  'realisations' => ['Réalisations', 'page-realisations.php'],
  'contact' => ['Contact', 'page-contact.php'],
  'blog' => ['Blog', 'page-blog.php'],
  'mentions-legales' => ['Mentions légales', 'page-mentions-legales.php'],
  'politique-de-confidentialite' => ['Politique de confidentialité', 'page-politique-de-confidentialite.php'],
  'landingpage' => ['Landing Page', 'page-lp-rdv-v2.php'],
  'rdv-confirme' => ['Rendez-vous confirmé', 'page-rdv-confirme.php'],
];

function render_one($name, $ctx, $queried, $template) {
  global $OUT, $THEME_DIR, $ONLY;
  if ($ONLY === 'list') { echo $name, "\n"; return; }
  if ($ONLY !== null && $ONLY !== $name) return;
  $GLOBALS['KCTX'] = $ctx;
  $GLOBALS['KQUERIED'] = $queried;
  $GLOBALS['KCUR'] = $queried;
  $GLOBALS['KLOOP_DONE'] = false;
  $GLOBALS['KENQ'] = ['styles'=>[], 'scripts'=>[], 'localize'=>[]];
  ob_start();
  include $THEME_DIR . '/' . $template;
  $html = ob_get_clean();
  // Rank Math-equivalent values computed through the theme's own filters
  $GLOBALS['KCUR'] = $queried;
  $meta = [
    'title' => apply_filters('rank_math/frontend/title', $ctx['default_title'] ?? ''),
    'description' => apply_filters('rank_math/frontend/description', ''),
    'robots' => apply_filters('rank_math/frontend/robots', ['index' => 'index', 'follow' => 'follow']),
    'canonical' => apply_filters('rank_math/frontend/canonical', ''),
    'og_type' => apply_filters('rank_math/opengraph/facebook/og_type', 'website'),
    'crumbs' => kameo_crumbs(),
    'localize' => $GLOBALS['KENQ']['localize'],
    'styles' => $GLOBALS['KENQ']['styles'],
  ];
  file_put_contents("$OUT/$name.html", $html);
  file_put_contents("$OUT/$name.meta.json", json_encode($meta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
  echo "rendered $name (" . strlen($html) . " bytes)\n";
}

$id = 1;
foreach ($pages as $slug => [$title, $tpl]) {
  $p = new KPost(); $p->ID = $id++; $p->post_name = $slug; $p->post_title = $title; $p->post_type = 'page';
  $GLOBALS['KPOSTS'][$p->ID] = $p;
  $front = $slug === 'accueil';
  $ctx = [
    'type' => 'page', 'slug' => $slug, 'front' => $front, 'template' => $front ? '' : $tpl,
    'default_title' => $title . ' - Agence Kameo',
    'body_class' => $front ? ['home', 'page-template-default', 'page'] : ['page-template-' . str_replace('.php', '', $tpl), 'page'],
  ];
  render_one($front ? 'index' : $slug, $ctx, $p, $tpl);
  unset($GLOBALS['KPOSTS'][$p->ID]);
}

// realisations
$reals = get_posts(['post_type' => 'realisation', 'numberposts' => -1]);
foreach ($reals as $r) {
  $ctx = ['type' => 'realisation', 'slug' => $r->post_name, 'front' => false, 'template' => 'single-realisation.php',
          'default_title' => $r->post_title . ' - Agence Kameo', 'body_class' => ['realisation-template-default', 'single', 'single-realisation']];
  render_one('realisations__' . $r->post_name, $ctx, $r, 'single-realisation.php');
}

// 404
$ctx = ['type' => '404', 'is404' => true, 'front' => false, 'default_title' => '', 'body_class' => ['error404']];
render_one('404', $ctx, null, '404.php');

if ($ONLY !== '_data') return;
// realisation seed data as JSON for the Next.js data layer
$data = [];
foreach ($reals as $r) {
  $data[] = ['slug' => $r->post_name, 'title' => $r->post_title, 'order' => $r->menu_order, 'meta' => $GLOBALS['KMETA'][$r->ID]];
}
file_put_contents("$OUT/_realisations.json", json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
file_put_contents("$OUT/_redirects.json", json_encode(kameo_redirect_map(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
file_put_contents("$OUT/_noindex.json", json_encode(kameo_noindex_slugs(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
file_put_contents("$OUT/_linkmap.json", json_encode(kameo_internal_link_map(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
