$(window).scroll(function(e){
    var browserWidth = $(window).width();
    if (browserWidth >= 1024) {
      el = $(".site-header");
  
      jQueryscrolling = 0; // Position you want element to assume during scroll
      jQuerybounds = 50; // boundary of when to change element to fixed and scroll
  
      if ($(this).scrollTop() > jQuerybounds) {
          $(el).addClass("sticky-header");
      }
      if ($(this).scrollTop() < jQuerybounds) {
          $(el).removeClass("sticky-header");
      }
  }
  });

  $(document).ready(function() {
      
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	
	
	
	
	
	
	
	
});