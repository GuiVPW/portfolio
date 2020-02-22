$("#carousel").owlCarousel({
    lazyLoad: false, 
    rtl:true,
    rewind: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 800,
    fluidspeed: 800,
    responsive: {
      0: {
        items: 3
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 5
      }
    }
  });