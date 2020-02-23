$("#carousel").owlCarousel({
    lazyLoad: true, 
    rtl:true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 20,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 800,
    fluidspeed: 800
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });