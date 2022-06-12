const swiperInvest = new Swiper('.invest', {
  direction: 'horizontal',
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperCarrousel = new Swiper(['.carrousel', '.carrousel2'], {
  slidesPerView: 2.5,
  spaceBetween: 7,
  loop: true,
  loopFillGroupWithBlank: true,
  vspaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  }
});
