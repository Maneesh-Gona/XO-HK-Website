$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $(".navbar").addClass("navbar-scroll");
        $(".navbar").removeClass("navbar-top");
        $(".navbar-brand").removeClass("top-color");
        $(".navbar-brand").addClass("scroll-color");
        $(".icon-bar").removeClass("top-color-icon");
        $(".icon-bar").addClass("scroll-color-icon");
        $(".nav.navbar-nav.navbar-right li a").removeClass("top-color");
        $(".nav.navbar-nav.navbar-right li a").addClass("scroll-color");

        $("li").removeClass("link-top");
        $("li").addClass("link-scroll");
        
    } else {
        $(".navbar").addClass("navbar-top");
        $(".navbar").removeClass("navbar-scroll");
        $(".navbar-brand").removeClass("scroll-color");
        $(".navbar-brand").addClass("top-color");
        $(".icon-bar").removeClass("scroll-color-icon");
        $(".icon-bar").addClass("top-color-icon");
        $(".nav.navbar-nav.navbar-right li a").removeClass("scroll-color");
        $(".nav.navbar-nav.navbar-right li a").addClass("top-color");
        
        $("li").addClass("link-top");
        $("li").removeClass("link-scroll");

    }
});

setTimeout(function(){
document.getElementById('rev-1').style.display = "block";
},501);

setTimeout(function(){
document.getElementById('rev-2').style.display = "block";
},501);