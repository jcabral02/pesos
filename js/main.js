$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      lazyLoad:true,
      nav: true,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      margin:0,
      nav: true
    });
    $(".owl-carousel-2").owlCarousel({
      items:1,
      lazyLoad:true,
      nav: true,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      margin:0,
      // nav: true
    });
  });
  

  $(function() {
    var header = $(".header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });
});