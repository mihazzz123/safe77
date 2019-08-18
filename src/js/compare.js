$(document).ready(function() {
  
  $('.compare-item__icon-bookmarks').on('click', function() {
    $(this).find('.compare-item__icon-img').eq(0).toggleClass('remove').toggleClass('add').toggleClass('added');
    $(this).find('.compare-item__icon-img').eq(1).toggleClass('add').toggleClass('remove');
    if($(this).find('.compare-item__icon-img').eq(0).hasClass('add')){
      $(this).find('.compare-item__icon-desc').text('В закладки');
      $(this).attr('style', "");
    } else {
      $(this).find('.compare-item__icon-desc').text('Удалить');
      $(this).css({'visibility' : 'visible'});
    }
    bookmarks();
  });
  
  function bookmarks() {
    if(window.matchMedia('(max-width: 546px)').matches){
      $('.m_header-callback').hide();
      $('.m_header-links-1').addClass('dflex');
    }
    var bookmark = $('.bookmarks');
    bookmark = $('.bookmarks .added').length;
    $('.header-svg.not-active path').css({'fill' : '#a50103', 'stroke' : '#a50103'});
    $('.bookmark_count').show();
    $('.bookmark_count').text(bookmark);
    if(bookmark == 0){
      $('.header-svg.not-active path').attr('style', '');
      $('.bookmark_count').hide();
      $('.m_header-callback').show();
      $('.m_header-links-1').removeClass('dflex');
    }
  }
  
  
  $('.compare-item__icon-compare').on('click', function() {
    $(this).parents('.compare-item').remove();
    num = $('.compare-item').length;
    $('.compare-list__value-numb').text(num);
    $('.match_count').text(num);
    $('.header-svg.match-count path, .header-svg.match-count circle').css({'stroke' : '#a50103'});
    $('.header-svg.match-count path').eq(2).css({'fill' : '#a50103'});
    $('.match_count').show();
    $('.match_count').text(num);
    if(num == 0){
      $('.header-svg.match-count path, .header-svg.match-count circle').attr('style', '');
      $('.match_count').hide();
      $('.m_header-callback').show();
      $('.m_header-links-1').removeClass('dflex');
    }
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
    touchMove: false,
    touchThreshold: 1,
    responsive: [
      {
        breakpoint: 1440,
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
    $('.match_count').text(num);
    $('.header-svg.match-count path, .header-svg.match-count circle').attr('style', '');
    $('.match_count').hide();
    $('.m_header-callback').show();
    $('.m_header-links-1').removeClass('dflex');
  });
  var num = $('.compare-item').length;
  $('.compare-list__value-numb').text(num);
  $('.match_count').text(num);
  $('.header-svg.match-count path, .header-svg.match-count circle').css({'stroke' : '#a50103'});
  $('.header-svg.match-count path').eq(2).css({'fill' : '#a50103'});
});