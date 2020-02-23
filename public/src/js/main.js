$(function(){
  // Define Some Elements
  let allWindow = $(window),
  body = $('body'),
  top = allWindow.scrollTop(),
  owl = $('.owl-carousel');
  
  //initialize owl-carrousel in photos sections
  allWindow.on('load',function() { 
    owl.owlCarousel();
  });
  
  owl.owlCarousel({
    lazyLoad: true, 
    rtl:true,
    touchDrag: false,
    pullDrag: false,
    responsive: true,
    responsiveClass:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 30,
    smartSpeed: 1000,
    fluidspeed: 800,
  
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  
  /*-----------------------------------------------------
  Javascript Function To check Aniamtion support
  -------------------------------------------------------*/
  
  let animation = false,
  animationstring = 'animation',
  keyframeprefix = '',
  domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
  pfx  = '',
  elm = document.createElement('div');
  
  if( elm.style.animationName !== undefined ) { animation = true; }
  
  if( animation === false ) {
    for( let i = 0; i < domPrefixes.length; i++ ) {
      if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }
  
  
  /*-----------------------------------------------------
  Javascript Function For Smooth Mouse Scrolling
  -------------------------------------------------------*/
  $.scrollSpeed = function(step, speed) {
        
    var $document = $(document),
        $body = $('html, body'),
        option = 'default',
        root = top,
        scroll = false,
        scrollY,
        view;
        
    if (window.navigator.msPointerEnabled) {
        return false;
    }
        
        
  $.event.special.mousewheel = {
    setup: function( _, ns, handle ){
      if ( ns.includes("PreventDefault") ) {
        this.addEventListener("mousewheel", handle, { passive: false });
      } else {
        return false;
      }
    }
  }

    allWindow.on('mousewheel.PreventDefault DOMMouseScroll', function(e) {
        
        var deltaY = e.originalEvent.wheelDeltaY,
            detail = e.originalEvent.detail;
            scrollY = $document.height() > allWindow.height();
            scroll = true;
        
        if (scrollY) {
            
            view = allWindow.height();
                
            if (deltaY < 0 || detail > 0) {
                root = (root + view) >= $document.height() ? root : root += step;
            }
            
            if (deltaY > 0 || detail < 0) {
                root = root <= 0 ? 0 : root -= step;
            }
            
            $body.stop().animate({
                scrollTop: root
            }, speed, option, function() {
                scroll = false;
            });
        }
        
        return false;
        
    }).on('scroll', function() {
        
        if (scrollY && !scroll) root = top;
        if (!scroll) root = allWindow.scrollTop();
        
    }).on('resize', function() {
        
        if (scrollY && !scroll) view = allWindow.height();
        
    });       
};

$.easing.default = function (x,t,b,c,d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

// initialize Smooth Scrolling Only in Modern browsers
if(animation) {
  $.scrollSpeed(100, 700);
}
  
  /*---------------------------------------------------------------------
  Show Go to Top button
  ----------------------------------------------------------------------*/
  function ShowUp() {
    top = allWindow.scrollTop();
    if ( top >= 1000) {
      $('.scroll-up').addClass("show-up-btn");
    } else {
      $('.scroll-up').removeClass("show-up-btn");
    }
  }
  
  // scrolling speed
  $('a.scroll').on('click', function(event) {
    // On-page links
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    let target = $(this.hash),
    speed = $(this).data("speed") || 800;
    target = target.length ? target : $('[name=' + this.hash.slice(1)+']');
    
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, speed);
    }
  }
  });

  $(".scroll-up").on('click', function (e) {
    e.preventDefault();
    $(".scroll-up ")
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  /*---------------------------------------------------
  Parallax
  ---------------------------------------------------*/
  let backgrounds = $('.parallax');

  function parallax() {
    // for each of background parallax element
    $.each(backgrounds, function( i, val ) {
      
      let backgroundObj = $(this),
      backgroundObjTop = backgroundObj.offset().top,
      backgroundHeight = backgroundObj.height();

      top = allWindow.scrollTop();
      
      let yPos = ((top - backgroundObjTop))/2;
      if ( yPos <= backgroundHeight + backgroundObjTop ) {
        backgroundObj.css({
          backgroundPosition: '50% ' + yPos + 'px'
        });
      }
    });
  };

  // add Event listener to window
  allWindow.on('scroll', function() {
    parallax();
  });

  // scroll to Top
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
      $('.scroll-up').fadeIn(1000);
    } else {
      $('.scroll-up').fadeOut(500);
    }
  });
  $('.scroll-up').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 800);
  });

  function video() {
    setTimeOut(function(){ this.pause(); alert("é pra parar agora diaxo")}, 1000);
  }
    $(".content").hover(function () {
      $(this).children("video")[0].play();
    }, function () {
      let el = $(this).children("video")[0];
        el.pause();
    });



