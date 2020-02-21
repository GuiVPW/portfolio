$("#carousel").owlCarousel({
    lazyLoad: false, 
    rtl:true,
    rewind: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 15,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    smartSpeed: 800,
    fluidspeed: 800,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 4
      }
    }
  });