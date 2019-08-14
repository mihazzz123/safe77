$(document).ready(function() {

 var son = 0;
  var amount = $('.cart-item__amount').each(function(i, e) {
    son += $(e).val();
    console.log(son);
  });
  $('.cart-item__minus').on('click', function() {
    var calcResult = $(this).parent('.cart-item__calc').find('.cart-item__amount').val();
    var result = $(this).parent('.cart-item__calc').find('.cart-item__amount');
    var priceTag = $(this).parents('.cart-item').find('.cart-item__price-value');
    var price = $(this).parents('.cart-item').find('.cart-item__price-value').attr('data-price');
    calcResult --;
    if(calcResult > 0){
      result.val(calcResult);
      var priceResult = price * calcResult;
      priceTag.text(priceResult);
    }
  });
  $('.cart-item__plus').on('click', function() {
    var priceTag = $(this).parents('.cart-item').find('.cart-item__price-value');
    var price = $(this).parents('.cart-item').find('.cart-item__price-value').attr('data-price');
    var calcResult = $(this).parent('.cart-item__calc').find('.cart-item__amount').val();
    var result = $(this).parent('.cart-item__calc').find('.cart-item__amount');
    calcResult ++;
    result.val(calcResult);
    var priceResult = price * calcResult;
    priceTag.text(priceResult);
  });
  
  
  $('.cart-item__remove').on('click', function() {
    $(this).parents('.cart-item').remove();
  });


  $('.cart-buttons__btn').on('click', function() {
    var dataSrc = $(this).find('.item-text__btnIconD').attr('data-src-second');
    var dataSrcSec1 = $('.item-text__btnIconD').eq(0).attr('data-src');
    var dataSrcSec2 = $('.item-text__btnIconD').eq(1).attr('data-src');
    $('.item-text__btnIconD').attr('src', dataSrc);
    $('.cart-buttons__btn').eq(0).removeClass('item-text__btn_active').find('.item-text__btnIconD').attr('src', dataSrcSec1);
    $('.cart-buttons__btn').eq(1).removeClass('item-text__btn_active').find('.item-text__btnIconD').attr('src', dataSrcSec2);
    $(this).addClass('item-text__btn_active').find('.item-text__btnIconD').attr('src', dataSrc);
    if($('.cart-buttons__btn').eq(0).hasClass('item-text__btn_active')){
      $('.cart-delivery').addClass('dflex');
      $('.cart-concomitant__row-delivery').addClass('dflex');
      $('.order-delivery__textarea').addClass('dflex');
      $('.cart-pickup').removeClass('dflex');
      $('.order-delivery__pickup').removeClass('dflex');
    } else {
      $('.cart-delivery').removeClass('dflex');
      $('.cart-concomitant__row-delivery').removeClass('dflex');
      $('.order-delivery__textarea').removeClass('dflex');
      $('.cart-pickup').addClass('dflex');
      $('.order-delivery__pickup').addClass('dflex');
    }
  });

  $('.contacts-form__textarea').attr('placeholder', 'Реквизиты и примечания');

  $('.order-pickup__button').on('click', function() {
    $(this).parent('.order-pickup__row').find('.order-pickup__button').removeClass('order-pickup__button-active');
    $(this).addClass('order-pickup__button-active');
  });

  

  
  
  $('#file').on('change', function(e) {
    $('.order-form__file-name').css({'display' : 'block'}).text('Название файла: ' + e.target.files[0].name);
  });

  
  
  
  
  
});