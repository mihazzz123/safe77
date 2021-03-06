$(document).ready(function() {
  //First-slider
  if(window.matchMedia('(min-width: 1200px)').matches){
    var sdSlides = 6;
  }
  if(window.matchMedia('(max-width: 1200px)').matches){
    var sdSlides = 4;
  }
  if(window.matchMedia('(max-width: 768px)').matches){
    var sdSlides = 3;
    $(".sdslider").css('width', '90%');
  }
  if(window.matchMedia('(max-width: 640px)').matches){
    var sdSlides = 2;
  }
  if(window.matchMedia('(max-width: 450px)').matches){
    var sdSlides = 1;
  }
 
  $(".ftslider-wrapper").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
    $(".sdslider-wrapper").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: "<div class='sdslider-arrow sdslider-arrow-left'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.04 172'><title>icon-back</title><g  data-name='Слой 2'><g  data-name='Слой 1'><path d='M11.93,86l77.6,77.6a5.15,5.15,0,0,1,1.34,3.53,4.56,4.56,0,0,1-1.34,3.36,3.64,3.64,0,0,1-1.6,1.18A5.64,5.64,0,0,1,86,172a5.18,5.18,0,0,1-1.76-.34,3.61,3.61,0,0,1-1.6-1.18l-81.13-81A4.83,4.83,0,0,1,0,86a4.31,4.31,0,0,1,1.51-3.36L82.64,1.51a4.68,4.68,0,0,1,6.89,0A4.31,4.31,0,0,1,91,4.87,4.83,4.83,0,0,1,89.53,8.4Z'/></g></g></svg></div>",
    nextArrow: "<div class='sdslider-arrow sdslider-arrow-right'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.04 172'><title>icon-next</title><g  data-name='Слой 2'><g  data-name='Слой 1'><path d='M1.51,8.4A4.83,4.83,0,0,1,0,4.87,4.31,4.31,0,0,1,1.51,1.51,4.75,4.75,0,0,1,5,0,4.74,4.74,0,0,1,8.4,1.51L89.53,82.64A4.31,4.31,0,0,1,91,86a4.83,4.83,0,0,1-1.51,3.53l-81.13,81a3.61,3.61,0,0,1-1.6,1.18A5.16,5.16,0,0,1,5,172a5.63,5.63,0,0,1-1.93-.34,3.64,3.64,0,0,1-1.6-1.18,4.57,4.57,0,0,1-1.34-3.36,5.15,5.15,0,0,1,1.34-3.53L79.11,86Z'/></g></g></svg></div>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 451,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
  ]
  });
  
      $(".tdslider-wrapper").slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-button slick-button-left"></div>',
    nextArrow: '<div class="slick-button slick-button-right"></div>',
    responsive: [
          {
            breakpoint: 1650,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
  });
  
  if(window.matchMedia('(max-width: 1199px)').matches){
      $(".news-slider-wrapper").slick({
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-button slick-button-left"></div>',
      nextArrow: '<div class="slick-button slick-button-right"></div>',
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
          }
   
  
  $(".main-third-top__button-right").click(function() {
    $(this).parents('.main-third-top').parent().find('.slick-button-right').click();
  });
  $(".main-third-top__button-left").click(function() {
    $(this).parents('.main-third-top').parent().find('.slick-button-left').click();
  });
  
  $(".tdslider .slick-track").on('transitionstart', function() {
  if ($(this).parents('.tdslider').find('.slick-button-right').hasClass('slick-disabled')) {
      $(this).parents('.main-third-wrapper').prev().find('.main-third-top__button-right').css('background', 'transparent');
    } else {
      $(this).parents('.main-third-wrapper').prev().find('.main-third-top__button-right').css('background', '#fff');
    }
  
  if ($(this).parents('.tdslider').find('.slick-button-left').hasClass('slick-disabled')) {
      $(this).parents('.main-third-wrapper').prev().find('.main-third-top__button-left').css('background', 'transparent');
    } else {
      $(this).parents('.main-third-wrapper').prev().find('.main-third-top__button-left').css('background', '#fff');
    }
    });
  
  
  
  $(".news-top__button-right").click(function() {
    $('.news-slider-wrapper').find('.slick-button-right').click();
  });
  $(".news-top__button-left").click(function() {
    $('.news-slider-wrapper').find('.slick-button-left').click();
  });
  
  $(".news-slider .slick-track").on('transitionstart', function() {
  if ($(this).parents('.news-slider').find('.slick-button-right').hasClass('slick-disabled')) {
      $(this).parents('.news-slider').prev().find('.news-top__button-right').css('background', 'transparent');
    } else {
      $(this).parents('.news-slider').prev().find('.news-top__button-right').css('background', '#fff');
    }
  
  if ($(this).parents('.news-slider').find('.slick-button-left').hasClass('slick-disabled')) {
      $(this).parents('.news-slider').prev().find('.news-top__button-left').css('background', 'transparent');
    } else {
      $(this).parents('.news-slider').prev().find('.news-top__button-left').css('background', '#fff');
    }
    });

  //Second-slider
  //Количество слайдов регулируется в Media Slider выше
  var slideWidth2 = ((1 / sdSlides) * $(".sdslider").width());
  var sdSlideCount = $(".sdslider-wrapper .sdslide:last").data('item');
  var sdSlideCurrent = 0;
  var lineWidth;

  //Правая стрелка
  $(".sdslider .slick-track").on('transitionstart', function() {
      sdSlideCurrent = $(this).find(".slick-current").attr('data-item');
      if (sdSlideCurrent == (sdSlideCount - 1)) {
        sdSlideCurrent = sdSlideCount - sdSlides;
        lineWidth = sdSlideCurrent / (sdSlideCount - sdSlides) * $(".main-second-line-wrapper").width();
        $(".main-second-line").width(lineWidth);
      } else {
      lineWidth = sdSlideCurrent / (sdSlideCount - sdSlides) * $(".main-second-line-wrapper").width();
      $(".main-second-line").width(lineWidth);
    }
  });

  //Наведение на карточку
  $(".tdslide").on('mouseenter', function() {
    $(this).find('.more-button').addClass('dflex');
    $(this).find('.instock-button').hide();
    $(this).find('.instock-button').removeClass('dflex');
    if(window.matchMedia('(max-width: 992px)').matches){} else {
      var descHeight = $(this).find('.tdslide-desc-addition ul').height();
      $(this).find('.tdslide-desc-addition').css('height', descHeight + 20);
      $(this).find('.tdslide-buybuttons').addClass('dflex');
      var srcImgSec = $(this).find('.good__image').attr('data-src-second');
      $(this).find('.good__image').attr('src', srcImgSec);
    }
    $(this).find('.tdslide-icon').addClass('dflex');
  });

  $(".tdslide").on('mouseleave', function() {
    $(this).find('.instock-button').addClass('dflex');
    $(this).find('.more-button').removeClass('dflex');
    if(window.matchMedia('(max-width: 992px)').matches){} else {
      $(this).find('.tdslide-desc-addition').css('height', '0');
      $(this).find('.tdslide-buybuttons').removeClass('dflex');
      var srcImg = $(this).find('.good__image').attr('data-src-def');
      $(this).find('.good__image').attr('src', srcImg);
    }
    $(this).find('.tdslide-icon').removeClass('dflex');
  });

  $(".tdslide-mobbutons-icons, .tdslide-mobbuton").click(function() {
    $(this).find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
    $(this).find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
    $(this).next().find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
    $(this).next().find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
    $(this).prev().find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
    $(this).prev().find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
    var descHeight = $(this).parents('.tdslide').find('.tdslide-desc-addition ul').height();
    if ($(this).find('.tdslide-mobbutons-icons__open').hasClass('dnone')) {
      $(this).parents('.tdslide').find('.tdslide-desc-addition').css('height', descHeight + 20);
    } else {
      $(this).parents('.tdslide').find('.tdslide-desc-addition').css('height', '0');
    }
    $(this).parents('.tdslide').find('.tdslide-buybuttons').toggleClass('dflex');
  });


  $(".tdslide-icon-1").hover(function() {
    $(this).next().addClass('dflex');
  }, function() {
    $(this).next().removeClass('dflex');
  });

  
  $('.tdslide').on('click', '.tdslide-icon', function(event) {
    event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
    var icons = $(this);
    var iconAdd = $(this).find('.add');
    var iconRemove = $(this).find('.remove');
    var iconText = $(this).find('.tdslide-iconAdd');
    var iconTextAdd = $(this).find('.tdslide-icon-2').attr('data-text-default');
    var iconTextRemove = $(this).find('.tdslide-icon-2').attr('data-text');
    $(this).toggleClass('added');
    if($(this).hasClass('added')){
      $(this).css({'display' : 'flex'});
      iconAdd.hide();
      iconRemove.show();
      iconText.text(iconTextRemove);
      iconRemove.addClass('dflex');
      icons.css({'display' : 'flex'});
    } else {
      iconAdd.show();
      iconRemove.hide();
      iconText.text(iconTextAdd);
      iconRemove.removeClass('dflex');
      icons.attr('style', '');
    }
    bookmarks();
    comparisons();
  });

  $('.tdslide').on('click', '.tdslide-onclick-button', function(event) {
    event.preventDefault();
    // $('body').css({'overflow' : 'hidden'});
    $('.click-modal').removeClass('passive').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    $('.click-modal__box').css({'transform' : 'scale(1)'});
    var name = $(this).parents('.tdslide-wrapper').find('.tdslide-title').text();
    $('.click-modal__value').text(name);
  });
  $('.compare-item').on('click', '.compare-item__click', function(event) {
    event.preventDefault();
    // $('body').css({'overflow' : 'hidden'});
    $('.click-modal').removeClass('passive').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    $('.click-modal__box').css({'transform' : 'scale(1)'});
    var name = $(this).parents('.compare-item').find('.compare-item__name').text();
    $('.click-modal__value').text(name);
  });
  $('.click-modal__close').click(function() {
    $('.click-modal').addClass('passive').removeClass('active');
    $('.click-modal__box').attr('style', '');
    $('body').attr('style', '');
  });
  $('.item-price__sale').on('click', function(event) {
    event.preventDefault();
    $('body').css({'overflow' : 'hidden'});
    $('.click-modal').removeClass('passive').addClass('active');
    $('.click-modal__box').css({'transform' : 'scale(1)'});
    var name = $(this).parents('.item-text').find('.item-text__title').text();
    $('.sale-modal__textarea').text(name);
  });
  
  $(function($){
    $(document).mouseup(function (e){ 
      var div = $('.header-modal__box'); 
      if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
        $('.click-modal').addClass('passive').removeClass('active');
        $('.click-modal__box').attr('style', '');
        $('body').attr('style', '');
      }
    });
  });

  $('.tdslide-icons').each(function() {
    $(this).find('.tdslide-icon').eq(0).addClass('bookmarks');
    $(this).find('.tdslide-icon').eq(1).addClass('comparison');
  });
  $('.compare-item__icons').each(function() {
    $(this).find('.compare-item__icon').eq(0).addClass('bookmarks');
    $(this).find('.compare-item__icon').eq(1).addClass('comparison');
  });
  
  var bookmark = $('.bookmarks');
  bookmark = $('.bookmarks.added').length;
  function bookmarks() {
    bookmark = $('.bookmarks.added').length;
    comparison = $('.comparison.added').length;
    if(bookmark != 0){
      $('.header-svg.not-active path').css({'fill' : '#a50103', 'stroke' : '#a50103'});
      $('.bookmark_count').show();
      $('.bookmark_count').text(bookmark);
    } else if(bookmark == 0 || comparison == 0 ) {
      $('.bookmark_count').hide();
      $('.header-svg.not-active path').attr('style', '');
    } else if(bookmark == 0) {
      $('.bookmark_count').hide();
      $('.header-svg.not-active path').attr('style', '');
    }
  }
  
  var comparison = $('.comparison');
  comparison = $('.comparison.added').length;
  function comparisons() {
    bookmark = $('.bookmarks.added').length;
    comparison = $('.comparison.added').length;
      if(comparison != 0){
        $('.header-svg.match-count path, .header-svg.match-count circle').css({'stroke' : '#a50103'});
        $('.header-svg.match-count path[data-name="layer1"]').css({'fill' : '#a50103'});
        $('.match_count').show();
        $('.match_count').text(comparison);
      } else if(bookmark == 0 || comparison == 0 ) {
        $('.match_count').hide();
        $('.header-svg.match-count path, .header-svg.match-count circle').attr('style', '');
      } else if(comparison == 0){
        $('.match_count').hide();
        $('.header-svg.match-count path, .header-svg.match-count circle').attr('style', '');
      }
  }
  // comparisons();

  $('.tdslide-buy-button').click(function() {
    $(this).addClass('click');
    var cartCount = $('.click').length;
    $('.value').text(cartCount);
  });


  $('.tdslide-1').on('mouseenter', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-1').css({'z-index' : '9999'});
      $('.main-third-2').css({'margin-top' : '-118px'});
    }
    if(window.matchMedia('(min-width: 1200px)').matches){
      $('.tdslider-1').css({'z-index' : '9999'});
      $('.main-third-2').css({'margin-top' : '-161px'});
    }
  });
  $('.tdslide-1').on('mouseleave', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-1').attr('style', '');
      $('.main-third-2').attr('style', '');
    }
  });
  $('.tdslide-2').on('mouseenter', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-2').css({'z-index' : '9999'});
      $('.main-third-3').css({'margin-top' : '-118px'});
    }
    if(window.matchMedia('(min-width: 1200px)').matches){
      $('.tdslider-2').css({'z-index' : '9999'});
      $('.main-third-3').css({'margin-top' : '-161px'});
    }
  });
  $('.tdslide-2').on('mouseleave', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-2').attr('style', '');
      $('.main-third-3').attr('style', '');
    }
  });
  $('.tdslide-3').on('mouseenter', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.news').css({'z-index' : '1'});
      $('.news').css({'margin-top' : '-118px'});
    }
    if(window.matchMedia('(min-width: 1200px)').matches){
      $('.tdslider-3').css({'z-index' : '9999'});
      $('.news').css({'margin-top' : '-161px'});
      $('.news').css({'z-index' : '1'});
    }
  });
  $('.tdslide-3').on('mouseleave', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-3').attr('style', '');
      $('.news').attr('style', '');
    }
  });
  
  $('.tdslide-1').on('mouseenter', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('footer').css({'margin-top' : '-118px'});
      $('.tdslider-1').css({'z-index' : '9999'});
    }
    if(window.matchMedia('(min-width: 1200px)').matches){
      $('.tdslider-1').css({'z-index' : '9999'});
      $('footer').css({'margin-top' : '-161px'});
    }
  });
  $('.tdslide-1').on('mouseleave', function() {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.tdslider-1').attr('style', '');
      $('footer').attr('style', '');
    }
  });
  
});
    