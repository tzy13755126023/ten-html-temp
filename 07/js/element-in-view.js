(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".testimonial-section .image-column .inner-column .author-one, .testimonial-section .image-column .inner-column .author-two, .testimonial-section .image-column .inner-column .author-three,  .testimonial-section .image-column .inner-column .author-four,  .testimonial-section .image-column .inner-column .author-five,  .testimonial-section .image-column .inner-column .author-six,  .testimonial-section .image-column .inner-column .author-seven,  .testimonial-section .image-column .inner-column .author-eight,  .testimonial-section .image-column .inner-column .author-nine,  .testimonial-section .image-column .inner-column .author-ten, .testimonial-section .image-column .inner-column .author-eleven, .testimonial-section-two .image-column .inner-column .author-one, .testimonial-section-two .image-column .inner-column .author-two, .testimonial-section-two .image-column .inner-column .author-three, .testimonial-section-two .image-column .inner-column .author-four, .testimonial-section-two .image-column .inner-column .author-five, .testimonial-section-two .image-column .inner-column .icon").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".testimonial-section .image-column .inner-column .author-one, .testimonial-section .image-column .inner-column .author-two, .testimonial-section .image-column .inner-column .author-three,  .testimonial-section .image-column .inner-column .author-four,  .testimonial-section .image-column .inner-column .author-five,  .testimonial-section .image-column .inner-column .author-six,  .testimonial-section .image-column .inner-column .author-seven,  .testimonial-section .image-column .inner-column .author-eight,  .testimonial-section .image-column .inner-column .author-nine,  .testimonial-section .image-column .inner-column .author-ten,  .testimonial-section .image-column .inner-column .author-eleven, .testimonial-section-two .image-column .inner-column .author-one, .testimonial-section-two .image-column .inner-column .author-two, .testimonial-section-two .image-column .inner-column .author-three, .testimonial-section-two .image-column .inner-column .author-four, .testimonial-section-two .image-column .inner-column .author-five, .testimonial-section-two .image-column .inner-column .icon").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});