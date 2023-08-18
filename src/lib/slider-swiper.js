import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const init = () => {

  const projectSlider = new Swiper('.project-slider .swiper', {

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    direction: 'horizontal',
    grabCursor: true,
    loop: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5,

      },

      [media.lg]: {

        spaceBetween: 24,
        direction: 'vertical',
        slidesPerView: 'auto'

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const servicesSlider = new Swiper('.services-slider .swiper', {

    slidesPerView: 1.2,
    spaceBetween: 28,
    speed: 500,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    }

  })

  const videosSlider = new Swiper('.videos-slider .swiper', {

    navigation: {

      prevEl: '.videos-slider .swiper-button-prev',
      nextEl: '.videos-slider .swiper-button-next'

    },

    slidesPerView: 1.1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    speed: 500,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.6,
        spaceBetween: 20

      },

      [media.md]: {

        slidesPerView: 2,
        spaceBetween: 24

      },

      [media.lg]: {

        slidesPerView: 3,
        spaceBetween: 36

      }

    }

  })

  window.Swiper = Swiper

}

export default { init }