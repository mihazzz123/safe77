$(document).ready(function() {


  var btnAddInfo = $('.item-text__btn'),
      resultAddInfo = $('.item_resBox'),
      btnAddInfo_icon = $('.item-text__btnIcon');

   
  $('.item-text__btns').on('click', '.item-text__btn', function() {
    var activ = $(this).find( btnAddInfo_icon ).attr('data-src-second');
    $(this).find( btnAddInfo_icon) .attr('src', activ);
    var i = btnAddInfo.index($(this));
    resultAddInfo.removeClass('dflex');
    resultAddInfo.eq(i).addClass('dflex');
    btnAddInfo.removeClass('item-text__btn_active');
    btnAddInfo.eq(i).addClass('item-text__btn_active');
  });


});