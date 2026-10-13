<?php
/* Minimal WordPress runtime used to render the Kameo theme outside WordPress.
   Context is driven by $GLOBALS['KCTX'] (set by render.php before each template). */
define('ABSPATH', '/');
define('RANK_MATH_VERSION', '1.0.0');   // production runs Rank Math
define('HOUR_IN_SECONDS', 3600);
define('DAY_IN_SECONDS', 86400);
define('SITE', 'https://agence-kameo.fr');

$GLOBALS['KHOOKS'] = [];
$GLOBALS['KMOD'] = [];
$GLOBALS['KENQ'] = ['styles'=>[], 'scripts'=>[], 'localize'=>[]];

function _k_add($h, $cb, $p = 10, $n = 1) { $GLOBALS['KHOOKS'][$h][$p][] = [$cb, $n]; return true; }
function add_action($h, $cb, $p = 10, $n = 1) { return _k_add($h, $cb, $p, $n); }
function add_filter($h, $cb, $p = 10, $n = 1) { return _k_add($h, $cb, $p, $n); }
function remove_action() { return true; }
function do_action($h, ...$args) {
  if (empty($GLOBALS['KHOOKS'][$h])) return;
  $hooks = $GLOBALS['KHOOKS'][$h]; ksort($hooks);
  foreach ($hooks as $p => $list) foreach ($list as [$cb, $n]) {
    if (!empty($GLOBALS['KCTX']['skip_hook']) && in_array($h.'@'.$p, $GLOBALS['KCTX']['skip_hook'], true)) continue;
    call_user_func_array($cb, array_slice($args, 0, $n));
  }
}
function apply_filters($h, $v, ...$args) {
  if (empty($GLOBALS['KHOOKS'][$h])) return $v;
  $hooks = $GLOBALS['KHOOKS'][$h]; ksort($hooks);
  foreach ($hooks as $p => $list) foreach ($list as [$cb, $n]) {
    $v = call_user_func_array($cb, array_slice(array_merge([$v], $args), 0, $n));
  }
  return $v;
}

