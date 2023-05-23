// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'
import gsap from './lib/gsap'

// Scripts
import mobileMenu from './ts/mobile-menu'
import scrollTo from './ts/scroll-to'
import waved from './ts/waved'
import accordion from './ts/accordion'
import parallax from './ts/parallax'
import filter from './ts/filter'
import downloadFiles from './ts/download-files'
import formSubmit from './ts/form-submit'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  sliderSwiper.init()
  mobileMenu.init()
  scrollTo.init()
  waved.init()
  accordion.init()
  parallax.init()
  filter.init()
  const datafiles =  downloadFiles.init()
  formSubmit.init(datafiles)
  formInputs.init()
  maskTel.init()

})

window.addEventListener('load', () => {

  yandexMap.init()
  gsap.init()
  preloader.init()

})