/*------------------------------------------------------------------------
Javascript Function for Format, Validate and Submit the Contact Form
-------------------------------------------------------------------------*/
  let form = $('#contact-form');
    // submit button animation
    $(".tick").html("Enviar");
    const success = "<svg width='58' height='45' viewBox='0 0 58 45' xmlns='http://www.w3.org/2000/svg'><path fill='#fff' fill-rule='nonzero' d='M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65'/></svg>";
  
    $(".button").click(function() {
      if ($(".tick").html() === "Enviar" && validateForm()) {
        $(".tick").html(success);
        $(".button").toggleClass('button-circle');
        $(".button").css("pointer-events","none");
        setTimeout(() => {
          enviar();
          $(".button").toggleClass('button-circle');
          $(".button").css("pointer-events","auto");
          $(".tick").html("Enviar");
        }, 5000);
      }
    });

    // validate phone
    $("#form-contact-phone").mask("(99) 9999-9999?9").focusout(function (event) {  
      var target, phone, element;  
      target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
      phone = target.value.replace(/\D/g, '');
      element = $(target);  
      element.unmask();  
      if(phone.length > 10) {  
        element.mask("(99) 99999-999?9");  
      } else {  
        element.mask("(99) 9999-9999?9");  
      }  
    });

    // validate email and all inputs
    function validateForm() {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      inputs = $(".input-field"),
      sucesso = 0;
      
      function validateEmail() {  
        let email = inputs.val(),
        res = reg.test(email);
        if (res){
          $(".email-error").html("");
          return true;
        } else {
          $(".form-control.email").addClass("form-error");
          $("#form-contact-email").tooltip('show');
          setTimeout(() => {
            $(".form-control.email.form-error").removeClass("form-error");
          }, 400);
          setInterval(() => {
            $("#form-contact-email").tooltip('hide');
          }, 2000);
          return false;
        }
      } 
    // validate name, email, phone and message
    function validateInputs(){
      $.each(inputs, function(i,val){
        let targetId = $(this).attr("id"),
        targetClass = $(this).attr("class"),
        targetValue = $(this).val();
        if (targetValue == ""){
          $(this).addClass("form-error");
          $(this).tooltip('show');
          
          setTimeout(() => {
            $(this).removeClass("form-error");
          }, 400);
          setInterval(() => {
            $(this).tooltip('hide');
          }, 2000);
        } else {
          sucesso++;
        }
      });
      if (sucesso == 4){
        return true;
      }
    }
    if (validateEmail() && validateInputs()){
      return true;
    }
  }

  function enviar(){    
    let subject = "Mensagem de " + $("#form-contact-email").val(),
    text = ("Sou " + $("#form-contact-name").val() + ".\r\nPara entrar em contato comigo, meu número é " 
    + $("#form-contact-phone").val() + "."
    + "\r\n\r\nMinha mensagem é a seguinte: " 
    + $("#form-contact-message").val());
    console.log(name, subject, text);
          $.get("http://vierra.com.br/send", {subject:subject, text:text}, function(data){
          if(data=="sent"){
            alert("Mensagem enviada!");
            $(".name").val("");
            $(".email").val("");
            $(".phone").val("");
            $(".message").val("");
          }else{
            alert("Houve um erro no envio! Tente mais tarde.");
          }
        });
      }
});

