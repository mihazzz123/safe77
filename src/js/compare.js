$(document).ready(function() {
  
  $('.compare-item__icon-bookmarks').on('click', function() {
    $(this).find('.compare-item__icon-img').eq(0).toggleClass('remove').toggleClass('add');
    $(this).find('.compare-item__icon-img').eq(1).toggleClass('add').toggleClass('remove');
    if($(this).find('.compare-item__icon-img').eq(0).hasClass('add')){
      $(this).find('.compare-item__icon-desc').text('В закладки');
      $(this).attr('style', "");
    } else {
      $(this).find('.compare-item__icon-desc').text('Удалить');
      $(this).css({'visibility' : 'visible'});
    }
  });
  
  $('.compare-item__icon-compare').on('click', function() {
    $(this).parents('.compare-item').remove();
    num = $('.compare-item').length;
    $('.compare-list__value-numb').text(num);
    if(window.matchMedia('(min-width: 1400px)').matches){
      if(num <= 5){
        $('.compare-slider__buttons').hide();
      }
    }
    $('.compare-list__value-numb').text(num);
    if(window.matchMedia('(min-width: 300px)').matches){
      if(num <= 1){
        $('.compare-slider__buttons').hide();
      }
    }
    if(window.matchMedia('(min-width: 427px)').matches){
      if(num <= 2){
        $('.compare-slider__buttons').hide();
      }
    }
    if(window.matchMedia('(min-width: 800px)').matches){
      if(num <= 3){
        $('.compare-slider__buttons').hide();
      }
    }
    if(window.matchMedia('(min-width: 1200px)').matches){
      if(num <= 4){
        $('.compare-slider__buttons').hide();
      }
    }
   
    if(num == 0){
      $('.compare-box').remove();
      $('.compare-no').show();
    }
  });
  
  $('#compare-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $('.main-third-top__button-left-1'),
    nextArrow: $('.main-third-top__button-right-1'),
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  
 
  $('.compare-list__clean').click(function() {
    num = $('.compare-item').length;
    $('.compare-list__value-numb').text(num);
    $('.compare-no').show();
    $('.compare-box').remove();
  });
  var num = $('.compare-item').length;
  $('.compare-list__value-numb').text(num);
});