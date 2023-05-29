import { coordinates } from './functions/coordinates'
import { throttle } from 'throttle-debounce';

const init = (): void => {
  const body = document.body as HTMLBodyElement
  const parallaxItems = body.querySelectorAll('*[data-parallax]') as NodeListOf<Element>

  parallaxItems.forEach((element: Element): void => {

    const parallaxItem = element as HTMLElement

    if (!parallaxItem) return

    parallaxItem.style.setProperty('--y', '0.3')
    parallaxItem.style.setProperty('--x', '0.01')

    const mousemoveHandler = (event: MouseEvent) => {

      requestAnimationFrame(() => {

        const coordinates: coordinates = {

          top: event.clientY / window.innerHeight,
          left: event.clientX / window.innerWidth

        }

        parallaxItem.style.setProperty('--y', `${coordinates.top}`)
        parallaxItem.style.setProperty('--x', `${coordinates.left}`)

      })
    }

    body.addEventListener('mousemove', throttle(100, mousemoveHandler) as EventListener)

  })

}

export default { init }