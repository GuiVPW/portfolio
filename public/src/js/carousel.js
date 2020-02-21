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
    autoWidth: true,
    smartSpeed: 800,
    fluidspeed: 800,
    responsive: {
      0: {
        items: 6
      },
  
      600: {
        items: 6
      },
  
      1024: {
        items: 6
      },
  
      1366: {
        items: 6
      }
    }
  });