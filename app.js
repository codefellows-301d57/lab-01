'use strict';

// RGBA value generator
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

$(function() {
  if($(window).width() <= 767){
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      console.log('this happens first');
    });
  }
  if($(window).width() > 767){
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      console.log('this happens too');
    });
  }
});


