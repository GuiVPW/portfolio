$(".owl-carousel").owlCarousel({
    items: 5,
    lazyLoad: false, 
    rtl:true,
    rewind: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 15,
    responsiveClass: true,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 800,
    fluidspeed: 800,
    responsive: {
      0: {
        items: 5
      },
  
      600: {
        items: 5
      },
  
      1024: {
        items: 5
      },
  
      1366: {
        items: 5
      }
    }
  });