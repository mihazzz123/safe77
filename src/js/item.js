$(document).ready(function() {


  var btnAddInfo = $('.item-text__btn'),
      resultAddInfo = $('.item_resBox'),
      btnAddInfo_icon = $('.item-text__btnIcon');
   
  $('.item-text__btns').on('click', '.item-text__btn', function() {
    var activ = $(this).find( btnAddInfo_icon ).attr('data-src-second');
    $(this).find( btnAddInfo_icon) .attr('src', activ);
    var i = btnAddInfo.index($(this));
    resultAddInfo.removeClass('dflex');
    resultAddInfo.eq(i).addClass('dflex');
    btnAddInfo.removeClass('item-text__btn_active');
    btnAddInfo.eq(i).addClass('item-text__btn_active');
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
        imgBtn.attr('style', '');
        imgBtn.eq(i).css({'border' : '1px solid #ccc'});
      });
      
      imgBtn.css({'transform' : 'translate3d(' + a + 'px, 0px, 0px)'});
      btnLeft.click(function() {
        var a = 0,
            b = 82,
            c = a + b;
            imgBtn.css({'transform' : 'translate3d(' + c + 'px, 0px, 0px)'});
      });
      btnRight.click(function() {
        var a = 0,
            b = 82,
            c = a - b;
            imgBtn.css({'transform' : 'translate3d(' + c + 'px, 0px, 0px)'});
            console.log(rightStyle);
      });
        
});