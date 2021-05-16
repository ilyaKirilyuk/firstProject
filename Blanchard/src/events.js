const swiperBtn = document.querySelector('.events__btn');




swiperBtn.addEventListener('click', event => {
      let sviperHidden = document.querySelectorAll('.events-swiper__slide');

      sviperHidden.forEach((sviperActive) => {
        sviperActive.classList.remove('events-swiper__slide_hidden')
        sviperActive.classList.remove('events-swiper__slide_second-hidden')
      })
      swiperBtn.classList.add('events__btn_hidden')
    })
