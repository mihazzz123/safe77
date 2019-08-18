$(window).scroll(function(){
  $(".b-lazy").each(function() {
    var srcImg = $(this).attr('data-src');
    $(this).removeAttr('data-src');
    $(this).attr('src', srcImg);
    $(this).removeClass('b-lazy');
  });
});

$(document).ready(function() {

  $(".b-lazy").each(function() {
  var srcImg = $(this).attr('data-src');
  $(this).removeAttr('data-src');
  $(this).attr('src', srcImg);
  $(this).removeClass('b-lazy');
  });

  $('img, a').on('dragstart', function(event) {
      event.preventDefault();
  });

  //Кнопка на верх
  $('#btnTop').fadeOut();
  $(window).scroll(function () { 
    if($(this).scrollTop() > 400){
    $('#btnTop').fadeIn();
    } else {
    $('#btnTop').fadeOut();
    }
    });
    $('#btnTop').click(function() {
    $('body,html').animate({scrollTop:0},900);
  });

  //Наведение на меню
  var headerItem;
    $(".header-nav__item").on('mouseenter', function() {
      headerItem = $(this);
      if ($(this).hasClass('header-catalog__box')) {
        $(this).find('.header-catalog__item').css({
          'opacity': '1',
          'visibility': 'unset',
          'display': 'block'
        });
        $(".header-nav, .header-catalog__subItem").on('mousemove', function() {
          $(headerItem).find('.header-catalog__item').css({
          'opacity': '1',
          'visibility': 'unset',
          'display': 'block'
        });
        });
      } else {
      $('.header-catalog__box').find('.header-catalog__item').css({
      'opacity': '0',
      'visibility': 'hidden',
      'display': 'none'
    });
  }
  });

  $(".header-nav__item").on('mouseleave', function() {
    headerItem = $(this);
    if ($(this).hasClass('header-catalog__box')) {
    setTimeout(function () {
    $('.header-catalog__box').find('.header-catalog__item').css({
      'opacity': '0',
      'visibility': 'hidden'
    });
    }, 0);
  }
  });

  $('.header-catalog__li-active').hover(function() {
    $('.header-catalog__subItem').css({
      'opacity': '0',
      'transition-delay': '0s',
      'visibility': 'hidden'
    });
    $(this).find('.header-catalog__subItem').css({
      'opacity': '1',
      'visibility': 'unset'
    });
  }, function() {
    $(this).find('.header-catalog__subItem').css({
      'opacity': '0',
      'transition-delay': '0.45s',
      'visibility': 'hidden'
    });
  });

  // Фома поиска
  var searchOpen = $('.header-search'),
      search = $('.header-form'),
      searchClose = $('.header-form__close');

  searchOpen.on('click', function() {
    search.addClass('header-form__active active');
  });

  searchClose.on('click', function() {
    search.removeClass('header-form__active active');
  });

  $('.header-form__input1').keyup(function(){
    if ($('.header-form__input1').val() == '') {
      $('.header-search-items1').css('display', 'none');
    } else {
    $('.header-search-items1').css('display', 'block');
  }
    var searchInput = $(this).val();
  $('.header-search-items li a').each(function() {
    var searchTitle = $(this).text();
    if (searchTitle.indexOf(searchInput) >= 0 ) {
      $(this).parents('li').show();
    } else {
      $(this).parents('li').hide();
    }
  });
  $('.header-search-items li:last').show();
  });


  $('.header-form__input2').keyup(function(){
    if ($('.header-form__input2').val() == '') {
      $('.header-search-items2').css('display', 'none');
    } else {
    $('.header-search-items2').css('display', 'block');
  }
  $('.m_form-search').css('min-height', '320px');
  var searchInput = $(this).val();
  $('.header-search-items li a').each(function() {
    var searchTitle = $(this).text();
    if (searchTitle.indexOf(searchInput) >= 0 ) {
      $(this).parents('li').show();
    } else {
      $(this).parents('li').hide();
    }
  });
  $('.header-search-items li:last').show();
  });

    $('.header-modal-city-search').blur(function() {
      $('.header-search-items3').css('display', 'none');
    });

    $('.header-modal-city-search').keyup(function(){
    if ($('.header-modal-city-search').val() == '') {
      $('.header-search-items3').css('display', 'none');
    } else {
    $('.header-search-items3').css('display', 'block');
  }
  var searchInput = $(this).val();
  $('.header-search-items3 li a').each(function() {
    var searchTitle = $(this).text();
    if (searchTitle.indexOf(searchInput) >= 0 ) {
      $(this).parents('li').show();
    } else {
      $(this).parents('li').hide();
    }
  });
  });

  $('.header-search-items1').width($('.header-form__input1').width() + 20);

// MOBILE CATALOG
  var openCatalog = $('.toggleCatalog'),
      catalog = $('.m_activeItem'),
      bgBtn = $('.toggleCatalog__bg'),
      iconOpen = $('.open'),
      iconClose = $('.close'),
      openSub = $('.active-menu__active'),
      subItem = $('.m_header-catalog__subItem'),
      openModal1 = $('.callme'),
      openModal2 = $('.header-city__text'),
      headerModal = $('.header-modal'),
      headerModal1 = $('.header-modal1'),
      headerModal2 = $('.header-modal2'),
      closeModal = $('.header-modal__close'),
      activeMenu = $('.active-menu');

  // iconClose.hide();
  $('.m_header-catalog').on('click', '.active-menu__active', function() {
    var n = openSub.index($(this));
    subItem.eq(n).toggleClass('catalog__subItem-active active');
    if(subItem.eq(n).hasClass('catalog__subItem-active')){
      openSub.eq(n).css({'color' : '#a50103'});
      } else {
      openSub.eq(n).attr('style', '');
    }
  });
  

  $('.m_header-wrapper').click(function() {
    $(".toggleCatalog__bg").removeClass('toggleCatalog__bg-active');
    $('.m_activeItem').removeClass('catalog__active');
    $('.m_header-nav .open').show();
    $('.m_header-nav .close').hide();
    $('.m_form-search').removeAttr('style');
    $(this).hide();
  });


  $('.m_header-nav__link').on('click', function() {

    $(this).find('.m_activeItem').click(function(e) {
        e.stopPropagation();
    });

    if ($(this).find('.m_activeItem').hasClass('catalog__active')) {
      $(this).find(".toggleCatalog__bg").removeClass('toggleCatalog__bg-active');
      $(this).find('.m_activeItem').removeClass('catalog__active');
      $(this).find('.close').hide();
      $(this).find('.open').show();
      $('.m_header-wrapper').hide();
      $('.m_form-search').removeAttr('style');
    } else {

    $(".toggleCatalog__bg").removeClass('toggleCatalog__bg-active');
    $('.m_activeItem').removeClass('catalog__active');
    $('.m_header-nav .open').show();
    $('.m_header-nav .close').hide();
    $('.m_form-search').removeAttr('style');

    $(this).find(".toggleCatalog__bg").toggleClass('toggleCatalog__bg-active');
    $(this).find('.m_activeItem').toggleClass('catalog__active');

    if($(this).find('.m_activeItem').hasClass('catalog__active')){
      $('.m_header-wrapper').show();
      $(this).find('.m_form-search').css('min-height', '320px');
      $(this).find(".toggleCatalog__bg").addClass('toggleCatalog__bg-active');
      $(this).find('.close').show();
      $(this).find('.open').hide();
    } else { 
      $('.m_header-wrapper').hide();
      bgBtn.eq(n).removeClass('toggleCatalog__bg-active');
      $(this).find('.close').hide();
      $(this).find('.open').show();
      $('.m_form-search').removeAttr('style');
    } 
  }
  });

  $('.toggleCatalog__bg-active').click(function() {
    catalog.removeClass('catalog__active');
    bgBtn.removeClass('toggleCatalog__bg-active');
    iconOpen.show(100);
    iconClose.hide(100);
  });
  
  openModal1.on('click', function() {
    headerModal1.addClass('header-modal__active active');
    //$('body').css({'background' : '#000000ba'});
    headerModal1.css({'background' : '#000000ba'});
  });
    openModal2.on('click', function() {
    headerModal2.addClass('header-modal__active active');
    //$('body').css({'background' : '#000000ba'});
    headerModal2.css({'background' : '#000000ba'});
  });
    closeModal.on('click', function() {
    headerModal.removeClass('header-modal__active active');
    //$('body').attr('style', '');
     headerModal.attr('style', '');
    });
    
    var placeholder = 'Сообщение';
    $('.contacts-form__textarea').attr('placeholder', placeholder);
    $('.header-modal__textarea').attr('placeholder', placeholder);
    $('.header-modal__textarea').focus(function () {
      if($(this).val() === placeholder){
        $(this).attr('value', '');
      }
    });
    $('.header-modal__textarea').blur(function () {
      if($(this).val() === ''){
        $(this).attr('value', placeholder);
      }
    });
    $('.contacts-form__textarea').focus(function () {
      if($(this).val() === placeholder){
        $(this).attr('value', '');
      }
    });
    $('.contacts-form__textarea').blur(function () {
      if($(this).val() === ''){
        $(this).attr('value', placeholder);
      }
    });
    
    $(function($) {
      $(document).mouseup(function (e) {
        if (!$('.header-modal__box').is(e.target)
        & $('.header-modal__box').has(e.target).length === 0) {
          headerModal.removeClass('header-modal__active');
          $('body').attr('style', '');
      }
    });
  });
  
  $('.header-modal-cities a').on('click', function() {
    var city = $(this).text();
    $('.header-city__text').text(city);
    headerModal.removeClass('header-modal__active active');
    //$('body').attr('style', '');
     headerModal.attr('style', '');
  });
  
});