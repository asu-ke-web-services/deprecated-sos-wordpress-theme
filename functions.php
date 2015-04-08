<?php


function sos_wordpress_theme_scripts() {
  wp_register_style( 'sos-wordpress-theme', get_stylesheet_directory_uri().'/build/css/sos-wordpress-theme.min.css', array(), '0.0.3', 'all' );
  wp_enqueue_style( 'sos-wordpress-theme' );
  
  wp_register_script( 'sos-wordpress-theme', get_stylesheet_directory_uri().'/build/js/sos-wordpress-theme.min.js', array(), '0.0.4', 'all' );
  wp_enqueue_script( 'sos-wordpress-theme' );
}

add_action( 'wp_enqueue_scripts', 'sos_wordpress_theme_scripts', 20 );