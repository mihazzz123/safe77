$(document).ready(function() {
  // калькулятор количества товаров, стоимости доставки и веса
  $('.cart-item__minus').on('click', function() {
    var calcResult = $(this).parent('.cart-item__calc').find('.cart-item__amount').attr('value');
    var result = $(this).parent('.cart-item__calc').find('.cart-item__amount');
    var priceTag = $(this).parents('.cart-item').find('.cart-item__price-value');
    var price = $(this).parents('.cart-item').find('.cart-item__price-value').attr('data-price');
    calcResult --;
    if(calcResult > 0){
      result.val(calcResult).attr('value', calcResult);
      var priceResult = price * calcResult;
      priceTag.text(priceResult);
    }
  });
  $('.cart-item__plus').on('click', function() {
    var calcResult = $(this).parent('.cart-item__calc').find('.cart-item__amount').attr('value');
    var priceTag = $(this).parents('.cart-item').find('.cart-item__price-value');
    var price = $(this).parents('.cart-item').find('.cart-item__price-value').attr('data-price');
    var result = $(this).parent('.cart-item__calc').find('.cart-item__amount');
    calcResult ++;
    result.val(calcResult).attr('value', calcResult);
    var priceResult = price * calcResult;
    priceTag.text(priceResult);
  });

  var pickupPrice = 0;
  function itemsCount(){
    var sum = 0;
    $('.cart-item__amount').each(function() {
      var sumSingle = $(this).attr('value');
      sum = sum + +sumSingle;
      $('.cart-concomitant__value').text(sum);
      $('#value_pickup').text('(' + sum + ' шт.) ');
      pickupPrice = sum * 350;
      $('#price_pickup').text(pickupPrice + ' руб.');
      $('.item_unload').text(pickupPrice + ' руб.');
    });
    finallyPrice();
  }
 
itemsCount();

function itemsWeight() {
  var sum = 0;
  $('.item_weight').each(function() {
    var amount = $(this).parents('.cart-item').find('.cart-item__amount').attr('value');
    var sumSingle = $(this).attr('data-weight');
    sumSingle = +sumSingle * amount;
    $(this).text(sumSingle);
    sum = sum + +sumSingle;
    $('#weight').text(sum);
    $('#weight_pickup').text('(' + sum + ' кг.)')
  });
  finallyPrice();
}
itemsWeight();

function itemsPrise() {
  var sum = 0;
  $('.cart-item__price-value').each(function() {
    var priceSingle = $(this).text();
    sum = sum + +priceSingle;
    $('.price_total').text(sum);
  });
  finallyPrice();
  }
  itemsPrise();
  
  var level = $('.order-pickup__input').val();
  $('.order-pickup__input').keyup(function() {
    level = $('.order-pickup__input').val();
    $('.order-pickup__input').attr('value', level);
    itemsUnload();
    finallyPrice();
  });
  var sumUnload = 0;
  function itemsUnload() {
    if($('.lift-active').hasClass('order-pickup__button-active') && $('.unload-active').hasClass('order-pickup__button-active')){
      if(level >= 1){
        var priceLevel = +level * 350;
        sumUnload = pickupPrice + priceLevel;
        $('#price_pickup').text(sumUnload + ' руб.');
        $('.item_unload').text(sumUnload + ' руб.');
        $('#delivery_status').text(level + ' этаж (без лифта)');
        finallyPrice();
      }
    } else {
      $('#delivery_status').text('(При наличии лифта)');
      itemsCount();
      finallyPrice();
    }
  }
  
  var priceDelivery = 0;
  function delivery() {
    var sum = $('.cart-concomitant__value').text();
    var mkad = $('.item-delivery__input').attr('value');
    priceDelivery = 0;
    var moscow = 40;
    if(sum == 1 && mkad == 0){
      $('.item-delivery__priceValue').text('700 руб.');
      $('#price_delivery').text('700 руб.');
      priceDelivery = 700;
    } else if (sum == 1 && mkad > 0 && mkad < 5){
      $('.item-delivery__priceValue').text('900 руб.');
      $('#price_delivery').text('900 руб.');
      priceDelivery = 900;
    } else if (sum > 1 && mkad == 0){
      $('.item-delivery__priceValue').text('0 руб.');
      $('#price_delivery').text('0 руб.');
      priceDelivery = 0;
    } else if (sum > 1 && mkad > 0 && mkad < 5){
      $('.item-delivery__priceValue').text('200 руб.');
      $('#price_delivery').text('200 руб.');
      priceDelivery = 200;
    } else if (sum == 1 && mkad > 5){
      priceDelivery = (+mkad - 5) * +moscow + 900;
      $('.item-delivery__priceValue').text(priceDelivery + ' руб.');
      $('#price_delivery').text(priceDelivery + ' руб.');
    } else if (sum > 1 && mkad > 5){
      priceDelivery = (+mkad - 5) * +moscow + 200;
      $('.item-delivery__priceValue').text(priceDelivery + ' руб.');
      $('#price_delivery').text(priceDelivery + ' руб.');
      finallyPrice();
    }
  }
  delivery();
  
  
  
  $(".cart-item__button").click(function() {
    itemsCount();
    itemsWeight();
    itemsPrise();
    delivery();
    finallyPrice();
  });
  
  // удаление товара
  $('.cart-item__remove').on('click', function() {
    $(this).parents('.cart-item').remove();
    itemsCount();
    itemsWeight();
    itemsPrise();
    delivery();
    finallyPrice();
  });
  
  
  $('.cart-delivery__minus').click(function() {
    var res = $('.cart-delivery__amount').val();
    if(res > 0){
      res = +res - 1;
      $('.cart-delivery__amount').val(res).attr('value', res);
    }
    delivery();
    finallyPrice();
  });
  $('.cart-delivery__plus').click(function() {
    var res = $('.cart-delivery__amount').val();
    res = +res + 1;
    $('.cart-delivery__amount').val(res).attr('value', res);
    delivery();
    finallyPrice();
  });
  $('.cart-delivery__amount').keyup(function() {
    var inputRes = $(this).val();
    $('.cart-delivery__amount').attr('value', inputRes);
    delivery();
    finallyPrice();
  });

  function finallyPrice() {
    var priceTotal = $('.price_total').text();
    $('.finally_price').text(+priceTotal + +pickupPrice + +priceDelivery +sumUnload);
  }
  finallyPrice();
  console.log(sumUnload);
  // кнопки доставка и самовывоз
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
  
  $('.cart-order__button-order').click(function(event) {
    event.preventDefault();
    $(this).hide();
    $('.order-block').addClass('dflex');
    $('.order-item').addClass('dflex');
  });


  $('.contacts-form__textarea').attr('placeholder', 'Реквизиты и примечания');
  
  $('.order-pickup__button').on('click', function() {
    $(this).parent('.order-pickup__row').find('.order-pickup__button').removeClass('order-pickup__button-active');
    $(this).addClass('order-pickup__button-active');
    itemsUnload();
  });
  
  
  
  
  // показать название файла
  $('#file').on('change', function(e) {
    $('.order-form__file-name').css({'display' : 'block'}).text('Название файла: ' + e.target.files[0].name);
  });
  
  
  
  
  
  
});