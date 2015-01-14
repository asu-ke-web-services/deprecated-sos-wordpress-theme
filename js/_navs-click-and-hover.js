/* ========================================================================
 * SoS Wordpress Theme navs-click-and-hover.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * ======================================================================== */

+function ( $ ) {
  'use strict';

  /*
   * The hover functions will trigger even on mobile devices. When
   * touch event happens on a mobile device, the onhoverstart is called
   * and then the click event is called.  Since the hover adds the
   * open class to the element, we need to add a quick dying variable
   * to let the click event know whether the element was just opened or
   * not.
   *
   * Basically:
   * - if clicked and not open, open
   * - if clicked and open, close
   * - if hovered over, open (no matter the previous state)
   * - if hover left, close (no matter the previous state)
   */
  $( document ).ready( function () {
    $( '.navbar-ws ul.nav li.dropdown' ).click( function ( e ) {
      e.stopPropagation()

      var self = $( this )
      self.find( 'a' ).blur()

      if ( self.find( 'a' ).attr( 'href') === '#' ) {
        e.preventDefault()
      }

      if ( self.hasClass( 'open' ) && ! self.data( 'sos-click' ) ) {
        self.removeClass( 'open' )
      } else {
        self.addClass( 'open' )
      }
    } ).hover( function () {
        var self = $( this )
        self.addClass( 'open' )
        self.data( 'sos-click', true )

        setTimeout( function () {
          self.data( 'sos-click', false )
        }, 5 )
      }, function () {
        $( this ).removeClass( 'open' )
      }
    )
  } )
}( jQuery );
