/*!
 * School of Sustainability
 * Copyright 2015 ASU
 */

+function () {
  'use strict';
  'wow';
}();
// sos-wordpress-theme.js

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback /*, initialValue*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && ! k in t) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
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

/* ========================================================================
 * SoS Wordpress Theme navs-click-and-hover.js v0.0.2
 * ========================================================================
 * Copyright 2014 ASU
 * ======================================================================== */

+function ( $ ) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 975

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
    $( '.navbar-ws ul.nav>li.dropdown' ).click( function ( e ) {
      e.stopPropagation()

      var self = $( this )
      self.find( 'a' ).blur()

      if ( self.hasClass( 'open' ) && ! self.data( 'sos-click' ) ) {
        self.removeClass( 'open' )
      } else {
        self.addClass( 'open' )
      }
    } ).hover( function () {
      // Don't worry about mobile devices
      if ( $( window ).width() < mobileWidth ) {
        return
      }

      var self = $( this )
      self.addClass( 'open' )
      self.data( 'sos-click', true )

      setTimeout( function () {
        self.data( 'sos-click', false )
      }, 5 )
    }, function ( e ) {
      // Don't worry about mobile devices
      if ( $( window ).width() < mobileWidth ) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      $( this ).removeClass( 'open' )
    } )
  } )

  $( 'ul.dropdown-menu' ).click( function ( e ) {
    if ( ( $( e.target ).is( ':not(a)' ) && $( e.target ).is( ':not(li)' ) ) || $( e.target ).is( '.dropdown-title') ) {
      e.preventDefault();
      e.stopPropagation();
    }
  } )
}( jQuery );
