// const filtering = (names: string[], width: number, square: number, cards: NodeListOf<Element>): void => {
//   cards.forEach((element: Element): void => {
//     const card = element as HTMLElement
//     const categories = String(card.dataset.filterCard).split(' ')
//     const size: number = Number(card.dataset.filterSize)
//     const area: number = Number(card.dataset.filterArea)
//     let absence = false

//     if (
//       (names.sort().join(',') === categories.sort().join(',')) &&
//       ((width >= size && width <= 10) || (width < size && width > 10) || (width === 0)) &&
//       (square >= area)
//     ) {
//       absence = true
//     } else {
//       absence = false
//     }

//     switch (absence) {
//     case false: {
//       card.classList.add('hidden')
//       break
//     }

//     case true: {
//       card.classList.remove('hidden')
//       card.classList.add('filter-show')
//       setTimeout((): void => card.classList.remove('filter-show'), 300)
//       break
//     }
//     }
//   })
// }

// const currentCategories = (categories: NodeListOf<Element>): string[] => {
//   const names: string[] = []

//   categories.forEach((element: Element): void => {
//     const category = element as HTMLInputElement

//     if (category && category.checked === true) names.push(String(category.dataset.filterCategory))
//   })

//   return names
// }

// const currentWidth = (widths: NodeListOf<Element>): number => {
//   let size = 0

//   widths.forEach((element: Element): void => {
//     const width = element as HTMLInputElement

//     if (width && width.checked === true) size = Number(width.dataset.filterWidth)
//   })

//   return size
// }

// const currentSquare = (squares: NodeListOf<Element>): number => {
//   let size = 0

//   squares.forEach((element: Element): void => {
//     const square = element as HTMLInputElement

//     if (square && square.checked === true) size = Number(square.dataset.filterSquare)
//   })

//   return size
// }

const currentCategory = (categories: NodeListOf<Element>) => {
  const names: string[] = []
  let width: undefined | number = undefined

  categories.forEach((element: Element): void => {
    const category = element as HTMLInputElement

    if (category && category.checked === true) {
      if (category.dataset.filterName) {
        names.push(String(category.dataset.filterName))
      } else if (category.dataset.filterWidth) {
        width = Number(category.dataset.filterWidth)
      }
    }
  })

  return { names, width }
}

const filtering = (cards: NodeListOf<Element>, value: any): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement

    if (!card) return

    const names: string[] = String(card.dataset.filterName).split(' ')
    const namesLength: boolean = value.names.length > 1 ? names.sort().join(',') === value.names.sort().join(',') : names.includes(value.names[0])
    const width: number = Number(card.dataset.filterWidth)
    const widthDiapason = (value.width >= width && value.width <= 10) || (value.width < width && value.width > 10) || (value.width === 0)
    let absence = false

    if (
      (namesLength) ||
      (widthDiapason) ||
      (namesLength && widthDiapason)
    ) {
      console.log(namesLength, widthDiapason, namesLength && widthDiapason);
      
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
        filtering(cards, currentCategory(categories))
      }) as EventListener)
    })
  })
  // const filters = document.querySelectorAll('*[data-filter]') as NodeListOf<Element>

  // filters.forEach((element: Element): void => {
  //   const filter = element as HTMLElement

  //   if (!filter) return

  //   const categories = filter.querySelectorAll('*[data-filter-category]') as NodeListOf<Element>
  //   const widths = filter.querySelectorAll('*[data-filter-width]') as NodeListOf<Element>
  //   const squares = filter.querySelectorAll('*[data-filter-square]') as NodeListOf<Element>
  //   const cards = filter.querySelectorAll('*[data-filter-card]') as NodeListOf<Element>
  //   const btns = filter.querySelectorAll('*[data-filter-btn]') as NodeListOf<Element>

  //   filtering(currentCategories(categories), currentWidth(widths), currentSquare(squares), cards)

  //   btns.forEach((element: Element): void => {
  //     const btn = element as HTMLButtonElement

  //     if (!btn) return

  //     btn.addEventListener('click', ((): void => {
  //       const names: string[] = btn.dataset.filterBtn === 'button' ? currentCategories(categories) : ['foundation', 'ribbon']
  //       const width: number = btn.dataset.filterBtn === 'button' ? currentWidth(widths) : 5
  //       const square: number = btn.dataset.filterBtn === 'button' ? currentSquare(squares) : 100

  //       filtering(names, width, square, cards)
  //     }) as EventListener)
  //   })    
  // })
}

export default { init }
