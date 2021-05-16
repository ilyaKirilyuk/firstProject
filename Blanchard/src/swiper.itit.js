
const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
      // spaceBetween: 40,
    },
    675: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },


    1500: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    }
  },

  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__btn-next',
    prevEl: '.gallery__btn-prev',
  },
});

(function () {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:675px)');

  // keep track of swiper instances to destroy later
  let eventsSwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {


    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (eventsSwiper !== undefined) eventsSwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      const swiperBtn = document.querySelector('.events__btn');

        let sviperHidden = document.querySelectorAll('.events-swiper__slide');

        sviperHidden.forEach((sviperActive) => {
          sviperActive.classList.remove('events-swiper__slide_hidden')
          sviperActive.classList.remove('events-swiper__slide_second-hidden')
        })
        swiperBtn.classList.add('events__btn_hidden')
      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function () {

    eventsSwiper = new Swiper('.events-swiper', {

      loop: true,

      slidesPerView: '1',

      centeredSlides: true,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      pagination: {
        el: '.events-swiper__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'events-swiper-bullet',
        bulletActiveClass: 'events-swiper-active-bullet',
      },


    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */



(function () {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(max-width:675px)');

  // keep track of swiper instances to destroy later
  let editionSwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {


    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (editionSwiper !== undefined) editionSwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function () {

    editionSwiper = new Swiper('.edition-swiper', {
      loop: true,
      // centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      breakpoints: {

        675: {
          slidesPerView: 2,
          spaceBetween: 50,
        },


        1570: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
      },
      pagination: {
        el: '.edition-swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
      navigation: {
        nextEl: '.edition-swiper-next',
        prevEl: '.edition-swiper-prev',
      },


    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */





const swiperProjects = new Swiper('.projects-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 34,
    },


    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },



  // Navigation arrows
  navigation: {
    nextEl: '.projects-swiper-next',
    prevEl: '.projects-swiper-prev',
  },
});
