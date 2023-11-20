/*
===========================================================================
  Template Name   : RF Ingenieros
===========================================================================
*/

(function ($) {
  "use strict";

  /*--------------------------------------------------------
    / . Preloader
    /----------------------------------------------------------*/
  $(window).on("load", function (event) {
    $(".preloader").delay(800).fadeOut(500);
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  $(".service-carousel").owlCarousel({
    loop: !0,
    responsiveClass: !0,
    autoplay: !1,
    autoplayTimeout: 5e3,
    smartSpeed: 900,
    nav: !1,
    dots: !0,
    center: !0,
    margin: 30,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 2 } },
  });

  $(".testi-carousel").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
  });

  $(".testimonial-section").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    margin: 0,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 2, margin: 45 },
      1200: { items: 3, margin: 45 },
    },
  });

  $(".testimonial-carousel").owlCarousel({
    loop: !0,
    responsiveClass: !0,
    autoplay: !1,
    smartSpeed: 1500,
    nav: !1,
    dots: !0,
    center: !1,
    margin: 0,
    responsive: {
      0: { items: 1, margin: 0 },
      768: { items: 1 },
      992: { items: 2 },
    },
  });

  /* ==================================================
	# Testimonial Carousel
 ===============================================*/
  $(".testimonials-carousel").owlCarousel({
    loop: false,
    margin: 50,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
    },
  });

  /*--------------------------------------
  Isotope initialization
  --------------------------------------*/
  var $container = $(".isotope-wrap");
  if ($container.length > 0) {
    function createGalleryPopup(selector) {
      selector = selector || "";
      $(".featuredContainer").magnificPopup({
        delegate: selector + " a.popup-zoom",
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }

    var $isotope;
    var blogGallerIso = $(".featuredContainer", $container).imagesLoaded(
      function () {
        var selectero =
          $container
            .find(".isotope-classes-tab .nav-item:first-child")
            .data("filter") || "*";

        $isotope = $(".featuredContainer", $container).isotope({
          filter: selectero,
          transitionDuration: "1s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
          },
          visibleStyle: {
            transform: "scale(1)",
            opacity: 1,
          },
        });

        createGalleryPopup(selectero);
      }
    );
    $container.find(".isotope-classes-tab").on("click", "a", function () {
      var $this = $(this);
      $this.parent(".isotope-classes-tab").find("a").removeClass("current");
      $this.addClass("current");
      var selector = $this.attr("data-filter");
      $isotope.isotope({
        filter: selector,
      });
      createGalleryPopup(selector);
      return false;
    });
  }

  /*-------------------------------------
  Window On Load
  -------------------------------------*/
  $(window).on("load resize", function () {
    // Gallery Popup
    if ($(".zoom-gallery").length) {
      $(".zoom-gallery").each(function () {
        $(this).magnificPopup({
          delegate: "a.popup-zoom",
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    }

    // Popup
    var yPopup = $(".popup-youtube");
    if (yPopup.length) {
      yPopup.magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
  });

  $(".countup").counterUp({
    delay: 25,
    time: 2000,
  });

  jQuery(".testimonial-2-content").owlCarousel({
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    margin: 30,
    navText: [
      '<i class="ti-arrow-left"></i>',
      '<i class="ti-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });

  //Main Slider / Banner Carousel

  $(".banner-carousel").owlCarousel({
    loop: true,

    animateOut: "fadeOut",

    animateIn: "fadeIn",

    margin: 0,

    nav: true,

    smartSpeed: 500,

    autoplay: 8000,

    autoplayTimeout: 8000,

    navText: [
      '<span class="icon ti-arrow-left"></span>',
      '<span class="icon ti-arrow-right"></span>',
    ],

    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 1,
      },

      800: {
        items: 1,
      },

      1024: {
        items: 1,
      },
    },
  });

  $(".avli-testimonial-slider-wrap, .avli-blog-slide").owlCarousel({
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1100: {
        items: 3,
      },
      1300: {
        items: 3,
      },
      1900: {
        items: 3,
      },
    },
  });

  /* ==================================================
            # Testimonial Carousel
         ===============================================*/
  $(".Testimonial-carousel").owlCarousel({
    loop: false,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
    },
  });

  $(".project-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 3,
      },
    },
  });

  $(".services-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      800: {
        items: 2,
      },

      1024: {
        items: 3,
      },
    },
  });

  $(".banner-slider-two").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });

  $(".slider-carousel").owlCarousel({
    margin: 0,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    loop: true,
    dots: false,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
  });

  $(".rs-carousel").owlCarousel({
    margin: 0,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    loop: true,
    dots: false,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
  });

  $(".rs-carousel-pro").owlCarousel({
    margin: 30,
    autoplay: false,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsiveClass: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    slideTransition: "linear",
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  });

  /*  Testimonial-Slider-Owl-carousel  */

  $(".testimonial_slider_home1").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    dots: true,
    nav: false,
    rtl: false,
    autoplayHoverPause: false,
    autoplay: false,
    singleItem: true,
    smartSpeed: 1200,
    navText: [
      '<i class="flaticon-arrow-pointing-to-left"></i>',
      '<i class="flaticon-arrow-pointing-to-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      480: {
        items: 1,
        center: false,
      },
      600: {
        items: 1,
        center: false,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1280: {
        items: 3,
      },
    },
  });

  jQuery(".testimonial_slider_home1").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    dots: false,
    nav: false,
    rtl: false,
    autoplayHoverPause: false,
    autoplay: false,
    singleItem: true,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      480: {
        items: 1,
        center: false,
      },
      600: {
        items: 1,
        center: false,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1280: {
        items: 3,
      },
    },
  });

  $("#client-slide-2").owlCarousel({
    margin: 30,
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  });

  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".masonary-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  $(".magnific-mix-gallery").each(function () {
    var $container = $(this);
    var $imageLinks = $container.find(".item");

    var items = [];
    $imageLinks.each(function () {
      var $item = $(this);
      var type = "image";
      if ($item.hasClass("magnific-iframe")) {
        type = "iframe";
      }
      var magItem = {
        src: $item.attr("href"),
        type: type,
      };
      magItem.title = $item.data("title");
      items.push(magItem);
    });

    $imageLinks.magnificPopup({
      mainClass: "mfp-fade",
      items: items,
      gallery: {
        enabled: true,
        tPrev: $(this).data("prev-text"),
        tNext: $(this).data("next-text"),
      },
      type: "image",
      callbacks: {
        beforeOpen: function () {
          var index = $imageLinks.index(this.st.el);
          if (-1 !== index) {
            this.goTo(index);
          }
        },
      },
    });
  });

  // STICKY
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("nav-sticky");
    } else {
      $(".sticky").removeClass("nav-sticky");
    }
  });

  // SmoothLink
  $(".Header .nav-item a, .mouse-down a").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 0,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  //Scrollspy
  $(".navbar-nav").scrollspy({
    offset: 70,
  });

  function initScrollspy() {
    $("#navbarCollapse").scrollspy({
      offset: 20,
    });
  }

  // STICKY BUTTON
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-btn").addClass("active");
    } else {
      $(".nav-btn").removeClass("active");
    }
  });
  jQuery(".navbar-nav li a").click(function () {
    jQuery(this).parents(".navbar-collapse").removeClass("show");
  });
  jQuery(".mobileversions li a").click(function () {
    jQuery(this).parents(".navbar-collapse").removeClass("show");
  });

  jQuery(".navbar-nav li a").click(function () {
    jQuery(this).parents(".navbar-collapse").removeClass("show");
  });

  jQuery(".navbar-nav li a").click(function () {
    jQuery(this).parents(".app-medi-sidebar-inner").removeClass("wide_side_on");
  });

  $(".medi-app-side-toggle").on("click", function () {
    $(".app-medi-sidebar-inner").toggleClass("wide_side_on");
  });

  $(".medi-app-search-btn").on("click", function () {
    $(".app-medi-search-body").toggleClass("app-medi-search-open");
  });
})(jQuery);
