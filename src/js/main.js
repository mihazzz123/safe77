$(document).ready(function() {

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
  
  $('.m_header-nav').on('click', '.toggleCatalog', function() {
    var n = openCatalog.index($(this));
    catalog.eq(n).toggleClass('catalog__active');
    if((catalog).hasClass('catalog__active')){
      catalog.eq(!n).removeClass('catalog__active');
      bgBtn.eq(!n).removeClass('toggleCatalog__bg-active');
      $('body').css({'background' : '#000000ba'});
      bgBtn.eq(n).addClass('toggleCatalog__bg-active');
      iconOpen.eq(n).hide(100);
      iconOpen.eq(!n).show(100);
      iconClose.eq(n).show(100);
      iconClose.eq(!n).hide(100);
    } else { 
      $('body').attr('style', '');
      bgBtn.eq(n).removeClass('toggleCatalog__bg-active');
      iconClose.eq(n).hide(100);
      iconOpen.eq(n).show(100);
    }
    
    console.log(n);
    
  });
  
  $('.m_header-form__close').click(function() {
    $('body').attr('style', '');
    catalog.eq(2).removeClass('catalog__active');
    bgBtn.eq(2).removeClass('toggleCatalog__bg-active');
    iconOpen.eq(2).show(100);
    iconClose.eq(2).hide(100);
  });
  $('.toggleCatalog__bg-active').click(function() {
    catalog.removeClass('catalog__active');
    bgBtn.removeClass('toggleCatalog__bg-active');
    iconOpen.show(100);
    iconClose.hide(100);
  });
 
  

    //Scroll
    $(document).on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1000);
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