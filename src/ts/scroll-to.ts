import scrolledPage from './functions/scrolled-page'

const scrollTo = (event: Event): void => {

  event.preventDefault()

  const link = event.target as HTMLAnchorElement
  const id: string = String(link.getAttribute('href'))
  const block = document.querySelector(id) as HTMLElement
  const offsetTop: number = block.getBoundingClientRect().top + scrolledPage.init().top

  window.scrollTo({

    top: offsetTop,
    behavior: 'smooth'

  })

}

const init = (): void => {

  document.addEventListener('click', ((event: Event): void => {

    if ((event.target as HTMLElement).hasAttribute('data-scroll')) scrollTo(event)

  }) as EventListener)

}

export default { init }