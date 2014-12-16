<?php


function sos_wordpress_theme_scripts() {
  wp_register_style( 'sos-wordpress-theme', get_stylesheet_directory_uri().'/build/css/sos-wordpress-theme.css', array(), '0.0.1', true );
  wp_enqueue_style( 'sos-wordpress-theme' );
  
  # TODO once we have some custom javascript, change this to the .min
  wp_register_script( 'sos-wordpress-theme', get_stylesheet_directory_uri().'/build/js/sos-wordpress-theme.js', array(), '0.0.1', true );
  wp_enqueue_script( 'sos-wordpress-theme' );
}


add_action( 'wp_enqueue_scripts', 'sos_wordpress_theme_scripts' );

