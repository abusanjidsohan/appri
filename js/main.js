(function ($) {
"use strict";

	// meanmenu/mobile responsive
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767"
	});

	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});

	// counter
	$('.counter').counterUp({
		delay: 10,
		time: 4000
	});

	// magnificPopup video view 
	$('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

	// slick slider
	  $('.testimonial-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.test-img-active'
	  });
	  $('.test-img-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimonial-active',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
	  });

	  // // owlCarousel
	$('.brand-active').owlCarousel({
		loop:true,
		autoplay: true,
		autoplaySpeed: false,
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		margin:50,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			997:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();

	// scroll window
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});
	

})(jQuery);



	


	



	// // mainSlider
	// function mainSlider() {
	// 	var BasicSlider = $('.slider-active');
	// 	BasicSlider.on('init', function (e, slick) {
	// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
	// 		doAnimations($firstAnimatingElements);
	// 	});
	// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
	// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
	// 		doAnimations($animatingElements);
	// 	});
	// 	BasicSlider.slick({
	// 		autoplay: false,
	// 		autoplaySpeed: 10000,
	// 		dots: false,
	// 		fade: true,
	// 		arrows: false,
	// 		responsive: [
	// 			{ breakpoint: 767, settings: { dots: false, arrows: false } }
	// 		]
	// 	});

	// 	function doAnimations(elements) {
	// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	// 		elements.each(function () {
	// 			var $this = $(this);
	// 			var $animationDelay = $this.data('delay');
	// 			var $animationType = 'animated ' + $this.data('animation');
	// 			$this.css({
	// 				'animation-delay': $animationDelay,
	// 				'-webkit-animation-delay': $animationDelay
	// 			});
	// 			$this.addClass($animationType).one(animationEndEvents, function () {
	// 				$this.removeClass($animationType);
	// 			});
	// 		});
	// 	}
	// }
	// mainSlider();

	


	// // isotop
	// $('.grid').imagesLoaded( function() {
	// 	// init Isotope
	// 	var $grid = $('.grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	percentPosition: true,
	// 	masonry: {
	// 		// use outer width of grid-sizer for columnWidth
	// 		columnWidth: '.grid-item',
	// 	}
	// 	});
	// });

	// // filter items on button click
	// $('.portfolio-menu').on( 'click', 'button', function() {
	// var filterValue = $(this).attr('data-filter');
	// $grid.isotope({ filter: filterValue });
	// });

	// //for menu active class
	// $('.portfolio-menu button').on('click', function(event) {
	// 	$(this).siblings('.active').removeClass('active');
	// 	$(this).addClass('active');
	// 	event.preventDefault();
	// });






