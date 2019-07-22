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

        //First-slider

      var slideWidth1 = $(".ftslider").width();
      $(".ftslide").width(slideWidth1);
      $(".ftslider-wrapper").width(slideWidth1 * 3);
      firstSlider();

      var slideCount = 1;
      //Нажатие на навигацию
      $('.ftslider-dot').click(function() {
            slideCount = $(this).data('item');
            $(".ftslider-wrapper").css('transform', 'translateX(-' + (slideWidth1 * slideCount) +'px)');
            $('.ftslider .ftslider-dot').removeClass('ftslider-dot__active');
            $('.ftslider .ftslider-dot-' + slideCount).addClass('ftslider-dot__active');
          });

//Функция прокрутки
    function firstSlider() {
        setTimeout(function () {

        $(".ftslider-wrapper").css('transform', 'translateX(-' + (slideWidth1 * slideCount) +'px)');
        $('.ftslider .ftslider-dot').removeClass('ftslider-dot__active');
        $('.ftslider .ftslider-dot-' + slideCount).addClass('ftslider-dot__active');
        slideCount++;
        if (slideCount < 3) {
                 firstSlider();
              } else {
                slideCount = 0;
                firstSlider();
              }
        }, 4000);
      }
        //First-slider


        //Media Slider
        if(window.matchMedia('(min-width: 1200px)').matches){
          var sdSlides = 6;
          var tdSlides1 = 4;
          var tdSlides2 = 4;
          var tdSlides3 = 4;
          var tdSlides4 = 4;
        }
        if(window.matchMedia('(max-width: 1199px)').matches){
          var sdSlides = 5;
          var tdSlides1 = 3;
          var tdSlides2 = 3;
          var tdSlides3 = 3;
          var tdSlides4 = 3;
        }
        if(window.matchMedia('(max-width: 992px)').matches){
          var sdSlides = 4;
          var tdSlides1 = 2;
          var tdSlides2 = 2;
          var tdSlides3 = 2;
        }
        if(window.matchMedia('(max-width: 768px)').matches){
          var sdSlides = 3;
          $(".sdslider").css('width', '80%');
          var tdSlides4 = 2;
        }
        if(window.matchMedia('(max-width: 576px)').matches){
          var sdSlides = 2;
          var tdSlides1 = 1;
          var tdSlides2 = 1;
          var tdSlides3 = 1;
        }
        if(window.matchMedia('(max-width: 420px)').matches){
          var sdSlides = 1;
          var tdSlides4 = 1;
        }
        //Media Slider

