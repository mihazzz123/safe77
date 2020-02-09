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
    bookmarks();
  });
  $('.bookmark-clean').on('click', function() {
    $('.bookmark-item').remove();
    $('.bookmark-clean').remove();
    $('.bookmark-no').css({'display' : 'block'});
    bookmarks();
  });
  bookmarks();

  
  function bookmarks() {
    bookmark = $('.bookmarks.added').length;
    comparison = $('.comparison.added').length;
    if(bookmark != 0){
      $('.header-svg.not-active path').css({'fill' : '#a50103', 'stroke' : '#a50103'});
      $('.bookmark_count').show();
      $('.bookmark_count').text(bookmark);
    } else if(bookmark == 0 || comparison == 0 ) {
      $('.bookmark_count').hide();
      $('.header-svg.not-active path').attr('style', '');
    } else if(bookmark == 0) {
      $('.bookmark_count').hide();
      $('.header-svg.not-active path').attr('style', '');
    }
  }

});