/*!
 * School of Sustainability
 * Copyright 2015 ASU
 */

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
