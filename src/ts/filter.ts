const currentCategory = (categories: NodeListOf<Element>) => {
  const names: string[] = []
  let width = 0
  let square = 300

  categories.forEach((element: Element): void => {
    const category = element as HTMLInputElement

    if (category && category.checked === true) {
      if (category.dataset.filterName) {
        names.push(String(category.dataset.filterName))
      } else if (category.dataset.filterWidth) {
        width = Number(category.dataset.filterWidth)
      } else if (category.dataset.filterSquare) {
        square = Number(category.dataset.filterSquare)
      }
    }
  })

  return { names, width, square }
}

const filtering = (cards: NodeListOf<Element>, value: any): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement

    if (!card) return

    const names: string[] = String(card.dataset.filterName).split(' ')
    const namesLength: boolean = value.names.length > 1 ? names.sort().join(',') === value.names.sort().join(',') : names.includes(value.names[0])
    const width: number = Number(card.dataset.filterWidth)
    const widthDiapason: boolean = (value.width >= width && value.width <= 10) || (value.width < width && value.width > 10) || (value.width === 0)
    const square: number = Number(card.dataset.filterSquare)
    const squareDiapason: boolean = value.square >= square
    let absence = false

    if ((namesLength || value.names.length === 0) && widthDiapason && squareDiapason) {
      absence = true      
    } else {
      absence = false
    }

    switch (absence) {
    case false: {
      card.classList.add('hidden')
      break
    }

    case true: {
      card.classList.remove('hidden')
      card.classList.add('filter-show')
      setTimeout((): void => card.classList.remove('filter-show'), 300)
      break
    }
    }
  })
}

const init = (): void => {
  const filters = document.querySelectorAll('*[data-filter]') as NodeListOf<Element>

  filters.forEach((element: Element): void => {
    const filter = element as HTMLElement

    if (!filter) return

    const categories = filter.querySelectorAll('*[data-filter-category]') as NodeListOf<Element>
    const cards = filter.querySelectorAll('*[data-filter-card]') as NodeListOf<Element>
    const btns = filter.querySelectorAll('*[data-filter-btn]') as NodeListOf<Element>

    btns.forEach((element: Element): void => {
      const btn = element as HTMLButtonElement

      if (!btn) return

      btn.addEventListener('click', ((): void => {
        let value

        if (btn.dataset.filterBtn === 'button') {
          value = currentCategory(categories)
        } else {
          value = {
            names: [],
            width: 0,
            square: 300
          }
        }
        filtering(cards, value)
      }) as EventListener)
    })
  })
}

export default { init }