/*



      //Third-slider
      //Объявление переменных для 1 слайдера 3 версии
      //Количество слайдов регулируется в Media Slider выше
      var slideWidth3_1 = ((1 / tdSlides1) * $(".tdslider-1").width());
      $(".tdslide-1").width(slideWidth3_1 - 30);
      var tdSlideCount1 = $(".tdslider-wrapper-1 .tdslide-1:last").data('item');
      $(".tdslider-wrapper-1").width(slideWidth3_1 * tdSlideCount1);
      var tdSlideCurrent1 = 0;
      //Объявление переменных для 1 слайдера 3 версии

      //Объявление переменных для 2 слайдера 3 версии
      //Количество слайдов регулируется в Media Slider выше
      var slideWidth3_2 = ((1 / tdSlides2) * $(".tdslider-2").width());
      $(".tdslide-2").width(slideWidth3_2 - 30);
      var tdSlideCount2 = $(".tdslider-wrapper-2 .tdslide-2:last").data('item');
      $(".tdslider-wrapper-2").width(slideWidth3_2 * tdSlideCount2);
      var tdSlideCurrent2 = 0;
      //Объявление переменных для 2 слайдера 3 версии

      //Объявление переменных для 3 слайдера 3 версии
      //Количество слайдов регулируется в Media Slider выше
      var slideWidth3_3 = ((1 / tdSlides3) * $(".tdslider-3").width());
      $(".tdslide-3").width(slideWidth3_3 - 30);
      var tdSlideCount3 = $(".tdslider-wrapper-3 .tdslide-3:last").data('item');
      $(".tdslider-wrapper-3").width(slideWidth3_3 * tdSlideCount3);
      var tdSlideCurrent3 = 0;
      //Объявление переменных для 3 слайдера 3 версии

      //Объявление переменных для 4 слайдера 3 версии
      //Количество слайдов регулируется в Media Slider выше
      var slideWidth3_4 = ((1 / tdSlides4) * $(".news-slider").width());
      $(".news-slide").width(slideWidth3_4 - 20);
      var tdSlideCount4 = $(".news-slider-wrapper .news-slide:last").data('item');
      $(".news-slider-wrapper").width(slideWidth3_4 * tdSlideCount4);
      var tdSlideCurrent4 = 0;
      //Объявление переменных для 4 слайдера 3 версии




      //Нажатие правой стрелки 1 слайдера 3 версии
      $(".main-third-top__button-right-1").click(function() {
        tdSlideCurrent1++;
        if ((tdSlideCurrent1 + tdSlides1) < tdSlideCount1) {
          $(".tdslider-wrapper-1").css('transform', 'translateX(-' + (slideWidth3_1 * tdSlideCurrent1) +'px)');
        } else {
          tdSlideCurrent1 = tdSlideCount1 - tdSlides1;
          $(".tdslider-wrapper-1").css('transform', 'translateX(-' + (slideWidth3_1 * tdSlideCurrent1) +'px)');
        }
      });
      // Пролистывние
      var hammer311 = new Hammer(document.querySelector('.tdslider-1'));
      hammer311.get("swipe");
      hammer311.on("swipeleft", function(){
          $(".main-third-top__button-right-1").click();
      });
      //Нажатие правой стрелки 1 слайдера 3 версии

      //Нажатие правой стрелки 2 слайдера 3 версии
      $(".main-third-top__button-right-2").click(function() {
        tdSlideCurrent2++;
        if ((tdSlideCurrent2 + tdSlides2) < tdSlideCount2) {
          $(".tdslider-wrapper-2").css('transform', 'translateX(-' + (slideWidth3_2 * tdSlideCurrent2) +'px)');
        } else {
          tdSlideCurrent2 = tdSlideCount2 - tdSlides2;
          $(".tdslider-wrapper-2").css('transform', 'translateX(-' + (slideWidth3_2 * tdSlideCurrent2) +'px)');
        }
      });
      // Пролистывние
      var hammer321 = new Hammer(document.querySelector('.tdslider-2'));
      hammer321.get("swipe");
      hammer321.on("swipeleft", function(){
          $(".main-third-top__button-right-2").click();
      });
      //Нажатие правой стрелки 2 слайдера 3 версии

      //Нажатие правой стрелки 3 слайдера 3 версии
      $(".main-third-top__button-right-3").click(function() {
        tdSlideCurrent3++;
        if ((tdSlideCurrent3 + tdSlides3) < tdSlideCount3) {
          $(".tdslider-wrapper-3").css('transform', 'translateX(-' + (slideWidth3_3 * tdSlideCurrent3) +'px)');
        } else {
          tdSlideCurrent3 = tdSlideCount3 - tdSlides3;
          $(".tdslider-wrapper-3").css('transform', 'translateX(-' + (slideWidth3_3 * tdSlideCurrent3) +'px)');
        }
      });
      // Пролистывние
      var hammer331 = new Hammer(document.querySelector('.tdslider-3'));
      hammer331.get("swipe");
      hammer331.on("swipeleft", function(){
          $(".main-third-top__button-right-3").click();
      });
      //Нажатие правой стрелки 3 слайдера 3 версии

      //Нажатие правой стрелки 4 слайдера 3 версии
      $(".news-top__button-right").click(function() {
        tdSlideCurrent4++;
        if ((tdSlideCurrent4 + tdSlides4) < tdSlideCount4) {
          $(".news-slider-wrapper").css('transform', 'translateX(-' + (slideWidth3_4 * tdSlideCurrent4) +'px)');
        } else {
          tdSlideCurrent4 = tdSlideCount4 - tdSlides4;
          $(".news-slider-wrapper").css('transform', 'translateX(-' + (slideWidth3_4 * tdSlideCurrent4) +'px)');
        }
      });
      //Пролистывание
      var hammer341 = new Hammer(document.querySelector('.news-slider'));
      hammer341.get("swipe");
      hammer341.on("swipeleft", function(){
          $(".news-top__button-right").click();
      });
      //Нажатие правой стрелки 4 слайдера 3 версии




      //Нажатие левой стрелки 1 слайдера 3 версии
      $(".main-third-top__button-left-1").click(function() {
        tdSlideCurrent1--;
        if (tdSlideCurrent1 > 0) {
          $(".tdslider-wrapper-1").css('transform', 'translateX(-' + (slideWidth3_1 * tdSlideCurrent1) +'px)');
        } else {
          tdSlideCurrent1 = 0;
          $(".tdslider-wrapper-1").css('transform', 'translateX(-' + (slideWidth3_1 * tdSlideCurrent1) +'px)');
        }
      });
      //Пролистывание
      var hammer312 = new Hammer(document.querySelector('.tdslider-1'));
      hammer312.get("swipe");
      hammer312.on("swiperight", function(){
          $(".main-third-top__button-left-1").click();
      });
      //Нажатие левой стрелки 1 слайдера 3 версии 

      //Нажатие левой стрелки 2 слайдера 3 версии
      $(".main-third-top__button-left-2").click(function() {
        tdSlideCurrent2--;
        if (tdSlideCurrent2 > 0) {
          $(".tdslider-wrapper-2").css('transform', 'translateX(-' + (slideWidth3_2 * tdSlideCurrent2) +'px)');
        } else {
          tdSlideCurrent2 = 0;
          $(".tdslider-wrapper-2").css('transform', 'translateX(-' + (slideWidth3_2 * tdSlideCurrent2) +'px)');
        }
      });
            //Пролистывание
      var hammer322 = new Hammer(document.querySelector('.tdslider-2'));
      hammer322.get("swipe");
      hammer322.on("swiperight", function(){
          $(".main-third-top__button-left-2").click();
      });
      //Нажатие левой стрелки 2 слайдера 3 версии

      //Нажатие левой стрелки 3 слайдера 3 версии
      $(".main-third-top__button-left-3").click(function() {
        tdSlideCurrent3--;
        if (tdSlideCurrent3 > 0) {
          $(".tdslider-wrapper-3").css('transform', 'translateX(-' + (slideWidth3_3 * tdSlideCurrent3) +'px)');
        } else {
          tdSlideCurrent3 = 0;
          $(".tdslider-wrapper-3").css('transform', 'translateX(-' + (slideWidth3_3 * tdSlideCurrent3) +'px)');
        }
      });
      //Пролистывание
      var hammer332 = new Hammer(document.querySelector('.tdslider-3'));
      hammer332.get("swipe");
      hammer332.on("swiperight", function(){
          $(".main-third-top__button-left-3").click();
      });
      //Нажатие левой стрелки 3 слайдера 3 версии

      //Нажатие левой стрелки 4 слайдера 3 версии
      $(".news-top__button-left").click(function() {
        tdSlideCurrent4--;
        if (tdSlideCurrent4 > 0) {
          $(".news-slider-wrapper").css('transform', 'translateX(-' + (slideWidth3_4 * tdSlideCurrent4) +'px)');
        } else {
          tdSlideCurrent4 = 0;
          $(".news-slider-wrapper").css('transform', 'translateX(-' + (slideWidth3_4 * tdSlideCurrent4) +'px)');
        }
      });
      //Пролистывание
      var hammer342 = new Hammer(document.querySelector('.news-slider'));
      hammer342.get("swipe");
      hammer342.on("swiperight", function(){
          $(".news-top__button-left").click();
      });
      //Нажатие левой стрелки 4 слайдера 3 версии
*/


  $(".sdslider-wrapper").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: "<div class='sdslider-arrow sdslider-arrow-left'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.04 172'><title>icon-back</title><g  data-name='Слой 2'><g  data-name='Слой 1'><path d='M11.93,86l77.6,77.6a5.15,5.15,0,0,1,1.34,3.53,4.56,4.56,0,0,1-1.34,3.36,3.64,3.64,0,0,1-1.6,1.18A5.64,5.64,0,0,1,86,172a5.18,5.18,0,0,1-1.76-.34,3.61,3.61,0,0,1-1.6-1.18l-81.13-81A4.83,4.83,0,0,1,0,86a4.31,4.31,0,0,1,1.51-3.36L82.64,1.51a4.68,4.68,0,0,1,6.89,0A4.31,4.31,0,0,1,91,4.87,4.83,4.83,0,0,1,89.53,8.4Z'/></g></g></svg></div>",
  nextArrow: "<div class='sdslider-arrow sdslider-arrow-right'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.04 172'><title>icon-next</title><g  data-name='Слой 2'><g  data-name='Слой 1'><path d='M1.51,8.4A4.83,4.83,0,0,1,0,4.87,4.31,4.31,0,0,1,1.51,1.51,4.75,4.75,0,0,1,5,0,4.74,4.74,0,0,1,8.4,1.51L89.53,82.64A4.31,4.31,0,0,1,91,86a4.83,4.83,0,0,1-1.51,3.53l-81.13,81a3.61,3.61,0,0,1-1.6,1.18A5.16,5.16,0,0,1,5,172a5.63,5.63,0,0,1-1.93-.34,3.64,3.64,0,0,1-1.6-1.18,4.57,4.57,0,0,1-1.34-3.36,5.15,5.15,0,0,1,1.34-3.53L79.11,86Z'/></g></g></svg></div>",
});

    $(".tdslider-wrapper").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-button slick-button-left"></div>',
  nextArrow: '<div class="slick-button slick-button-right"></div>'
});

