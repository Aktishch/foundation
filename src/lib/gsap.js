import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollSmoother from './scroll-smoother'

const createAnimations = () => {

  {

    const header = document.querySelector('*[data-header]')

    const scrollHeader = gsap.from(header, {

      yPercent: -100,
      duration: 0.3,
      ease: 'sine.out'

    })

    ScrollTrigger.create({

      start: 'top top',
      onUpdate: (self) => {

        if (self.direction === -1) {

          scrollHeader.play()

        } else {

          scrollHeader.reverse()

        }

      }

    })

  }

  {

    gsap.timeline({

      defaults: {

        duration: 0.6

      }

    }).from('.main__title', {

      x: -150,
      opacity: 0
      
    }).from('.main__subtitle', {

      x: -150,
      opacity: 0,
      stagger: 0.05

    }).from('.main__elems', {

      y: 80,
      opacity: 0,
      stagger: 0.1

    }).from('.main__btns', {

      y: 80,
      opacity: 0,
      stagger: 0.15

    }).from('.main__bg', {

      y: 150,
      opacity: 0,
      stagger: 0.2

    }).from('.main__item--blue', {

      x: 150,
      opacity: 0,
      stagger: 0.3

    }).from('.main__item--orange', {

      x: -150,
      opacity: 0,
      stagger: 0.35

    })

  }

}

const init = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  ScrollTrigger.defaults({ toggleActions: 'play none none reverse' })
  ScrollTrigger.refresh(true)

  // if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({

      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 3,
      smoothTouch: 1,
      effects: true

    })

    if (document.readyState == 'complete') {

      ScrollSmoother.get().paused(false)

    } else {

      ScrollSmoother.get().paused(true)

    }

  // }

  createAnimations()

}

export default { init }