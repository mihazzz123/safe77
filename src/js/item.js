$(document).ready(function() {


  var btnAddInfo = $('.item-text__btnD'),
      resultAddInfo = $('.item_resBoxD'),
      btnAddInfo_icon = $('.item-text__btnIconD');
   
  $('.item-text__btnsD').on('click', '.item-text__btnD', function() {
    var i = btnAddInfo.index($(this));
    var active = btnAddInfo_icon.eq(i).attr('data-src-second');
    var pasive = btnAddInfo_icon.eq(0).attr('data-src');
    var pasive1 = btnAddInfo_icon.eq(1).attr('data-src');
    var pasive2 = btnAddInfo_icon.eq(2).attr('data-src');
    var pasive3 = btnAddInfo_icon.eq(3).attr('data-src');
    resultAddInfo.removeClass('dflex');
    resultAddInfo.eq(i).addClass('dflex');
    btnAddInfo.removeClass('item-text__btn_active');
    btnAddInfo.eq(i).addClass('item-text__btn_active');
    btnAddInfo_icon.eq(0).attr('src', pasive);
    btnAddInfo_icon.eq(1).attr('src', pasive1);
    btnAddInfo_icon.eq(2).attr('src', pasive2);
    btnAddInfo_icon.eq(3).attr('src', pasive3);
    if(btnAddInfo.hasClass('item-text__btn_active')){
      btnAddInfo_icon.eq(i).attr('src', active);
    } 
  });

  $('.item-buttons__navD').on('click', '.item-buttons__btnD', function() {
    var i = $('.item-buttons__btnD').index($(this));
    $('.item-buttons__btnD').removeClass('item-buttons__btn-active');
    $('.item-buttons__btnD').eq(i).addClass('item-buttons__btn-active');
    $('.item-buttons__resultD').removeClass('dflex');
    $('.item-buttons__resultD').eq(i).addClass('dflex');
  });

  // Счётчики отзывово и опций 
  var valueFeed = $('#feedback_value'),
      val = $('.item-feedbackD').length,
      valueOptions = $('#options_value'),
      val2 = $('.item-optionsD').length;
      valueFeed.text(val);
      valueOptions.text(val2);
      
      // Наведение на звездочки
      var star1 = $('#star1'),
      star2 = $('#star2'),
      star3 = $('#star3'),
      star4 = $('#star4'),
      star5 = $('#star5');
      
      star1.hover(function() {
        $(this).css({"background-position" : "center -30px"});
        star2.attr("style", "");
        star3.attr("style", "");
        star4.attr("style", "");
        star5.attr("style", "");
      });
      star2.hover(function() {
        $(this).css({"background-position" : "center -30px"});
        star1.css({"background-position" : "center -30px"});
        star3.attr("style", "");
        star4.attr("style", "");
        star5.attr("style", "");
      });
      star3.hover(function() {
        $(this).css({"background-position" : "center -30px"});
        star1.css({"background-position" : "center -30px"});
        star2.css({"background-position" : "center -30px"});
        star4.attr("style", "");
        star5.attr("style", "");
      });
      star4.hover(function() {
        $(this).css({"background-position" : "center -30px"});
        star1.css({"background-position" : "center -30px"});
        star2.css({"background-position" : "center -30px"});
        star3.css({"background-position" : "center -30px"});
        star5.attr("style", "");
      });
      star5.hover(function() {
        $(this).css({"background-position" : "center -30px"});
        star1.css({"background-position" : "center -30px"});
        star2.css({"background-position" : "center -30px"});
        star3.css({"background-position" : "center -30px"});
        star4.css({"background-position" : "center -30px"});
      });
      
      // Присваивание аттрибутов для textarea
      var textarea1 = $('#textarea_1'),
      textarea2 = $('#textarea_2');
      
      textarea1.attr('placeholder', 'Коментарии к оценке').attr('autocomplete', 'off').attr('required', 'required');
      textarea2.attr('placeholder', 'Текст сообщения').attr('autocomplete', 'off').attr('required', 'required');
      
      // Калькулятор стоимости доставки
      var minus = $('.item-delivery__btnMinus'),
      plus = $('.item-delivery__btnPlus'),
      input = $('.item-delivery__input'),
      priceVal = $('.item-delivery__priceValue');

      input.keyup(function() {
        var inputRes = +input.val();
        input.val(parseInt(input.val()) - 1);
        input.change();
        priceVal.text(700 + inputRes);

      });
      
      minus.click(function() {
        if(input.val() == 0){
            return false;
          } else {
            input.val(parseInt(input.val()) - 1);
            input.change();
          var inputRes = +input.val();
          priceVal.text(700 + inputRes);
          return false;
        }
      });
          
      plus.click(function() {
        input.val(parseInt(input.val()) + 1);
        input.change();
        var inputRes = +input.val();
        priceVal.text(700 + inputRes);
        return false;
      });
          
  // Слайдер 
    

  $('#sliderD').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    arrows: false,
    asNavFor: '#slider-bar_D'
  });
  $('#slider-bar_D').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '#sliderD',
    prevArrow: $('.prev-arrowD'),
    nextArrow: $('.next-arrowD'),
    arrows: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          prevArrow: $('.prev-arrowD'),
          nextArrow: $('.next-arrowD'),
          arrows: true,
          slidesToShow: 4,
          centerMode: false
        }
      }
    ]
  });

  // $("#sliderD .slick-track").on('transitionstart', function() {
  //   var n = $(this).find('.slick-current').attr('data-slick-index');

  $('#sliderD').on('click', '.slick-current', function() {
    $('.slick-track').addClass('notransition');
    var n = $(this).attr('data-slick-index');
    $('#slider-modal').slickGoTo(n);
    $('.item-modal').removeClass('passive');
    $('.item-modal').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    setTimeout(function() {
      $('.slick-track').removeClass('notransition');
    }, 500);
  });
  
  
  
  $('#slider-modal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.item-modal__prev'),
    nextArrow: $('.item-modal__next'),
    arrows: true
  });
  
  $('.item-slider__zoomD').click(function() {
    $('.slick-track').addClass('notransition');
    var n = $('#sliderD').find('.slick-active').attr('data-slick-index');
    $('#slider-modal').slickGoTo(n);
    $('.item-modal').removeClass('passive');
    $('.item-modal').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    setTimeout(function() {
      $('.slick-track').removeClass('notransition');
    }, 500);
  });
  $('.item-modal__btn').click(function() {
    $('.item-modal').removeClass('active');
    $('.item-modal').addClass('passive');
    $('body').attr('style', '');
  });
  $(function($){
    $(document).mouseup(function (e){ 
      var div = $('.item-modal__slide, .item-modal__prev, .item-modal__next'); 
      if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
        $('.item-modal').removeClass('active');
        $('.item-modal').addClass('passive');
        $('body').attr('style', '');
      }
    });
  });
  
  $('#specification-link').click(function(event) {
    event.preventDefault();
    var i = $(this).attr('href');
    var top = $(i).offset().top;
    $('body,html').animate({scrollTop: top},500);
    $('.item-buttons__result').removeClass('dflex');
    $('.item-buttons__btnD').removeClass('item-buttons__btn-active');
    $('#btnSpecifications').addClass('item-buttons__btn-active');
    $('#specification').addClass('dflex');
  });
  $('#options-link').click(function(event) {
    event.preventDefault();
    var i = $(this).attr('href');
    var top = $(i).offset().top;
    $('body,html').animate({scrollTop: top},500);
    $('.item-buttons__btnD').removeClass('item-buttons__btn-active');
    $('#btnOptions').addClass('item-buttons__btn-active');
    $('.item-buttons__result').removeClass('dflex');
    $('#options').addClass('dflex');
  });
  
  
  
  
  
  
  // MOBILE
  
  // slider
  $('#sliderM').slick({
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    asNavFor: '#slider-bar_M',
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 786,
        settings: {
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 786,
        settings: {
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 425,
        settings: {
          centerPadding: '0px',
        }
      }
      ]
  });
  $('#slider-bar_M').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '#sliderM',
    prevArrow: $('.prev-arrowM'),
    nextArrow: $('.next-arrowM'),
    arrows: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          prevArrow: $('.prev-arrowM'),
          nextArrow: $('.next-arrowM'),
          arrows: true,
          slidesToShow: 5,
          centerMode: false
        }
      },
      {
        breakpoint: 546,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
  
  $('.item-slider__zoomM').click(function() {
    $('.slick-track').addClass('notransition');
    var n = $('#sliderM').find('.slick-current').attr('data-slick-index');
    $('#slider-modal').slickGoTo(n);
    $('.item-modal').removeClass('passive');
    $('.item-modal').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    setTimeout(function() {
      $('.slick-track').removeClass('notransition');
    }, 500);
  });
  
  $('#sliderM').on('click', '.slick-current', function() {
    $('.slick-track').addClass('notransition');
    var n = $(this).attr('data-slick-index');
    $('#slider-modal').slickGoTo(n);
    $('.item-modal').removeClass('passive');
    $('.item-modal').addClass('active');
    $('body').css({'overflow' : 'hidden'});
    setTimeout(function() {
      $('.slick-track').removeClass('notransition');
    }, 500);
  });

  $('.item-text__btns').on('click', '.item-text__btnM', function() {
    var n = $('.item-text__btnM').index($(this));
    var active = $(this).find('.item-text__btnIconM').attr('data-src-second');
    var pasive = $('.item-text__btnIconM').eq(0).attr('data-src');
    var pasive1 = $('.item-text__btnIconM').eq(1).attr('data-src');
    var pasive2 = $('.item-text__btnIconM').eq(2).attr('data-src');
    var pasive3 = $('.item-text__btnIconM').eq(3).attr('data-src');
    
    if($('.item-text__btnM').eq(n).hasClass('item-text__btn_active')){
      $('.item-text__btnIconM').eq(0).attr('src', pasive);
      $('.item-text__btnIconM').eq(1).attr('src', pasive1);
      $('.item-text__btnIconM').eq(2).attr('src', pasive2);
      $('.item-text__btnIconM').eq(3).attr('src', pasive3);
      $(this).find('.item-text__btnClose').removeClass('item-text__btnClose_active');
      $('.item-text__button').eq(n).removeClass('item-text__button_active');
      $('.item-text__btnM').eq(n).removeClass('item-text__btn_active');
    } else {
      $('.item-text__btnIconM').eq(0).attr('src', pasive);
      $('.item-text__btnIconM').eq(1).attr('src', pasive1);
      $('.item-text__btnIconM').eq(2).attr('src', pasive2);
      $('.item-text__btnIconM').eq(3).attr('src', pasive3);
      $('.item-text__btnClose').removeClass('item-text__btnClose_active');
      $('.item-text__button').removeClass('item-text__button_active');
      $('.item-text__btnM').removeClass('item-text__btn_active');
      $('.item-text__btnM').eq(n).toggleClass('item-text__btn_active');
      $(this).find('.item-text__btnIconM').attr('src', active);
      $(this).find('.item-text__btnClose').toggleClass('item-text__btnClose_active');
      $('.item-text__button').eq(n).toggleClass('item-text__button_active');
      
      if($('.item-text__btnM').eq(n).hasClass('item-text__btn_active')){
        $(this).find('.item-text__btnClose').addClass('item-text__btnClose_active');
        $('.item-text__button').eq(n).addClass('item-text__button_active');
      } else {
        $(this).find('.item-text__btnClose').removeClass('item-text__btnClose_active');
        $('.item-text__button').eq(n).removeClass('item-text__button_active');
      }
    }
    
 
  });
  var valueFeedM = $('#feedback_valueM'),
      valM = $('.item-feedbackM').length,
      valueOptionsM = $('#options_valueM'),
      val2M = $('.item-optionsM').length;
      valueFeedM.text(valM);
      valueOptionsM.text(val2M);
  if(val2M == +0){
    $('.btnOptions').css({'color' : '#c0c0c0'});
  } 
  // Присваивание аттрибутов для textarea
  var textarea1M = $('#textarea_1M'),
  textarea2M = $('#textarea_2M');
  
  textarea1M.attr('placeholder', 'Коментарии к оценке').attr('autocomplete', 'off').attr('required', 'required');
  textarea2M.attr('placeholder', 'Текст сообщения').attr('autocomplete', 'off').attr('required', 'required');
  
  $('#specificationM_link').click(function(event) {
    event.preventDefault();
    var i = $(this).attr('href');
    var top = $(i).offset().top;
    $('body,html').animate({scrollTop: top},500);
    $('.item-buttons__button').removeClass('item-buttons__button_active');
    $('.item-buttons__button').eq(1).addClass('item-buttons__button_active');
  });
  $('#optionsM_link').click(function(event) {
    event.preventDefault();
    var i = $(this).attr('href');
    var top = $(i).offset().top;
    $('body,html').animate({scrollTop: top},500);
    $('.item-buttons__button').removeClass('item-buttons__button_active');
    $('.item-buttons__button').eq(2).addClass('item-buttons__button_active');
  });

  $('.item-buttons__navM').on('click', '.item-buttons__btnM', function() {
    var n = $('.item-buttons__btnM').index($(this));
    
    if($('.item-buttons__btnM').eq(n).hasClass('item-buttons__btn_active')){
      $('.item-buttons__button').eq(n).removeClass('item-buttons__button_active');
      $('.item-buttons__btnM').eq(n).removeClass('item-buttons__btn_active');
    } else {
      $('.item-buttons__button').removeClass('item-buttons__button_active');
      $('.item-buttons__btnM').removeClass('item-buttons__btn_active');
      $('.item-buttons__btnM').eq(n).toggleClass('item-buttons__btn_active');
      $('.item-buttons__button').eq(n).toggleClass('item-buttons__button_active');
      
      if($('.item-buttons__btnM').eq(n).hasClass('item-buttons__btn_active')){
        $('.item-buttons__button').eq(n).addClass('item-buttons__button_active');
      } else {
        $('.item-buttons__button').eq(n).removeClass('item-buttons__button_active');
      }
    }
        
        
      });
      
      // Клик на звездочки
      var starM1 = $('#star1M'),
      starM2 = $('#star2M'),
      starM3 = $('#star3M'),
      starM4 = $('#star4M'),
      starM5 = $('#star5M');
      
      starM1.click(function() {
        $(this).css({"background-position" : "center -30px"});
        starM2.attr("style", "");
        starM3.attr("style", "");
        starM4.attr("style", "");
        starM5.attr("style", "");
      });
      starM2.click(function() {
        $(this).css({"background-position" : "center -30px"});
        starM1.css({"background-position" : "center -30px"});
        starM3.attr("style", "");
        starM4.attr("style", "");
        starM5.attr("style", "");
      });
      starM3.click(function() {
        $(this).css({"background-position" : "center -30px"});
        starM1.css({"background-position" : "center -30px"});
        starM2.css({"background-position" : "center -30px"});
        starM4.attr("style", "");
        starM5.attr("style", "");
      });
      starM4.click(function() {
        $(this).css({"background-position" : "center -30px"});
        starM1.css({"background-position" : "center -30px"});
        starM2.css({"background-position" : "center -30px"});
        starM3.css({"background-position" : "center -30px"});
        starM5.attr("style", "");
      });
      starM5.click(function() {
        $(this).css({"background-position" : "center -30px"});
        starM1.css({"background-position" : "center -30px"});
        starM2.css({"background-position" : "center -30px"});
        starM3.css({"background-position" : "center -30px"});
        starM4.css({"background-position" : "center -30px"});
      });
      
    });