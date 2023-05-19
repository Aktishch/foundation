import fileHandler from './functions/file-handler'

const init = (): File[] => {

  const data: File[] = []

  document.addEventListener('change', ((event: Event): void => {

    if ((event.target as HTMLInputElement).getAttribute('data-input') == 'file') {

      const form = (event.target as HTMLInputElement).closest('[data-files') as HTMLFormElement
      const download = form.querySelector('*[data-label="download"]') as HTMLLabelElement
      const ul = form.querySelector('*[data-files-list]') as HTMLElement
      const li = document.createElement('li') as HTMLElement
      const input = event.target as HTMLInputElement
      const text = download.querySelector('*[data-files-text]') as HTMLElement
      const error = download.querySelector('*[data-error]') as HTMLElement
      const files = input.files as FileList

      li.classList.add('flex', 'items-center', 'justify-between', 'gap-5')

      if (fileHandler.init(input, error)) {

        for (let i: number = 0; i < files.length; i++) {

          if (data.length < 3) {

            data.push(files[i])

            li.setAttribute('data-files-item', '')
            li.innerHTML = `
              <span class="truncate">${files[i].name}</span>
              <button class="btn btn-white text-14 p-1" data-files-remove="${files[i].lastModified}" type="button">
                <svg class="icon">
                  <use xlink:href="img/icons.svg#close">
                </svg>
              </button>
            `

            if (!ul.classList.contains('mb-5')) ul.classList.add('mb-5')

            ul.appendChild(li)

            text.innerText = 'Добавить еще'

          } else {

            error.classList.add('visible', 'opacity-100')
            error.innerText = 'Не более 3 файлов!'

          }

        }

      }

    }

  }) as EventListener)

  document.addEventListener('click', ((event: Event) => {

    if ((event.target as HTMLButtonElement).closest('[data-files-remove]')) {

      const form = (event.target as HTMLInputElement).closest('[data-files') as HTMLFormElement
      const download = form.querySelector('*[data-label="download"]') as HTMLElement
      const ul = form.querySelector('*[data-files-list]') as HTMLElement
      const input = download.querySelector('*[data-input="file"]') as HTMLInputElement
      const text = download.querySelector('*[data-files-text]') as HTMLElement
      const item = (event.target as HTMLButtonElement).closest('[data-files-item]') as HTMLElement
      const error = download.querySelector('*[data-error]') as HTMLElement
      const btn = event.target as HTMLButtonElement

      for (let i: number = 0; i < data.length; i++) {

        if (btn.dataset.filesRemove == String(data[i].lastModified)) {

          data.splice(i, 1)
          item.remove()

        }

      }

      if (data.length == 0) {

        input.value = ''
        text.innerText = 'Загрузить файлы'
        error.classList.remove('visible', 'opacity-100')
        ul.classList.remove('mb-5')

      }

    }

  }) as EventListener)

  return data

}

export default { init }