/* ---- escaping / formatting ---- */
function esc_url($u) { return htmlspecialchars((string)$u, ENT_QUOTES, 'UTF-8'); }
function esc_url_raw($u) { return (string)$u; }
function esc_attr($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8', false); }
function esc_html($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8', false); }
function wp_kses_post($s) { return (string)$s; }
function wp_strip_all_tags($s) { $s = preg_replace('@<(script|style)[^>]*?>.*?</\\1>@si', '', (string)$s); return trim(strip_tags($s)); }
function wp_json_encode($d, $o = 0) { return json_encode($d, $o); }
function wp_trim_words($text, $num = 55, $more = '…') {
  $text = wp_strip_all_tags($text);
  $words = preg_split("/[\n\r\t ]+/", $text, $num + 1, PREG_SPLIT_NO_EMPTY);
  if (count($words) > $num) { array_pop($words); return implode(' ', $words) . $more; }
  return implode(' ', $words);
}
function wp_unslash($v) { return $v; }
function sanitize_text_field($s) { return trim((string)$s); }
function sanitize_textarea_field($s) { return trim((string)$s); }
function sanitize_email($s) { return trim((string)$s); }
function is_email($s) { return (bool) filter_var($s, FILTER_VALIDATE_EMAIL); }
function trailingslashit($s) { return rtrim($s, '/\\') . '/'; }
function untrailingslashit($s) { return rtrim($s, '/\\'); }
function is_wp_error($x) { return false; }
function __return_true() { return true; }

/* ---- site / theme ---- */
function home_url($path = '') { return SITE . '/' . ltrim((string)$path, '/'); }
function rest_url($p = '') { return SITE . '/wp-json/' . ltrim($p, '/'); }
function get_template_directory() { return $GLOBALS['THEME_DIR']; }
function get_template_directory_uri() { return SITE . '/wp-content/themes/kameo-theme'; }
function get_theme_mod($k, $d = false) { return array_key_exists($k, $GLOBALS['KMOD']) ? $GLOBALS['KMOD'][$k] : $d; }
function get_option($k, $d = false) {
  $o = ['admin_email' => 'contact@agence-kameo.fr', 'default_category' => 1, 'permalink_structure' => '/blog/%postname%/', 'kameo_pages_seeded_version' => '2.10.7', 'kameo_seed_version' => '2.10.7', 'kameo_migrated_wp_silo_v1' => 1];
  return $o[$k] ?? $d;
}
function update_option() { return true; }
function delete_option() { return true; }
function get_transient() { return false; }
function set_transient() { return true; }
function delete_transient() { return true; }
function wp_get_theme() { return new class { function get($k) { return '2.10.7'; } }; }
function add_theme_support() {}
function register_post_type() {}
function register_rest_route() {}
function acf_add_local_field_group() {}
function wp_dequeue_style() {}
function wp_enqueue_style($h, $src = '', $deps = [], $ver = false) { $GLOBALS['KENQ']['styles'][$h] = $src; }
function wp_enqueue_script($h, $src = '', $deps = [], $ver = false, $f = false) { $GLOBALS['KENQ']['scripts'][$h] = $src; }
function wp_localize_script($h, $name, $data) { $GLOBALS['KENQ']['localize'][$name] = $data; }
function wp_create_nonce() { return 'NONCE'; }
function language_attributes() { echo 'lang="fr-FR"'; }
function bloginfo($k) { echo get_bloginfo($k); }
function get_bloginfo($k = '') { return ['charset' => 'UTF-8', 'name' => 'Agence Kameo', 'description' => ''][$k] ?? ''; }
function body_class($c = '') {
  $ctx = $GLOBALS['KCTX'];
  $cls = $ctx['body_class'] ?? [];
  echo 'class="' . esc_attr(implode(' ', $cls)) . '"';
}
function wp_head() { $GLOBALS['KCTX']['_in_head'] = true; echo "<!--WP_HEAD_START-->\n"; do_action('wp_enqueue_scripts'); do_action('wp_head'); echo "<!--WP_HEAD_END-->\n"; }
function wp_footer() { echo "<!--WP_FOOTER_START-->\n"; do_action('wp_footer'); echo "<!--WP_FOOTER_END-->\n"; }
function get_header() { global $THEME_DIR; include $THEME_DIR . '/header.php'; echo "\n<!--HEADER_END-->\n"; }
function get_footer() { global $THEME_DIR; echo "\n<!--FOOTER_START-->\n"; include $THEME_DIR . '/footer.php'; }
function get_template_part($t) { global $THEME_DIR; include $THEME_DIR . '/' . $t . '.php'; }
function current_time($f) { return date($f === 'mysql' ? 'Y-m-d H:i:s' : $f, strtotime('2026-10-13 12:00:00')); }
function date_i18n($f) { return date($f, strtotime('2026-10-13')); }
function nocache_headers() {}
function status_header() {}
function wp_safe_redirect() {}
function is_user_logged_in() { return false; }
function get_current_user_id() { return 1; }
function get_search_query() { return ''; }
function get_query_var($k, $d = '') { return $GLOBALS['KCTX']['query_vars'][$k] ?? $d; }
function get_pagenum_link($n) { return home_url('/blog/' . ($n > 1 ? 'page/' . $n . '/' : '')); }
function paginate_links($a) { return '<!--PAGINATION-->'; }

/* ---- conditional tags ---- */
function _ctx($k) { return $GLOBALS['KCTX'][$k] ?? null; }
function is_front_page() { return (bool) _ctx('front'); }
function is_home() { return false; }
function is_404() { return (bool) _ctx('is404'); }
function is_category() { return false; }
function is_tag() { return false; }
function is_author() { return false; }
function in_the_loop() { return true; }
function is_main_query() { return true; }
function is_page($slugs = null) {
  if (_ctx('type') !== 'page') return false;
  if ($slugs === null || $slugs === '') return true;
  $slugs = (array) $slugs;
  return in_array(_ctx('slug'), $slugs, true);
}
function is_singular($type = null) {
  $t = _ctx('type');
  if (!in_array($t, ['page', 'realisation', 'post'], true)) return false;
  if ($type === null) return true;
  return in_array($t, (array)$type, true);
}
function is_page_template($t) { return _ctx('template') === $t; }

/* ---- posts ---- */
class KPost { public $ID; public $post_name; public $post_title; public $post_type; public $menu_order = 0; public $post_excerpt = ''; public $post_content = ''; public $post_date = '2026-01-01 10:00:00'; public $post_modified = '2026-10-12 10:00:00'; }
$GLOBALS['KPOSTS'] = [];
function _kpost($id = null) {
  if ($id === null) return $GLOBALS['KCUR'] ?? null;
  if (is_object($id)) return $id;
  return $GLOBALS['KPOSTS'][$id] ?? null;
}
function get_queried_object() { return $GLOBALS['KQUERIED'] ?? null; }
function get_the_ID() { $p = _kpost(); return $p ? $p->ID : 0; }
function get_the_title($id = null) { $p = _kpost($id); return $p ? $p->post_title : ''; }
function the_title() { echo get_the_title(); }
function the_title_attribute($a = []) { $t = esc_attr(get_the_title()); if (is_array($a) && isset($a['echo']) && !$a['echo']) return $t; echo $t; }
function get_permalink($id = null) {
  $p = _kpost($id); if (!$p) return false;
  if (!empty($GLOBALS['KCTX']['front']) && $p === ($GLOBALS['KQUERIED'] ?? null)) return home_url('/');
  if ($p->post_type === 'realisation') return home_url('/realisations/' . $p->post_name . '/');
  if ($p->post_type === 'post') return home_url('/blog/' . $p->post_name . '/');
  return home_url('/' . $p->post_name . '/');
}
function the_permalink() { echo esc_url(get_permalink()); }
function get_the_excerpt($id = null) { $p = _kpost($id); return $p ? $p->post_excerpt : ''; }
function get_the_content() { $p = _kpost(); return $p ? $p->post_content : ''; }
function the_content() { echo apply_filters('the_content', get_the_content()); }
function get_post_field($f, $id) { $p = _kpost($id); return $p ? $p->$f : ''; }
function get_the_date($f = 'Y-m-d', $id = null) { $p = _kpost($id); return date($f, strtotime($p ? $p->post_date : 'now')); }
function get_the_modified_date($f = 'Y-m-d', $id = null) { $p = _kpost($id); return date($f, strtotime($p ? $p->post_modified : 'now')); }
function has_post_thumbnail() { return false; }
function get_the_post_thumbnail_url() { return false; }
function the_post_thumbnail() {}
function attachment_url_to_postid() { return 0; }
function wp_get_attachment_image_src() { return false; }
function get_post_meta($id, $key = '', $single = false) {
  $m = $GLOBALS['KMETA'][$id] ?? [];
  return $m[$key] ?? '';
}
function update_post_meta($id, $k, $v) { $GLOBALS['KMETA'][$id][$k] = $v; }
function wp_insert_post($a) {
  static $next = 100;
  if (($a['post_type'] ?? '') !== 'realisation') return 0;
  $p = new KPost(); $p->ID = $next++; $p->post_name = $a['post_name']; $p->post_title = $a['post_title'];
  $p->post_type = 'realisation'; $p->menu_order = $a['menu_order'] ?? 0;
  $GLOBALS['KPOSTS'][$p->ID] = $p; return $p->ID;
}
function wp_update_post() {}
define('OBJECT', 'OBJECT');
function get_page_by_path($slug, $o = 'OBJECT', $type = 'page') {
  foreach ($GLOBALS['KPOSTS'] as $p) if ($p->post_name === $slug && $p->post_type === $type) return $p;
  return null;
}
function wp_count_posts($t) { $n = 0; foreach ($GLOBALS['KPOSTS'] as $p) if ($p->post_type === $t) $n++; return (object)['publish' => $n]; }
function get_posts($args) {
  $type = $args['post_type'] ?? 'post';
  $out = [];
  foreach ($GLOBALS['KPOSTS'] as $p) if ($p->post_type === $type && (empty($args['name']) || $args['name'] === $p->post_name)) $out[] = $p;
  usort($out, function ($a, $b) { return $a->menu_order <=> $b->menu_order; });
  if (!empty($args['numberposts']) && $args['numberposts'] > 0) $out = array_slice($out, 0, $args['numberposts']);
  return $out;
}
function get_previous_post() { return $GLOBALS['KCTX']['prev_post'] ?? null; }
function get_next_post() { return $GLOBALS['KCTX']['next_post'] ?? null; }
/* main loop: single iteration over the queried object */
function have_posts() { return empty($GLOBALS['KLOOP_DONE']); }
function the_post() { $GLOBALS['KCUR'] = $GLOBALS['KQUERIED']; $GLOBALS['KLOOP_DONE'] = true; }
function wp_reset_postdata() { $GLOBALS['KCUR'] = $GLOBALS['KQUERIED']; }
function get_field($k) { return null; }
class WP_Query {
  public $posts = []; private $i = 0; public $max_num_pages = 0; public $found_posts = 0;
  function __construct($args = []) {
    $type = $args['post_type'] ?? 'post';
    $out = [];
    foreach ($GLOBALS['KPOSTS'] as $p) if ($p->post_type === $type) $out[] = $p;
    $not = $args['post__not_in'] ?? [];
    $out = array_values(array_filter($out, function ($p) use ($not) { return !in_array($p->ID, $not, true); }));
    if (($args['orderby'] ?? '') === 'menu_order') usort($out, function ($a, $b) { return $a->menu_order <=> $b->menu_order; });
    if (($args['orderby'] ?? '') === 'date') usort($out, function ($a, $b) { return strcmp($b->post_date, $a->post_date) ?: ($b->ID <=> $a->ID); });
    $pp = $args['posts_per_page'] ?? 10;
    $this->found_posts = count($out);
    if ($pp > 0) { $this->max_num_pages = (int) ceil(count($out) / $pp); $out = array_slice($out, 0, $pp); }
    $this->posts = $out;
  }
  function have_posts() { return $this->i < count($this->posts); }
  function the_post() { $GLOBALS['KCUR'] = $this->posts[$this->i++]; }
}
