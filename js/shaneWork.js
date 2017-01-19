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
      $('#header').addClass('past-main');
      $('.nav_img').addClass('small');
      $('#spacer').addClass('shrink');
      
      $('#nav_option').addClass('spacing');
      $('#nav_option1').addClass('spacing');
      $('#nav_option2').addClass('spacing');
      $('#nav_option3').addClass('spacing');
      $('#nav_option4').addClass('spacing');
      $('#nav_option5').addClass('spacing');
      $('#nav_option6').addClass('spacing');
      $('#nav_option_small').addClass('spacing');
      
      $('#nav_divide').addClass('space');
      $('#nav_divide1').addClass('space');
      $('#nav_divide2').addClass('space');
      $('#nav_divide3').addClass('space');
      $('#nav_divide4').addClass('space');
    } 
  //If not scrolling, remove css
  else {
      $('#header').removeClass('past-main');
      $('.nav_img').removeClass('small');
      $('#spacer').removeClass('shrink');
      
      $('#nav_option').removeClass('spacing');
      $('#nav_option1').removeClass('spacing');
      $('#nav_option2').removeClass('spacing');
      $('#nav_option3').removeClass('spacing');
      $('#nav_option4').removeClass('spacing');
      $('#nav_option5').removeClass('spacing');
      $('#nav_option6').removeClass('spacing');
      $('#nav_option_small').removeClass('spacing');
      
      $('#nav_divide').removeClass('space');
      $('#nav_divide1').removeClass('space');
      $('#nav_divide2').removeClass('space');
      $('#nav_divide3').removeClass('space');
      $('#nav_divide4').removeClass('space');
    }
  });

/* Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/