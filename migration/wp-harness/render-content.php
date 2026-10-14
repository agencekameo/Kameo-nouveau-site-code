<?php
/**
 * Rend le contenu des articles comme le faisait WordPress à l'affichage (filtre the_content) :
 * wptexturize → wpautop → shortcode_unautop → capital_P_dangit, avec le code officiel de
 * wp-includes/formatting.php (WordPress 7.1.3) et les guillemets de la locale fr_FR.
 * Les titres passent par wptexturize (filtre the_title).
 *
 * Usage : php render-content.php <formatting.php> <entrée.json> <sortie.json>
 *   entrée : { "<slug>": { "title": "...", "content": "..." }, ... }
 */
$GLOBALS['shortcode_tags'] = []; // aucun shortcode enregistré (le contenu n'en utilise pas)
function apply_filters( $hook, $value, ...$args ) { return $value; }
function current_filter() { return ''; }
function get_option( $k, $d = false ) { return $d; }
function __( $t ) { return $t; }
/* Traductions fr_FR utilisées par wptexturize */
function _x( $text, $context ) {
	$fr = [
		'opening curly double quote'  => '&laquo;&nbsp;',
		'closing curly double quote'  => '&nbsp;&raquo;',
		'apostrophe'                  => '&#8217;',
		'prime'                       => '&#8242;',
		'double prime'                => '&#8243;',
		'opening curly single quote'  => '&#8216;',
		'closing curly single quote'  => '&#8217;',
		'en dash'                     => '&#8211;',
		'em dash'                     => '&#8212;',
		'Comma-separated list of words to texturize in your language' => '',
		'Comma-separated list of replacement words in your language'  => '',
	];
	return $fr[ $context ] ?? $text;
}
require $argv[1];

$in  = json_decode( file_get_contents( $argv[2] ), true );
$out = [];
foreach ( $in as $slug => $p ) {
	$html = $p['content'];
	$html = wptexturize( $html );
	$html = wpautop( $html );
	$html = shortcode_unautop( $html );
	$html = capital_P_dangit( $html );
	$out[ $slug ] = [
		'title' => html_entity_decode( wptexturize( $p['title'] ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ),
		'html'  => $html,
	];
}
file_put_contents( $argv[3], json_encode( $out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT ) );
echo count( $out ), " contenus rendus\n";
