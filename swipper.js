const swiperInvest = new Swiper('.invest', {
  // Optional parameters
  direction: 'horizontal',
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperCarrousel = new Swiper(['.carrousel', '.carrousel2'], {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  vspaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
