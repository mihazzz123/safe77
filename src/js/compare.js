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
      }
    ]
  });
});