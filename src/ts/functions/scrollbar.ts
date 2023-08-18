import touchDevice from './touch-device'

const show = (): void => {
  const html = document.documentElement as HTMLElement

  if (!touchDevice.init()) html.style.marginRight = '0'

  html.classList.remove('overflow-hidden')
}

const hidden = (): void => {
  const html = document.documentElement as HTMLElement
  const scrollbarWidth: number = window.innerWidth - html.clientWidth

  if (!touchDevice.init()) html.style.marginRight = `${scrollbarWidth}px`

  html.classList.add('overflow-hidden')
}

export default { show, hidden }