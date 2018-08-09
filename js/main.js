$(document).ready(function () {
  var $window = $(window);

  // menu

  var $menuBtn = $('.hamburger');
  var $menuIcon = $('.hamburger__icon');
  var $menu = $('.menu');
  var $body = $('body');
  var $menuMobileBtn = $('.js-menu__close');

  $menuBtn.click(function (evt) {
    evt.preventDefault();
    $menu.toggleClass("open");
    $menuIcon.toggleClass("open");
    $body.toggleClass("menu-open");
  });

  if ($window.width() < 1239) {
    $menuMobileBtn.click(function (evt) {
      evt.preventDefault();
      $menu.toggleClass("open");
      $menuIcon.toggleClass("open");
      $body.toggleClass("menu-open");
    });
  }

  // search input desktop

  var searchOpen = false;
  var $searchBtn = $(".js-search__btn");
  var $searchWrp = $(".js-search");
  var $headerNav = $(".js-header__nav");
  var $searchInput = $(".js-search__input");
  var $headerLogo = $(".js-header__logo");
  var $headerWNav = $(".js-header__wnav");

  $searchBtn.click(function (e) {
    e.preventDefault();

    if (!searchOpen) {
      if ($window.width() > 1919) {
        $headerNav.fadeOut();
      }
      if ($window.width() < 1239) {
        $headerLogo.fadeOut();
      }
      $headerWNav.fadeOut();
      setTimeout(function () {
        $searchWrp.addClass("search--open");
      }, 500);
      $searchInput.focus();
      searchOpen = true;
      return false;
    } else if

    ($searchInput.val() === '') {
      $searchWrp.removeClass("search--open");
      searchOpen = false;
      if ($window.width() > 1919) {
        setTimeout(function () {
          $headerNav.fadeIn();
          $headerWNav.fadeIn();
        }, 500);
      }
      if ($window.width() < 1239) {
        setTimeout(function () {
          $headerLogo.fadeIn();
        }, 500);
      }
      if ($window.width() > 768) {
        setTimeout(function () {
          $headerWNav.fadeIn();
        }, 500);
      }
      return false;
    }
  });

  // mobile menu search

  var mSearchOpen = false;
  var $mSearchBtn = $(".js-msearch__btn");
  var $mSearchWrp = $(".js-msearch");
  var $mSearchInput = $(".js-msearch__input");
  var $mHeaderLogo = $(".js-menu__logo");

  $mSearchBtn.click(function (e) {
    e.preventDefault();

    if (!mSearchOpen) {
      $mHeaderLogo.fadeOut();
      setTimeout(function () {
        $mSearchWrp.addClass("search--open");
      }, 500);
      $mSearchInput.focus();
      mSearchOpen = true;
      return false;
    } else if ($mSearchInput.val() === '') {
      $mSearchWrp.removeClass("search--open");
      mSearchOpen = false;
      setTimeout(function () {
        $mHeaderLogo.fadeIn();
      }, 500);
      return false;
    }
  });

  $menuMobileBtn.click(function (e) {
    e.preventDefault();
    $mSearchWrp.removeClass("search--open");
    mSearchOpen = false;
    setTimeout(function () {
      $mHeaderLogo.fadeIn();
    }, 500);
  });

  // mobile menu navigation

  mobileMenu = function () {
    var $menuMob = $('.js-mob-menu');
    var $menuBlock = $('.js-mob-menu-block');
    var $menuSubtitle = $('.js-mob-menu-subtitle');
    var $menuLink = $('.js-mob-menu-link');
    var $menuColumns = $('.js-menu-column');

    var $closeBtn = $('.js-menu__close');
    var $backBtn = $('.js-menu__back');


    $backBtn.hide();
    if ($window.width() < 768) {

      $menuLink.fadeOut();
      $menuBlock.each(function () {
        if ($(this).children().length > 1)
          $(this).addClass("menu__block--hascontent");
      });

      $menuSubtitle.click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('menu__block--hascontent')) {
          $menuColumns.hide();
          $(this).parent().parent().show();
          $(this).parent().parent().children().hide();
          $(this).parent().fadeIn();
          $(this).parent().children().stop().fadeIn();
          $(this).stop().hide();

          $closeBtn.hide();
          $backBtn.fadeIn();

        }
      });

      $backBtn.hide().click(
        function () {
          $menuColumns.show();
          $menuBlock.show();
          $menuSubtitle.fadeIn();
          $menuLink.hide();
          $closeBtn.fadeIn();
          $backBtn.hide();
        }
      );
    }
  }();


  // scroll init


  if ($window.width() > 310) {
    $('#fullpage').fullpage({
      sectionSelector: '.fullpage-slide',
      navigation: true,
      slidesNavigation: false,
      controlArrows: false,
      responsiveHeight: true,

      onLeave: function (index, nextIndex, direction) {
        var $headerNav = $('.header__nav');

        if (direction == 'down' && index == 1) {
          $headerNav.addClass('hidden');
        } else if (direction == 'up' && index == 2) {
          $headerNav.removeClass('hidden');
        }
      }
    });
  }


  // slider init

  var $carouselTablet = $('.slider-circle-nav');
  var $carouselTableMobile = $('.table-slider-mobile');
  var $carouselTableWhiteMobile = $('.js-table-white-slider');
  var $planesSliderMobile = $('.js-planes-slider');

  toggleSlick = function () {
    if ($window.width() < 1239) {
      $carouselTablet.slick({
        focusOnSelect: false,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        draggable: true,
        touchMove: true,
        prevArrow: '<a class="slider__arrow--prev slider__arrow" aria-label="Previous"></a>',
        nextArrow: '<a class="slider__arrow--next slider__arrow" aria-label="Next"></a>',
        speed: 400,
        autoplay: false,
        fade: false,
        cssEase: 'ease-in-out',
      });
    }
    if ($window.width() < 768) {
      $carouselTableMobile.slick({
        focusOnSelect: false,
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        draggable: true,
        touchMove: true,
        prevArrow: '<a class="slider__arrow slider__arrow--prev slider__arrow--table" aria-label="Previous"></a>',
        nextArrow: '<a class="slider__arrow slider__arrow--next slider__arrow--table" aria-label="Next"></a>',
        speed: 400,
        autoplay: false,
        fade: false,
        cssEase: 'ease-in-out',
      });
    }

    if ($window.width() < 768) {
      $carouselTableWhiteMobile.slick({
        focusOnSelect: false,
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        draggable: true,
        touchMove: true,
        prevArrow: '<a class="slider__arrow slider__arrow--prev slider__arrow--table gray" aria-label="Previous"></a>',
        nextArrow: '<a class="slider__arrow slider__arrow--next slider__arrow--table gray" aria-label="Next"></a>',
        speed: 400,
        autoplay: false,
        fade: false,
        cssEase: 'ease-in-out',
      });
    }

    if ($window.width() < 768) {
      $planesSliderMobile.slick({
        focusOnSelect: false,
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        draggable: true,
        touchMove: true,
        prevArrow: '<a class="slider__arrow slider__arrow--prev slider__arrow--table planes" aria-label="Previous"></a>',
        nextArrow: '<a class="slider__arrow slider__arrow--next slider__arrow--table planes" aria-label="Next"></a>',
        speed: 400,
        autoplay: false,
        fade: false,
        cssEase: 'ease-in-out',
      });
    }

  // sync sliders in facilities
  if ($window.width() < 768) {
    $('.facilities__slider').slick({
      focusOnSelect: false,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      draggable: false,
      touchMove: false,
      prevArrow: '<a class="slider__arrow slider__arrow--prev slider__arrow--table" aria-label="Previous"></a>',
      nextArrow: '<a class="slider__arrow slider__arrow--next slider__arrow--table" aria-label="Next"></a>',
      speed: 200,
      autoplay: false,
      fade: false,
      cssEase: 'ease-in-out',
      asNavFor: '.facilities__slider, .facilities__header-slider',
    });
    $('.facilities__header-slider').slick({
      focusOnSelect: false,
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      draggable: false,
      touchMove: false,
      prevArrow: '<a class="slider__arrow slider__arrow--prev slider__arrow--table" aria-label="Previous"></a>',
      nextArrow: '<a class="slider__arrow slider__arrow--next slider__arrow--table" aria-label="Next"></a>',
      speed: 200,
      autoplay: false,
      fade: false,
      cssEase: 'ease-in-out',
      asNavFor: '.facilities__slider',
    });
  }

  };

  $window.resize(toggleSlick);
  toggleSlick();

  // smooth scroll

  $('.scroll-top a').each(function(){
    $(this).click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });



});