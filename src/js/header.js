$(document).ready(function() {

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

  $('.header-form__input').keyup(function(){
    if ($('.header-form__input').val() == '') {
      $('.header-search-items').css('display', 'none');
    } else {
    $('.header-search-items').css('display', 'block');
  }
  var searchInput = $(this).val();
  $('.header-search-items li a').each(function() {
    var searchTitle = $(this).text();
    if (searchTitle.indexOf(searchInput) > 0 ) {
      $(this).parents('li').show();
    } else {
      $(this).parents('li').hide();
    }
  });
  $('.header-search-items li:last').show();
  });

  // MOBILE CATALOG
  var openCatalog = $('.toggleCatalog'),
      catalog = $('.m_activeItem'),
      bgBtn = $('.toggleCatalog__bg'),
      iconOpen = $('.open'),
      iconClose = $('.close'),
      openSub = $('.active-menu__active'),
      subItem = $('.m_header-catalog__subItem'),
      openModal = $('.callme'),
      headerModal = $('.header-modal'),
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
  



  $('.m_header-nav__link').on('click', function() {

    if ($(this).find('.m_activeItem').hasClass('catalog__active')) {
      $(this).find(".toggleCatalog__bg").removeClass('toggleCatalog__bg-active');
      $(this).find('.m_activeItem').removeClass('catalog__active');
      $(this).find('.close').hide();
      $(this).find('.open').show();
    } else {

    $(".toggleCatalog__bg").removeClass('toggleCatalog__bg-active');
    $('.m_activeItem').removeClass('catalog__active');
    $('.m_header-nav .open').show();
    $('.m_header-nav .close').hide();

    $(this).find(".toggleCatalog__bg").toggleClass('toggleCatalog__bg-active');
    $(this).find('.m_activeItem').toggleClass('catalog__active');

    if($(this).find('.m_activeItem').hasClass('catalog__active')){
      $('body').css({'background' : '#000000ba'});
      $(this).find(".toggleCatalog__bg").addClass('toggleCatalog__bg-active');
      $(this).find('.close').show();
      $(this).find('.open').hide();
    } else { 
      $('body').attr('style', '');
      bgBtn.eq(n).removeClass('toggleCatalog__bg-active');
      $(this).find('.close').hide();
      $(this).find('.open').show();
    }
}
    
  });

  $('.toggleCatalog__bg-active').click(function() {
    catalog.removeClass('catalog__active');
    bgBtn.removeClass('toggleCatalog__bg-active');
    iconOpen.show(100);
    iconClose.hide(100);
  });
  
    openModal.on('click', function() {
      headerModal.addClass('header-modal__active active');
      $('body').css({'background' : '#000000ba'});
      headerModal.css({'background' : '#000000ba'});
    });
    closeModal.on('click', function() {
      headerModal.removeClass('header-modal__active active');
      $('body').attr('style', '');
       headerModal.attr('style', '');
    });

    var placeholder = 'Сообщение';
    $('.header-modal__textarea').attr('placeholder', placeholder);
    $('.header-modal__textarea').attr('required', 'required');
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

    $(function($) {
      $(document).mouseup(function (e) {
        if (!$('.header-modal__box').is(e.target)
        & $('.header-modal__box').has(e.target).length === 0) {
          headerModal.removeClass('header-modal__active');
          $('body').attr('style', '');
        }
      });
    });

});