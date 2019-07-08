'use strict';
/*global $ */
let mobileFlag = false;
let tabletFlag = false;
let browserFlag = false;

// RGBA value generator
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

$(window).resize(function(){
  if($(window).width() <= 767 && mobileFlag === false) {
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      mobileFlag = true;
      tabletFlag = false;
      browserFlag = false;
    });
  }
  if($(window).width() >= 768 && $(window).width() <= 1024 && tabletFlag === false) {
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      mobileFlag = false;
      tabletFlag = true;
      browserFlag = false;
    });
  }
  if($(window).width() >= 1025 && browserFlag === false) {
    $('div').each(function(){
      $(this).css('background-color', random_rgba());
      mobileFlag = false;
      tabletFlag = false;
      browserFlag = true;
    });
  }
});


