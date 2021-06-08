const forthcomingSwiper = new Swiper('.forthcoming__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 5,

  breakpoints: {
    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 4,
    }
  },




  // If we need pagination
  pagination: {
    el: '.forthcoming__swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.forthcoming__swiper-button-next',
    prevEl: '.forthcoming__swiper-button-prev',
  },


});

const pastSwiper = new Swiper('.past__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 4,
  breakpoints: {
    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    }
  },

  


  // If we need pagination
  pagination: {
    el: '.past__swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.past__swiper-button-next',
    prevEl: '.past__swiper-button-prev',
  },


});