$(".main-third-top__button-right").click(function() {
  $(this).parents('.main-third-top').parent().find('.slick-button-right').click();
});
$(".main-third-top__button-left").click(function() {
  $(this).parents('.main-third-top').parent().find('.slick-button-left').click();
});

        //Second-slider
//Количество слайдов регулируется в Media Slider выше
      var slideWidth2 = ((1 / sdSlides) * $(".sdslider").width());
      var sdSlideCount = $(".sdslider-wrapper .sdslide:last").data('item');
      var sdSlideCurrent = 0;
      var lineWidth;

      //Правая стрелка
      $(".sdslider-arrow-right").click(function() {
          sdSlideCurrent = sdSlideCurrent + sdSlides;
        lineWidth = sdSlideCurrent / (sdSlideCount - sdSlides) * $(".main-second-line-wrapper").width();
        $(".main-second-line").width(lineWidth);
      });

      //Левая стрелка
      $(".sdslider-arrow-left").click(function() {
          sdSlideCurrent = sdSlideCurrent - sdSlides;
          lineWidth = sdSlideCurrent / (sdSlideCount - sdSlides) * $(".main-second-line-wrapper").width();
          $(".main-second-line").width(lineWidth);
      });


      //Наведение на карточку
      $(".tdslide").on('mouseenter', function() {
        $(this).find('.more-button').addClass('dflex');
        $(this).find('.instock-button').hide();
        $(this).find('.instock-button').removeClass('dflex');
        if(window.matchMedia('(max-width: 992px)').matches){} else {
          var descHeight = $(this).find('.tdslide-desc-addition ul').height();
          $(this).find('.tdslide-desc-addition').css('height', descHeight + 20);
          $(this).find('.tdslide-buybuttons').addClass('dflex');
        }
        $(this).find('.tdslide-icons').addClass('dflex');
      });

      $(".tdslide").on('mouseleave', function() {
        $(this).find('.instock-button').addClass('dflex');
        $(this).find('.more-button').removeClass('dflex');
        if(window.matchMedia('(max-width: 992px)').matches){} else {
          $(this).find('.tdslide-desc-addition').css('height', '0');
          $(this).find('.tdslide-buybuttons').removeClass('dflex');
        }
        $(this).find('.tdslide-icons').removeClass('dflex');
      });

      $(".tdslide-mobbutons-icons, .tdslide-mobbuton").click(function() {
        $(this).find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
        $(this).find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
        $(this).next().find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
        $(this).next().find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
        $(this).prev().find('.tdslide-mobbutons-icons__open').toggleClass('dnone');
        $(this).prev().find('.tdslide-mobbutons-icons__close').toggleClass('dblock');
        var descHeight = $(this).parents('.tdslide').find('.tdslide-desc-addition ul').height();
        if ($(this).find('.tdslide-mobbutons-icons__open').hasClass('dnone')) {
          $(this).parents('.tdslide').find('.tdslide-desc-addition').css('height', descHeight + 20);
        } else {
          $(this).parents('.tdslide').find('.tdslide-desc-addition').css('height', '0');
        }
        $(this).parents('.tdslide').find('.tdslide-buybuttons').toggleClass('dflex');
      });


      $(".tdslide-icon-1").hover(function() {
        $(this).next().addClass('dflex');
      }, function() {
        $(this).next().removeClass('dflex');
      });

      var attrOpen = $('.filter-attributive__title'),
    attributive = $('.attributive');

  $('.filter').on('click', '.filter-attributive__title', function() {
    var i = attrOpen.index($(this));
    attributive.eq(i).toggleClass('attributive-active');
    $('.svg-filter').eq(i).toggleClass('svg-filter-active');
  });
    

