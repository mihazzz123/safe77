$(document).ready(function() {

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
          $('.attributive-result').eq(i).addClass('attributive-result_active');
        });
      });
        
      
      // Ползунки в фильтре
      
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
        values: [2800, 44300],
        slide : function(event, ui) {    
          $('.attributive-result0').addClass('attributive-result_active');
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
            $('.attributive-result4').addClass('attributive-result_active');   
            $('.result1_4').attr("placeholder",  ui.values[0]);        
            $('.result2_4').attr("placeholder",  ui.values[1]);        
        }
      });

});