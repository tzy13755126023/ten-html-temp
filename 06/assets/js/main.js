/*==============================================================================

 * Template Name: Creatopo- Agency and Business HTML5 Template
 * Author: ixtheme - (https://themeforest.net/user/theuxlab)
 * Description: Agency and Business HTML5 Template
 * Version: 1.0
 * Copyright 2019 theuxlab

==============================================================================*/

(function($) {
    "use strict";

    $(window).on("load", function() {
        videoPop();
        caseStudyPopup();

        // loader init
        $("body").addClass("loaded");
    });

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        var scrollHight = $(".hero-wrapper").height() / 2;
        if (scroll >= scrollHight) {
            $(".scrollUp").addClass("show");
        } else {
            $(".scrollUp").removeClass("show");
        }
    });

    $(document).ready(function() {
        menuInit();
        smoothScroll();
        numberCounting();
        testimonialsCarouselInit();
        testimonialsCarouselTwoInit();
        blogsCarouselInit();
        blogsCarouselTwoInit();
        serviceCarouselInit();
    });

    // scrollUp init
    function smoothScroll() {
        $(".scrollUp").on("click", function() {
            if (
                location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
                location.hostname === this.hostname
            ) {
                var target = $(this.hash);
                console.log(target);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                            scrollTop: target.offset().top - 70
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
            return false;
        });
    }

    // menu-wrapper init
    function menuInit() {
        $(".navigation-show").on("click", function() {
            $(this).addClass("toggleIcon");
            $(".navigation-close").removeClass("toggleIcon");
            $(".navigation").addClass("navigation_show");
        });
        $(".navigation-close").on("click", function() {
            $(this).removeClass("toggleIcon");
            $(".navigation-close").addClass("toggleIcon");
            $(".navigation").removeClass("navigation_show");
        });

        var widthh = $(window).width();
        if (widthh < 1200) {
            $(".dropToggle").on("click", function() {
                $(this).toggleClass("show");
                $(this).children(".dropWrap").slideToggle();
            });
        }
    }

    // Number Counting
    function numberCounting() {
        $(".counter").appear(function() {
            var count = $(this);
            count.countTo({
                from: 0,
                to: count.html(),
                speed: 2000,
                refreshInterval: 60
            });
        });
    }

    // magnificPopup Youtube active
    function videoPop() {
        if ($(".video-pop").length > 0) {
            $(".video-pop").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }

    // caseStudyPopup init
    function caseStudyPopup() {
        $(".zoom-gallery").magnificPopup({
            delegate: "a.zoom_image",
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: !0
            },
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(a) {
                    return a.find("img");
                }
            }
        });
    }

    // testimonialsCarouselInit Init testimonials-wrapper-2
    function testimonialsCarouselInit() {
        $(".testimonials-carousel.owl-carousel").owlCarousel({
            margin: 30,
            dotsEach: true,
            responsiveClass: true,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // testimonialsCarouselTwoInit Init
    function testimonialsCarouselTwoInit() {
        $(".testimonials-carousel-2.owl-carousel").owlCarousel({
            dotsEach: true,
            autoHeight: true,
            items: 1
        });
    }

    // blogsCarouselInit Init
    function blogsCarouselInit() {
        $(".blogs-carousel.owl-carousel").owlCarousel({
            margin: 30,
            dotsEach: true,
            autoHeight: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // blogsCarouselTwoInit Init
    function blogsCarouselTwoInit() {
        var blogOwl = $(".blogs-carousel-2.owl-carousel");
        blogOwl.owlCarousel({
            margin: 30,
            dots: false,
            navs: true,
            rewind: true,
            autoHeight: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        blogOwl.owlCarousel();
        $(".blog-carousel-bullets .next").click(function() {
            blogOwl.trigger("next.owl.carousel");
        });
        $(".blog-carousel-bullets .prev").click(function() {
            blogOwl.trigger("prev.owl.carousel");
        });
    }

    // serviceCarouselInit Init
    function serviceCarouselInit() {
        var serviceOwl = $(".service-carousel.owl-carousel");
        serviceOwl.owlCarousel({
            margin: 30,
            dots: false,
            navs: true,
            rewind: true,
            autoHeight: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        serviceOwl.owlCarousel();
        $(".service-carousel-bullets .next").click(function() {
            serviceOwl.trigger("next.owl.carousel");
        });
        $(".service-carousel-bullets .prev").click(function() {
            serviceOwl.trigger("prev.owl.carousel");
        });
    }
})(jQuery);