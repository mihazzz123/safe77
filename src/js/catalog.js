$(document).ready(function() {

  if(window.matchMedia('(max-width: 992px)').matches){
    $('.filter').removeClass('filter_active');
  };

  var btnShowAll = $('.showAll'),
      btnShowMore = $('.showMore'),
      btnHideAll = $('.hideAll'),
      secFilter = $('.filterSecond');

      btnShowMore.on('click', function() {
        secFilter.addClass('filterSecond-activeShowMore');
        btnShowMore.hide();
        btnShowAll.show();
        btnHideAll.show();
      });
      btnShowAll.on('click', function() {
        secFilter.removeClass('filterSecond-activeShowMore');
        secFilter.addClass('filterSecond-activeShowAll');
        btnHideAll.show();
        btnShowAll.hide();
      });
      btnHideAll.on('click', function() {
        secFilter.removeClass('filterSecond-activeShowAll');
        secFilter.removeClass('filterSecond-activeShowMore');
        btnHideAll.hide();
        btnShowAll.hide();
        btnShowMore.show();
      });



  $('.filter-title').on('click', function() {
    $('.filter').toggleClass('filter_active');
  });

   var attrOpen = $('.filter-attributive__title'),
      attributive = $('.attributive');

      $('.filter').on('click', '.filter-attributive__title', function() {
        var i = attrOpen.index($(this));
        attributive.eq(i).toggleClass('attributive-active');
        $('.svg-filter').eq(i).toggleClass('svg-filter-active');
        $('.attributive-result').eq(i).addClass('attributive-result'+[i]);
        attributive.eq(i).on('click', '.attributive-check', function() {
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result').eq(i).addClass('attributive-result_active');
        });
      });
        
      
      // Ползунки в фильтре
      $('.result1').keyup(function() {
        var inputRes1 = $('.result1').val();
        $('.result1').attr('value', inputRes1);
        return inputRes1;
      });
      console.log(inputRes1);
      var inputRes2 = $('.result2').attr("value");
      $('.sliderUi').slider({
        animate: "slow",
        range: "min",    
        value: 50,
        min: 2800, // значение первого input по умолчанию
        max: 44300, // значение второго input по умолчанию
        range: true,
        classed: {
          "ui-slider": "sliderUi1"
        },
        values: [3222, inputRes2],
        slide : function(event, ui) {    
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result0').addClass('attributive-result_active');
          $('.result1').val(ui.values[0]);        
          $('.result2').attr("value",  ui.values[1]);  
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
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result2').addClass('attributive-result_active');
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
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result3').addClass('attributive-result_active');  
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
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result4').addClass('attributive-result_active');   
          $('.result1_4').attr("placeholder",  ui.values[0]);        
          $('.result2_4').attr("placeholder",  ui.values[1]);        
        }
      });


      // Подмена картинки в карточке
      $('.good')

});