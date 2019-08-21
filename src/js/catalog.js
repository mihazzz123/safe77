$(document).ready(function() {

  if(window.matchMedia('(max-width: 992px)').matches){
    $('.filter').removeClass('filter_active');
  }

  var btnShowAll = $('.showAll'),
      btnShowMore = $('.showMore'),
      btnHideAll = $('.hideAll'),
      btnHideAllSec = $('.hideAllSec'),
      secFilter = $('.filterSecond-touchstone').find('.filterSecond-touchstone__item').length,
      secFilterHide = $('.filterSecond-touchstone').find('.hiden').length,
      secFilterAdd = $('.filterSecond-touchstone').find('.added').length;
      
      btnShowMore.on('click', function() {
        $('.hiden').slice(0, 10).addClass('added').removeClass('hiden').css({'display' : 'block'});
        secFilterHide = $('.filterSecond-touchstone').find('.hiden').length;
        secFilterAdd = $('.filterSecond-touchstone').find('.added').length;
        if(secFilter == secFilterAdd){
          btnShowMore.removeClass('dflex');
          btnShowAll.removeClass('dflex');
          btnHideAllSec.addClass('dflex');
        } else {
          btnShowAll.addClass('dflex');
          btnHideAll.addClass('dflex');
        }
      });
    btnShowAll.on('click', function() {
      $('.hiden').addClass('added').removeClass('hiden').css({'display' : 'block'});
      btnShowMore.removeClass('dflex');
      btnShowAll.removeClass('dflex');
      btnHideAllSec.addClass('dflex');
    });   
    btnHideAll.add(btnHideAllSec).on('click', function() {
      $('.added').addClass('hiden').removeClass('added').attr('style', '');
      btnShowMore.addClass('dflex');
      btnShowAll.removeClass('dflex');
      btnHideAll.removeClass('dflex');
      btnHideAllSec.removeClass('dflex');
    }); 
  
      
      
  $('.filter-title').on('click', function() {
    $('.filter').toggleClass('filter_active');
  });

  var attrOpen = $('.filter-attributive__title'),
  attributive = $('.attributive');

  $('.filter').on('click', '.filter-attributive__title', function() {
    // $('.attributive-result').removeClass('attributive-result_active');
    var i = attrOpen.index($(this));
    attributive.eq(i).toggleClass('attributive-active');
    if(attributive.hasClass('attributive-active')){
      $('.svg-filter').eq(i).addClass('svg-filter-active');
    } else {
      setTimeout(function() {
        $('.svg-filter').eq(i).removeClass('svg-filter-active');
      }, 200);
    }
    $('.attributive-result').eq(i).addClass('attributive-result'+[i]);
    attributive.eq(i).on('click', '.attributive-check', function() {
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result').eq(i).addClass('attributive-result_active');
    });
  });

  // attributive.on('click', '.attributive-check__flag', function() {
  //   $('.attributive-result').removeClass('attributive-result_active');
  //   $(this).parents('.attributive').find('.attributive-result').addClass('attributive-result_active');
  // });
    
  
  // Ползунки в фильтре
  var inputRes1 = $('.result1').val();
  var inputRes2 = $('.result2').val();
    
    $('.result2, .result1').keyup(function() {
      inputRes1 = $('.result1').val();
      inputRes2 = $('.result2').val();
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result0').addClass('attributive-result_active');
      $('.sliderUi').slider({
        animate: "slow",
        range: "min",    
        value: 50,
        step: 100, // шаг ползунка
        min: 2800, // значение первого input по умолчанию
        max: 44300, // значение второго input по умолчанию
        range: true,
        classed: {
          "ui-slider": "sliderUi1"
        },
        values: [inputRes1, inputRes2],
        slide : function(event, ui) {    
          $('.result1').val(ui.values[0]);        
          $('.result2').val(ui.values[1]);  
        },
        stop : function(event, ui) {
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result0').addClass('attributive-result_active');
          }
        });
      });
      $('.sliderUi').slider({
        animate: "slow",
        range: "min",    
        value: 50,
        step: 100, // шаг ползунка
        min: 2800, // значение первого input по умолчанию
        max: 44300, // значение второго input по умолчанию
        range: true,
        classed: {
          "ui-slider": "sliderUi1"
        },
        values: [inputRes1, inputRes2],
        slide : function(event, ui) {    
          $('.result1').val(ui.values[0]);        
          $('.result2').val(ui.values[1]);  
        },
        stop : function(event, ui) {
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result0').addClass('attributive-result_active');
          }
    });
    
    
    var inputRes1_2 = $('.result1_2').val();
    var inputRes2_2 = $('.result2_2').val();

    $('.result1_2, .result2_2').keyup(function() {
      inputRes1_2 = $('.result1_2').val();
      inputRes2_2 = $('.result2_2').val();
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result2').addClass('attributive-result_active');
      $('.sliderUi2').slider({
        animate: "slow",
        range: "min",    
        value: 50,
        step: 10, // шаг ползунка
        min: 380,
        max: 1800,
        range: true,
        classed: {
          "ui-slider": "sliderUi2"
        },
        values: [inputRes1_2, inputRes2_2],
        slide : function(event, ui) {    
          $('.result1_2').val(ui.values[0]);       
          $('.result2_2').val(ui.values[1]);        
        },
        stop : function(event, ui) {
          $('.attributive-result').removeClass('attributive-result_active');
          $('.attributive-result2').addClass('attributive-result_active');
        }
      });
    });
    $('.sliderUi2').slider({
      animate: "slow",
      range: "min",    
      value: 50,
      step: 10, // шаг ползунка
      min: 380,
      max: 1800,
    range: true,
    classed: {
      "ui-slider": "sliderUi2"
    },
    values: [inputRes1_2, inputRes2_2],
    slide : function(event, ui) {    
      $('.result1_2').val(ui.values[0]);        
      $('.result2_2').val(ui.values[1]);        
    },
    stop : function(event, ui) {
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result2').addClass('attributive-result_active');
    }
  });

  var inputRes1_3 = $('.result1_3').val();
  var inputRes2_3 = $('.result2_3').val();

  $('.result1_3, .result2_3').keyup(function() {
    inputRes1_3 = $('.result1_3').val();
    inputRes2_3 = $('.result2_3').val();
    $('.attributive-result').removeClass('attributive-result_active');
    $('.attributive-result3').addClass('attributive-result_active');
    $('.sliderUi3').slider({
      animate: "slow",
      range: "min",    
      value: 50,
      step: 10,
      min: 263,
      max: 680,
      range: true,
      classed: {
        "ui-slider": "sliderUi3"
      },
      values: [inputRes1_3, inputRes2_3],
      slide : function(event, ui) {  
        $('.result1_3').val(ui.values[0]);    
        $('.result2_3').val(ui.values[1]);    
      },
      stop : function(event, ui) {
        $('.attributive-result').removeClass('attributive-result_active');
        $('.attributive-result3').addClass('attributive-result_active');  
      }
    });
  });
  $('.sliderUi3').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    step: 10,
    min: 263,
    max: 680,
    range: true,
    classed: {
      "ui-slider": "sliderUi3"
    },
    values: [inputRes1_3, inputRes2_3],
    slide : function(event, ui) {  
      $('.result1_3').val(ui.values[0]);    
      $('.result2_3').val(ui.values[1]);    
    },
    stop : function(event, ui) {
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result3').addClass('attributive-result_active');  
    }
  });


  var inputRes1_4 = $('.result1_4').val();
  var inputRes2_4 = $('.result2_4').val();


  $('.result1_4, .result2_4').keyup(function() {
    inputRes1_4 = $('.result1_4').val();
    inputRes2_4 = $('.result2_4').val();
    $('.attributive-result').removeClass('attributive-result_active');
    $('.attributive-result4').addClass('attributive-result_active');
    $('.sliderUi4').slider({
      animate: "slow",
      range: "min",    
      value: 50,
      step: 10,
      min: 186,
      max: 491,
      range: true,
      classed: {
        "ui-slider": "sliderUi4"
      },
      values: [inputRes1_4, inputRes2_4],
      slide : function(event, ui) { 
        $('.result1_4').val(ui.values[0]);   
        $('.result2_4').val(ui.values[1]);   
      },
      stop : function(event, ui) {
        $('.attributive-result').removeClass('attributive-result_active');
        $('.attributive-result4').addClass('attributive-result_active');   
      }
    });
  });
  $('.sliderUi4').slider({
    animate: "slow",
    range: "min",    
    value: 50,
    step: 10,
    min: 186,
    max: 491,
    range: true,
    classed: {
      "ui-slider": "sliderUi4"
    },
    values: [inputRes1_4, inputRes2_4],
    slide : function(event, ui) { 
      $('.result1_4').val(ui.values[0]);   
      $('.result2_4').val(ui.values[1]);   
    },
    stop : function(event, ui) {
      $('.attributive-result').removeClass('attributive-result_active');
      $('.attributive-result4').addClass('attributive-result_active');   
    }
  });

  // Сортировка товаров
 $('.sort-filter__form').on('click', '.sort-filter__selected', function() {
   var i = $('.sort-filter__selected').index($(this));
   $('.sort-filter__selected').removeClass('opening');
   $(this).addClass('opening');
    $('.sort-filter__items').eq(!i).removeClass('sort-filter__items_active');
    $('.sort-filter__items').eq(i).toggleClass('sort-filter__items_active');
    if($('.sort-filter__items_active').hasClass('sort-filter__items_active')){
      $('.sort-filter__arrow').eq(i).addClass('sort-filter__arrow_active');
      $('.sort-filter__arrow').eq(!i).removeClass('sort-filter__arrow_active');
    } else {
      $('.sort-filter__arrow').removeClass('sort-filter__arrow_active');
    }
  });
  
  $('.sort-filter__option').on('click', function() {
    var textSelected = $(this).text();
    $(this).parent('.sort-filter__items').removeClass('sort-filter__items_active');
    $('.opening').text(textSelected);
    $('.opening').removeClass('opening');
    $(this).parent('.sort-filter__items').find('.sort-filter__option').removeClass('sort-selected');
    $(this).addClass('sort-selected');
    $('.sort-filter__arrow').removeClass('sort-filter__arrow_active');
  });
  
  $(function($){
    $(document).mouseup(function (e){ 
      var div = $('.sort-filter__items, .sort-filter__form, .sort-filter__option'); 
      if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
        $('.sort-filter__items').removeClass('sort-filter__items_active');
        $('.sort-filter__arrow').removeClass('sort-filter__arrow_active');
      }
    });
  });


});