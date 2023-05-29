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

        duration: 0.4

      }

    }).from('.main__title', {

      x: -50,
      opacity: 0

    }).from('.main__subtitle', {

      x: -50,
      opacity: 0,
      stagger: 0.05

    }).from('.main__elems', {

      y: 50,
      opacity: 0,
      stagger: 0.1

    }).from('.main__btns', {

      y: 50,
      opacity: 0,
      stagger: 0.15

    }).from('.main__bg', {

      y: 70,
      opacity: 0,
      stagger: 0.2

    }).from('.main__item--blue', {

      x: 50,
      opacity: 0,
      stagger: 0.3

    }).from('.main__item--orange', {

      x: -50,
      opacity: 0,
      stagger: 0.35

    })

  }

  {

    gsap.from('.calculation__title', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.calculation',
        start: 'top 80%',
      }

    })

    gsap.from('.calculation__subtitle', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.calculation',
        start: 'top 70%',
      }

    })

    gsap.from('.calculation__item', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.calculation',
        start: 'top 50%',
      }

    })

    gsap.from('.calculation__content', {

      x: 100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.calculation',
        start: 'top 95%',
      }

    })

    gsap.from('.calculation__doc', {

      xPercent: -20,
      scrollTrigger: {
        rigger: '.calculation',
        start: 'top bottom',
        end: 'center 75%',
        scrub: 3
      }

    })

  }

  {

    gsap.from('.project__title', {

      x: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.project',
        start: 'top 90%',
      }

    })

    gsap.from('.project__text', {

      x: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.project',
        start: 'top 90%',
      }

    })

    gsap.from('.project__content', {

      x: 80,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.project',
        start: 'top 50%',
      }

    })

  }

  {

    gsap.from('.construction__title', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.construction',
        start: 'top 90%',
      }

    })

    gsap.from('.construction__subtitle', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.construction',
        start: 'top 85%',
      }

    })

    gsap.from('.construction__btns', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.construction',
        start: 'top 80%',
      }

    })

    const items = gsap.utils.toArray('.construction__item')

    gsap.set(items, { transition: 'none' })

    items.forEach((item, index) => {

      gsap.from(item, {
        xPercent: 30,
        opacity: 0,
        delay: index / 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: item.parentElement,
          start: 'top 95%',
        }
      })

    })

  }

  {

    gsap.from('.feedback__title', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.feedback',
        start: 'top 90%',
      }

    })

    gsap.from('.feedback__subtitle', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.feedback',
        start: 'top 85%',
      }

    })

    gsap.from('.feedback__content', {

      x: 80,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.feedback',
        start: 'top 90%',
      }

    })

  }

  {

    gsap.from('.services__title', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.services',
        start: 'top 90%',
      }

    })

    gsap.from('.services__subtitle', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.services',
        start: 'top 85%',
      }

    })

    const items = gsap.utils.toArray('.services__item')

    gsap.set(items, { transition: 'none' })

    items.forEach((item, index) => {

      gsap.from(item, {
        xPercent: 30,
        opacity: 0,
        delay: index / 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: item.parentElement,
          start: 'top 95%',
        }
      })

    })

  }

  {

    gsap.from('.specialist__title', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.specialist',
        start: 'top 90%',
      }

    })

  }

  {

    gsap.from('.about__title', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.about',
        start: 'top 90%',
      }

    })

    gsap.from('.about__block', {

      x: -80,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
      }

    })

  }

  {

    gsap.from('.gallery__title', {

      y: 50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top 90%',
      }

    })

    const items = gsap.utils.toArray('.gallery__item')

    gsap.set(items, { transition: 'none' })

    items.forEach((item, index) => {

      gsap.from(item, {
        yPercent: 30,
        opacity: 0,
        delay: index / 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: item.parentElement,
          start: 'top 80%',
        }
      })

    })

  }

  {

    gsap.from('.questions__title', {

      x: -50,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.questions',
        start: 'top 90%',
      }

    })

  }

  {

    gsap.from('.specialists__content', {

      x: -80,
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.specialists',
        start: 'top 70%',
      }

    })

    gsap.from('.specialists__team', {

      x: 80,
      opacity: 0,
      duration: 0.4,
      delay: 0.4,
      scrollTrigger: {
        trigger: '.specialists',
        start: 'top 70%',
      }

    })

  }

  {

    gsap.from('.contacts__content', {

      x: -80,
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.contacts',
        start: 'top 90%',
      }

    })

  }

}

const init = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  ScrollTrigger.defaults({ toggleActions: 'play none none reverse' })
  ScrollTrigger.refresh(true)

  if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({

      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 4,
      effects: true

    })

    if (document.readyState == 'complete') {

      ScrollSmoother.get().paused(false)

    } else {

      ScrollSmoother.get().paused(true)

    }

  }

  createAnimations()

}

export default { init }