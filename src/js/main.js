$(document).ready(function() {

  // Фома поиска
  var searchOpen = $('.header-search'),
      search = $('.header-form'),
      searchClose = $('.header-form__close');

  searchOpen.on('click', function() {
    search.addClass('header-form__active');
  });

  searchClose.on('click', function() {
    search.removeClass('header-form__active');
  });

  // MOBILE CATALOG
  var openCatalog = $('.toggleCatalog'),
      catalog = $('.m_header-catalog'),
      bgBtn = $('.toggleCatalog__bg'),
      iconOpen = $('.m_header-catalog__open'),
      iconClose = $('.m_header-catalog__close'),
      openSub = $('.m_header-li__active'),
      subItem = $('.m_header-catalog__subItem');
      
  iconClose.hide();

  openCatalog.click(function() {
    catalog.toggleClass('m_header-catalog__active');
    bgBtn.toggleClass('toggleCatalog__bg-active');
    if(catalog.hasClass('m_header-catalog__active')){
      iconOpen.hide(100);
      iconClose.show(100);
      iconClose.css({'color' : '#ffffff'});
    } else {
      iconOpen.show(100);
      iconClose.hide(100);
    }
  });

  $('.m_header-catalog').on('click', '.m_header-li__active', function() {
    var n = openSub.index($(this));
    subItem.eq(n).toggleClass('m_header-catalog__subItem-active');
    if(subItem.eq(n).hasClass('m_header-catalog__subItem-active')){
      openSub.eq(n).css({'color' : '#a50103'});
    } else {
      openSub.eq(n).attr('style', '');
    }
    console.log(n);
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
  

 

});