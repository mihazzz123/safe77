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

  $('.item-buttons__nav').on('click', '.item-buttons__btn', function() {
    var i = $('.item-buttons__btn').index($(this));
    $('.item-buttons__btn').removeClass('item-buttons__btn-active');
    $('.item-buttons__btn').eq(i).addClass('item-buttons__btn-active');
    $('.item-buttons__result').removeClass('dflex');
    $('.item-buttons__result').eq(i).addClass('dflex');
  });

  // Счётчики отзывово и опций 
  var valueFeed = $('#feedback_value'),
      val = $('.item-feedback').length,
      valueOptions = $('#options_value'),
      val2 = $('.item-options').length;
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
  var slider = $('#slider'),
      sliderM = $('#m_slider'),
      imgActive = $('#imgActive'),
      imgPasive = $('.imgPasive'),
      imgBar = $('.item-slider__slideBar'),
      imgBtn = $('.item-slider__slideBox'),
      btnLeft = $('.item-chevronLeft'),
      btnRight = $('.item-chevronRight');
      
      // отмена стандартного события при клике на ссылку
      slider.on('click', 'a', function(event) {
        event.preventDefault();
      });
      sliderM.on('click', 'a', function(event) {
        event.preventDefault();
      });
      
      // Смена активной картинки
      imgBar.on('click', '.imgPasive', function() {
        var i = imgPasive.index($(this)),
        srcImgPas = imgPasive.eq(i).attr('data-src');
        imgActive.animate({
          opacity: 0.8
        }, 200, function() {
          imgActive.attr('src', srcImgPas);
        });
        
        imgActive.animate({
          opacity: 1
        }, 200);
        imgBtn.css({'border' : '0'});
        imgBtn.eq(i).css({'border' : '1px solid #ccc'});
      });
      
      
      // Стрелки навигации
      btnLeft.click(function() {
        var valBtn = imgBtn.attr('data-src-val');
        var  b = 100;
        var c = +valBtn + +b;
        if(valBtn == 0){
          btnRight.css({'opacity' : '1'});
          btnLeft.css({'opacity' : '0.3'});
        } else {
          btnRight.css({'opacity' : '1'});
          imgBtn.css({'transform' : 'translate3d(' + c + '%, 0px, 0px)'});
          imgBtn.attr('data-src-val', c);
        } console.log(c);
      });
      
      
      btnRight.click(function() {
        var valBtn = imgBtn.attr('data-src-val');
        var  b = 100;
        var c = +valBtn - +b;
        if (valBtn == -200){
          btnLeft.css({'opacity' : '1'});
          btnRight.css({'opacity' : '0.3'});
        } else {
          imgBtn.css({'transform' : 'translate3d(' + c + '%, 0px, 0px)'});
          imgBtn.attr('data-src-val', c);
          btnLeft.css({'opacity' : '1'});
        }
        console.log(valBtn);
      });
      
      if($(window).width() > '1200'){
        var itemSlide = imgBtn.length;
        if(itemSlide == 5){
          btnLeft.hide();
          btnRight.hide();
        }
      };
      console.log(itemSlide);




      // MOBILE

  $('.item-text__button').on('click', function() {
    var active = $(this).find('.item-text__btnIconM').attr('data-src-second');
    var pasive = $(this).find('.item-text__btnIconM').attr('data-src');
   
    if($(this).find('.item-text__button').hasClass('.tem-text__button_active')){
      $(this).find('.item-text__btnIconM').attr('src', pasive);
      $(this).find('.item-text__btnClose').removeClass('item-text__btnClose_active');
      $(this).find('.item-text__btn').removeClass('item-text__btn_active');
    }
    
    $('.item-text__button').removeClass('item-text__button_active');
    
    $(this).find('.item-text__btnIconM').attr('src', active);
    $(this).toggleClass('item-text__button_active');
    $(this).find('.item-text__btn').toggleClass('item-text__btn_active');
    $(this).find('.item-text__btnClose').toggleClass('item-text__btnClose_active');
    
    if($(this).find('.item-text__button').hasClass('.tem-text__button_active')){
      $(this).find('.item-text__btn').addClass('item-text__btn_active');
      $(this).find('.item-text__btnIconM').attr('src', active);
    }


  });
      
    });