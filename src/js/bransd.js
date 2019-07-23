$(document).ready(function() {

  // Плавный скрол при клике на ссылку
  $('.brands-nav').on('click', '.brands-nav__item', function (event) {
    event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
    var i  = $(this).attr('href'),  //забираем идентификатор бока с атрибута href
    top = $(i).offset().top;  //узнаем высоту от начала страницы до блока на который ссылается якорь
    $('body,html').animate({scrollTop: top}, 1000); //анимируем переход на расстояние - top за 1500 мс
  });

});