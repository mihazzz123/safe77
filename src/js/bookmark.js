$(document).ready(function() {

  var num = $('.bookmark-item').length;
  $('.bookmark-item__add').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.bookmark-item').remove();
    num = $('.bookmark-item').length;
    if(num == 0){
      $('.bookmark-item').remove();
      $('.bookmark-clean').remove();
      $('.bookmark-no').css({'display' : 'block'});
    }
  });
  $('.bookmark-clean').on('click', function() {
    $('.bookmark-item').remove();
    $('.bookmark-clean').remove();
    $('.bookmark-no').css({'display' : 'block'});
  });


});