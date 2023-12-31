// Simple carousel
// =============================================================================

const $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",                    
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  scrollLock: true,
  scrollLockDelay: 100,
  rewind: true,
});