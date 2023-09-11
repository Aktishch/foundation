// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'
import gsap from './lib/gsap'

// Scripts
import sidebar from './ts/sidebar'
import scrollTo from './ts/scroll-to'
import waved from './ts/waved'
import accordion from './ts/accordion'
import parallax from './ts/parallax'
import downloadFiles from './ts/download-files'
import formSubmit from './ts/form-submit'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import preloader from './ts/preloader'
import filter from './ts/filter'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  sliderSwiper.init()
  sidebar.init()
  scrollTo.init()
  waved.init()
  accordion.init()
  parallax.init()
  const datafiles =  downloadFiles.init()
  formSubmit.init(datafiles)
  formInputs.init()
  maskTel.init()
  filter.init()

})

window.addEventListener('load', () => {

  yandexMap.init()
  gsap.init()
  preloader.init()

})