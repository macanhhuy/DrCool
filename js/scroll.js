﻿$(function() {

	$('#wrapper > .item').waypoint({ offset: '50%' });

	$('body').delegate('#wrapper > .item', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active.end();
		
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');
		
		$('.selected').removeClass('selected');
		$('a[href=#'+$active.attr('id')+']').addClass('selected');
	});

	
	$('body > #menu ul li a').click(function() {
		$(this).addClass('selected');
	}).eq(0).addClass('selected');	
	
	
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});	
	
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function() {
			window.location.hash = target;
		});
		
	});	
	
});
	   