$('.sliderUi').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    max: 44300,
    min: 2800,
    range: true,
    classed: {
      "ui-slider": "sliderUi1"
    },
    values: [2800, 44300],
    slide : function(event, ui) {    
      $('.result1').attr("placeholder",  ui.values[0]);        
      $('.result2').attr("placeholder",  ui.values[1]);        
  }
});
$('.sliderUi2').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    min: 380,
    max: 1800,
    range: true,
    classed: {
        "ui-slider": "sliderUi2"
      },
    values: [380, 1800],
    slide : function(event, ui) {    
      $('.result1_2').attr("placeholder",  ui.values[0]);        
      $('.result2_2').attr("placeholder",  ui.values[1]);        
  }
});
$('.sliderUi3').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    min: 263,
    max: 680,
    range: true,
    classed: {
        "ui-slider": "sliderUi3"
      },
    values: [263, 680],
    slide : function(event, ui) {    
      $('.result1_3').attr("placeholder",  ui.values[0]);        
      $('.result2_3').attr("placeholder",  ui.values[1]);        
  }
});
$('.sliderUi4').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    min: 186,
    max: 491,
    range: true,
    classed: {
        "ui-slider": "sliderUi4"
      },
    values: [186, 491],
    slide : function(event, ui) {    
      $('.result1_4').attr("placeholder",  ui.values[0]);        
      $('.result2_4').attr("placeholder",  ui.values[1]);        
  }
});



});