/* ========================================================================
 * SoS Wordpress Theme carousel-height-fix.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * ======================================================================== */

/* relies on .reduce being defined. */
+function ($) {
  'use strict';

  $( document ).ready( function () {
    $( '.carousel .carousel-inner' ).each( function ( i, e ) {
      var self      = $( e )
      var maxHeight = self.find( '.item' ).map( function ( i, e ) {
        return $(e).height()
      } ).get().reduce( function ( a, b ) {
        if ( a > b ) {
          return a
        } else {
          return b
        }
      } )

      self.css( {
        height : maxHeight
      } )
    } )
  } )
}(jQuery);
