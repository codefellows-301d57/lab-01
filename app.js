'use strict';
/*global $ */
let mobileFlag = false;
let browserFlag = false;

// RGBA value generator
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

$(window).resize(function() {
  if($(window).width() <= 767 && mobileFlag === false){
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      mobileFlag = true;
      browserFlag = false;
    });
  }
  if($(window).width() > 767 && browserFlag === false){
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      browserFlag = true;
      mobileFlag = false;
    });
  }
});


