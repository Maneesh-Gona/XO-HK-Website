$(window).scroll(function() {
  
  //Get scroll position    
  var scroll = $(window).scrollTop();

  //If scrolling
  if (scroll >= 1) 
  {
    $(".nav-mobile-item").removeClass("nav-color-top");
    $(".nav-mobile-item").addClass("nav-color-scrolling");
    $(".nav-mobile").removeClass("nav-color-top");
    $(".nav-mobile").addClass("nav-color-scrolling");
    $(".nav-activate").removeClass("nav-color-top");
    $(".nav-activate").addClass("nav-color-scrolling");
    $(".nav-item").removeClass("nav-color-top");
    $(".nav-item").addClass("nav-color-scrolling");
    $(".nav-logo-words").removeClass("nav-color-top");
    $(".nav-logo-words").addClass("nav-color-scrolling");
    $(".nav-full").removeClass("nav-full-top");
    $(".nav-full").addClass("nav-full-scrolling");
    $(".nav-item").removeClass("nav-item-hover-top");
    $(".nav-item").addClass("nav-item-hover-scroll");
  }
  
  //If at top
  else 
  {
    $(".nav-mobile-item").addClass("nav-color-top");
    $(".nav-mobile-item").removeClass("nav-color-scrolling");
    $(".nav-mobile").addClass("nav-color-top");
    $(".nav-mobile").removeClass("nav-color-scrolling");
    $(".nav-activate").addClass("nav-color-top");
    $(".nav-activate").removeClass("nav-color-scrolling");
    $(".nav-item").addClass("nav-color-top");
    $(".nav-item").removeClass("nav-color-scrolling");
    $(".nav-logo-words").addClass("nav-color-top");
    $(".nav-logo-words").removeClass("nav-color-scrolling");
    $(".nav-full").addClass("nav-full-top");
    $(".nav-full").removeClass("nav-full-scrolling");
    $(".nav-item").addClass("nav-item-hover-top");
    $(".nav-item").removeClass("nav-item-hover-scroll");  
  }
  
});

$(document).ready(function(){
    $("#activate").click(function(){
        $(".nav-mobile").toggle();
    });
});












//end