(function ($) {
    "use strict";
	
	var xerohyipApp = {
		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */	
		contentLoading: function() {
			$("body").imagesLoaded( function() {
				$('.preloader').delay(2000).fadeOut('slow');
				setTimeout(function() {
				    //After 2s, the no-scroll class of the body will be removed
				    $('body').removeClass('no-scroll');
					$("body").addClass("loading-done");
				}, 2000); //Here you can change preloader time
			});
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
		/* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            var mobilesearch = $('.site-header .navigation-area .header-navigation-right').clone().appendTo('.mobile-menu');
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fas fa-times'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '1199',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu-area .mobile-menu'
            });
        },	
        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length) {
                $('.site-header .site-navigation').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(500);
                        } else {
                            $('#sticky-header').slideUp(500);
                        }
                    }
                });
            } 
        },
        
        /*-------------------------------------------
            ## Initialize Plugin
        --------------------------------------------- */
        initialize_plugin: function () {
            // Page Animation Script
            // $("[data-animate]").scrolla({
            //     mobile: true,
            //     once: true
            // });

            // Light Box for ( gallery, video )
            $('a[data-rel^=lightcase]').lightcase();

            // Nice Select for select input type
            if ($('.select-custom').length) {
                $('.select-custom').niceSelect();
            }

            // Terms Menu
            $('.terms-menu .has-submenu > a').on('click', function (e) {
                var element = $(this).parent('.terms-menu .has-submenu');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.has-submenu').removeClass('open');
                    element.find('.sub-menu').slideUp(300);
                  } else {
                    element.addClass('open');
                    element.children('.sub-menu').slideDown(300);
                    element.siblings('.has-submenu').children('.sub-menu').slideUp(300);
                    element.siblings('.has-submenu').removeClass('open');
                    element.siblings('.has-submenu').find('.has-submenu').removeClass('open');
                    element.siblings('.has-submenu').find('.has-submenu').slideUp(300);
                }
            });

            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var element = $(this).parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    element.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').children('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });
        },

        /* ---------------------------------------------
            ## Promo Numbers
         --------------------------------------------- */
        promo_numbers: function() {
            $(".fanfact-promo-numbers").each(function () {
                $(this).isInViewport(function(status) {
                    if (status === "entered") {
                        for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        },  

        /* ---------------------------------------------
            ## Brands Carousel
         --------------------------------------------- */
         brands_carousel: function() {
            if ($('.brands-carousel').length) {
                var items = 4;
                $('.brands-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        481: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Testimonial Carousel
		 --------------------------------------------- */
		testimonial_carousel: function() {
            if ($('#testimonail-carousel').length) {
                var items = 3;
                $('#testimonail-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }

            if ($('#testimonail-carousel2').length) {
                var feedbackSlider = jQuery('#testimonail-carousel2');
                feedbackSlider.owlCarousel({
                    center: true,
                    items: 1,
                    autoplay: false,
                    autoplayTimeout: 10000,
                    smartSpeed: 1500,
                    margin: 0,
                    singleItem: true,
                    loop: true,
                    nav: false,
                    dots: false,
                });

                var prevImg = feedbackSlider.find(".owl-item.active .thumbnails img").attr('src');
                $('.testimonail-carousel-thumb .thumb-prev img').attr('src', prevImg);
                var nextImg = feedbackSlider.trigger('next.owl.carousel').find(".thumbnails img").attr('src');
                $('.testimonail-carousel-thumb .thumb-next img').attr('src', nextImg);

                var activeImg = feedbackSlider.find(".owl-item.active .thumbnails img").attr('src');
                $('.testimonail-carousel-thumb .thumb-active img').attr('src', activeImg);

                feedbackSlider.on('changed.owl.carousel', function(property) {
                    var current = property.item.index;
                    var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
                    var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
                    var activeThumb = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
                    $('.thumb-prev').find('img').attr('src', prevThumb);
                    $('.thumb-next').find('img').attr('src', nextThumb);
                    $('.thumb-active').find('img').attr('src', activeThumb);
                });
                $('.thumb-next').on('click', function() {
                    feedbackSlider.trigger('next.owl.carousel', [500]);
                    return false;
                });
                $('.thumb-prev').on('click', function() {
                    feedbackSlider.trigger('prev.owl.carousel', [500]);
                    return false;
                });

                feedbackSlider.on("translate.owl.carousel", function(){
                    $(".testimonail-carousel-thumb .thumb-active").removeClass("active");
                });
            
                feedbackSlider.on("translated.owl.carousel", function(){
                    $(".testimonail-carousel-thumb .thumb-active").addClass("active");
                });
            }
        },
        /* ---------------------------------------------
		    ## Investor Carousel
		 --------------------------------------------- */
         investor_carousel: function() {
            var $investorCarousel = $(".investor-carousel");
            if ($investorCarousel.length) {
                var items = 3;
                $investorCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        620: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
            $('.investor-block .btn-links-area .btn-prev').on('click', function() {
                $investorCarousel.trigger('prev.owl.carousel');
            });
            $('.investor-block .btn-links-area .btn-next').on('click', function() {
                $investorCarousel.trigger('next.owl.carousel');
            });
        },

        /* ---------------------------------------------
            ## Line Chart
        ---------------------------------------------- */
        line_chart: function() {
            if ($('#simple-line-chart').length > 0) {
                new Chartist.Line('#simple-line-chart', {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    series: [
                        [1, 9, 7, 8, 5, 12, 5],
                        [2, 12, 9, 11, 7, 10, 3]
                    ]
                }, {
                    fullWidth: true,
                    axisY: {
                        labelInterpolationFnc: function(value) {
                            return (value + 'k' );
                        }
                    },
                    chartPadding: {
                        right: 40
                    },
                    plugins: [
                        Chartist.plugins.tooltip()
                    ]
                });
            }
        },
        
        /* ---------------------------------------------
            ## Circle Progress
        ---------------------------------------------- */
        circle_progress: function() {
            if ($('#circle').length > 0) {
                $('#circle').circleProgress({
                    value: 0.9,
                    size: 85,
                    fill: {color: '#546af4'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(90 * progress) + '<sapn>%</span>');
                });
            }
            if ($('#circle1').length > 0) {
                $('#circle1').circleProgress({
                    value: 0.4,
                    size: 85,
                    fill: {color: '#FF7F7F'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(40 * progress) + '<sapn>%</span>');
                });
            }
            if ($('#circle2').length > 0) {
                $('#circle2').circleProgress({
                    value: 0.95,
                    size: 85,
                    fill: {color: '#06cd48'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(95 * progress) + '<sapn>%</span>');
                });
            }
        },
        
		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
            var w = $(window).width();
            var MarginTop = (w > 1199) ? 80 : 0;
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.blog-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
		},	
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			xerohyipApp.scroll_top();
			xerohyipApp.mobile_menu();
			xerohyipApp.sticky_header();
			xerohyipApp.initialize_plugin();
            xerohyipApp.promo_numbers();
            xerohyipApp.brands_carousel();
            xerohyipApp.testimonial_carousel();
            xerohyipApp.investor_carousel();
            xerohyipApp.line_chart();
            xerohyipApp.circle_progress();
            xerohyipApp.sidebarScript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		xerohyipApp.initializ();
	});

	$(window).on('load', function() {
		xerohyipApp.contentLoading();
	});
})(jQuery);