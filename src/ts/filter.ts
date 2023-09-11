const filtering = (names: string[], cards: NodeListOf<Element>): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement
    const categories = String(card.dataset.filterCard).split(' ')
    let absence = false

    names.sort().join(',') === categories.sort().join(',') ? absence = true : absence = false

    if (names.length === 0) absence = true

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

const currentCategories = (categories: NodeListOf<Element>): string[] => {
  const names: string[] = []

  categories.forEach((element: Element): void => {
    const category = element as HTMLInputElement

    if (category && category.checked === true) names.push(String(category.dataset.filterCategory))
  })
  
  return names
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
        const names: string[] = btn.dataset.filterBtn === 'button' ? currentCategories(categories) : []

        filtering(names, cards)
      }) as EventListener)
    })    
  })
}

export default { init }
