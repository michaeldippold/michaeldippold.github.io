jQuery( document ).ready(function( $ ) {

	$('.callout .text h2').flowtype({
		fontRatio : 13
	});

	$('.callout .text span').flowtype({
		fontRatio : 6
	});

	$('.about .right').flowtype({
		fontRatio : 21
	});

  $('.projects .single')
    .mouseover(function() {
      $(this).addClass('pulse');
    })
    .mouseout(function() {
      $(this).removeClass('pulse');
    });

    $('.projects .single').match_height();
    
    $('.blog-posts .single-post').match_height();
	
});

(function ( $ ) { //inline jQuery plugin to match height of elements
    $.fn.match_height = function() {
        var height=0;
        this.each(function() {
            if($(this).height() > height) {
                height = $(this).height();
            }
        });
        return this.each(function() {
            $(this).height(height);
        });
    };
}( jQuery ));

/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));