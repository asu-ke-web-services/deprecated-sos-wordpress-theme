<?php
/*
Template Name: Slim Hero Page
Description: Hero Image is set to be slim.
*/

// XXX Note to future developers.  Please keep this file in step
// with the ASU-Web-Standards-Wordpress/page.php file

// TODO avoid direct calls to this file

get_header();
$custom_fields = get_post_custom();
?>
<div id="main-wrapper" class="clearfix">
  <div id="main" class="clearfix">

    <?php
      if ( array_key_exists( 'page_feature_title', $custom_fields ) )
        $title = $custom_fields['page_feature_title'][0];

      // TODO This should be a hook with the name web_standards_hero_image
      if ( array_key_exists( 'page_feature_image', $custom_fields ) ) {
        $count = count( $custom_fields['page_feature_image'] );

        if ( $count == 0 ) {
          $image = $custom_fields['page_feature_image'][0];
        } else {
          $index = rand( 0, $count - 1 );
          $image = $custom_fields['page_feature_image'][$index];
        }
      }
      if ( array_key_exists( 'page_feature_video', $custom_fields ) ) {
        $video = [];
        foreach ( $custom_fields['page_feature_video'] as $_ => $value ) {
          $video[] = $value;
        }
      }
      if ( array_key_exists( 'page_feature_description', $custom_fields ) )
        $description = $custom_fields['page_feature_description'][0];

      if ( isset( $title ) || 
           isset( $image ) || 
           isset( $video ) || 
           isset( $description ) ):
    ?>
      <div id="content" class="column">
        <div class="region region-content">
          <div id="block-system-main" class="block block-system">
            <div class="content">
              <div class="panel-display fdt-home clearfix" id="page-page">
                
                  <?php
                    $image_tag = '<section class="sos-hero-slim" style="background-image: url(%s)">';

                    if ( isset( $image ) ) {
                      echo sprintf( $image_tag, $image );
                    } else {
                      echo sprintf( $image_tag, '' );
                    }
                  ?>
                  <div class="container">
                    <div class="fdt-home-container fdt-home-column-content clearfix  panel-panel row-fluid container">
                      <div class="fdt-home-column-content-region fdt-home-row panel-panel span12">
                        <div class="panel-pane pane-fieldable-panels-pane pane-fpid-12 pane-bundle-text">
                          <?php
                            if ( isset ( $title ) ) :
                          ?>
                          <h1 class="pane-title"><?php echo $title; ?></h1>
                          <?php
                            endif;
                          ?>

                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php endif; ?>
    <div id="content" class="site-content">
      <?php echo do_shortcode( '[asu_breadcrumbs]' ); ?>
      <main id="main" class="site-main" role="main">
        <?php 
          while ( have_posts() ) {
            the_post();
            get_template_part( 'content', 'page' );

            // If comments are open or we have at least one comment, load up the comment template
            if ( comments_open() || '0' != get_comments_number() ) :
              comments_template();
            endif;
          } // end of the loop. 
        ?>

      </main><!-- #main -->
    </div><!-- #primary -->

    <?php 
      get_footer();