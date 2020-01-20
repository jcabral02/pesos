// Carouseles (movil y escritorio)
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    lazyLoad:true,
    nav: true,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    margin:0
  });

// Scrolltop para el menu
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

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('footer').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('footer').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }


  // Desplegar y ocultar el menu movil
  var menu = document.getElementById('menu');
  var btnMenu = document.getElementById('btn_menu');
  var btnClose = document.getElementById('btn_close');

  btnMenu.addEventListener('click', function(){
    menu.style.width = "100vw";
  });

  btnClose.addEventListener('click', function(){
    menu.style.width = "0";
  });

  /*Modal inicio de sesion*/
  let btn_sign = document.getElementsByClassName('sign-in');
  let modal_sign = document.getElementById('modal-in');
  let pop_sign = document.getElementById('pop-in');
  let pop_sign_2 = document.getElementById('pop-in-2');
  let close_in = document.getElementById('close');

  function close(){
    pop_sign.style.display = 'none';
    btn_sign[0].style.background = 'transparent';
  };

  // modal header
  btn_sign[0].addEventListener('click', function(){
    pop_sign.style.display = 'flex';
    btn_sign[0].style.background = 'green';
  });

  modal_sign.addEventListener('mouseover', function(){
    pop_sign.removeEventListener('click', close);
  });

  modal_sign.addEventListener('mouseout', function(){
    pop_sign.addEventListener('click', close);
  });

  pop_sign.addEventListener('click', close);

  // modal footer
  btn_sign[2].addEventListener('click', function(){
    pop_sign_2.style.display = 'flex';
  });

  close_in.addEventListener('click', function(){
    pop_sign_2.style.display = 'none';
  });

  /**modal registro */
  let btn_up = document.getElementsByClassName('register');
  let pop_up = document.getElementById('pop-up');
  let close_up = document.getElementById('close-up');
  let submit = document.getElementById('submit');
  let messageSend = document.getElementById('message');
  let formUp = document.getElementById('form');
  let closeMess = document.getElementById('closeMess');

  for(let i=0; btn_up.length>i; i++){
    btn_up[i].addEventListener('click', function(){
      pop_up.style.display = 'flex';
    })
  }

  function closeUp(){
    pop_up.style.display = 'none';
    formUp.style.display = 'block';
    messageSend.style.display = 'none';
  }

  close_up.addEventListener('click', closeUp);
  closeMess.addEventListener('click', closeUp);

  submit.addEventListener('click', function(event){
    event.preventDefault();
    formUp.style.display = 'none';
    messageSend.style.display = 'flex';
    // setTimeout(function(){
    //   closeUp();
    // },1500)
  })

});