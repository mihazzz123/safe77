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


});