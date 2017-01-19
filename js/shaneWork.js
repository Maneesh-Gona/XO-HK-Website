//Toggle dropdown
$( "#nav_option_small" ).click(function() {
$( "#dropdown" ).toggle();
});
//When to change css
var mainbottom = 1;
// on scroll, 
$(window).on('scroll',function(){
  //Calculate scroll position
  stop = Math.round($(window).scrollTop());
  //If scrolling, add changed css
  if (stop > mainbottom) {
      //Main header stuff
      $('#header').addClass('past-main');
      $('.nav_img').addClass('small');
      $('#spacer').addClass('shrink');
      //Navigation option stuff
      $('#nav_option').addClass('spacing');
      $('#nav_option1').addClass('spacing');
      $('#nav_option2').addClass('spacing');
      $('#nav_option3').addClass('spacing');
      $('#nav_option4').addClass('spacing');
      $('#nav_option5').addClass('spacing');
      $('#nav_option6').addClass('spacing');
      $('#nav_option_small').addClass('spacing');
      //Navigation divider stuff
      $('#nav_divide').addClass('space');
      $('#nav_divide1').addClass('space');
      $('#nav_divide2').addClass('space');
      $('#nav_divide3').addClass('space');
      $('#nav_divide4').addClass('space');
    } 
  //If not scrolling, remove css
  else {
      //Navigation header stuff
      $('#header').removeClass('past-main');
      $('.nav_img').removeClass('small');
      $('#spacer').removeClass('shrink');
      //Navigation option stuff
      $('#nav_option').removeClass('spacing');
      $('#nav_option1').removeClass('spacing');
      $('#nav_option2').removeClass('spacing');
      $('#nav_option3').removeClass('spacing');
      $('#nav_option4').removeClass('spacing');
      $('#nav_option5').removeClass('spacing');
      $('#nav_option6').removeClass('spacing');
      $('#nav_option_small').removeClass('spacing');
      //Navigation divider stuff
      $('#nav_divide').removeClass('space');
      $('#nav_divide1').removeClass('space');
      $('#nav_divide2').removeClass('space');
      $('#nav_divide3').removeClass('space');
      $('#nav_divide4').removeClass('space');
    }
  });