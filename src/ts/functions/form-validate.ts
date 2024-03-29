import fileHandler from './file-handler'

const init = (form: HTMLFormElement): boolean => {

  const labels = form.querySelectorAll('*[data-label="input"]') as NodeListOf<Element>
  const download = form.querySelector('*[data-label="download"]') as HTMLElement

  let validate: boolean = true

  if (download) {

    const input = download.querySelector('*[data-input="file"]') as HTMLInputElement
    const error = download.querySelector('*[data-error]') as HTMLElement

    validate = fileHandler.init(input, error)

  }

  labels.forEach((element: Element): void => {

    const label = element as HTMLLabelElement
    const inputs = label.querySelectorAll('*[data-input]') as NodeListOf<Element>
    const error = label.querySelector('*[data-error]') as HTMLElement

    inputs.forEach((element: Element): void => {

      const input = element as HTMLInputElement

      const inputError = (): void => {

        input.focus()
        input.classList.add('input--error')
        error.classList.add('visible', 'opacity-100')
        validate = false

      }

      const maxLengthInputTel = (numb: number): void => {

        if (input.value.length > 0 && input.value.length < numb) {

          error.innerText = 'Введите корректный номер!'

          inputError()

        }

      }

      if (input.value == null || input.value == '' || input.value.length == 0) {

        inputError()

      } else {

        input.classList.remove('input--error')
        error.classList.remove('visible', 'opacity-100')

      }

      if (input.dataset.input == 'name') {

        if (input.value.length == 1) inputError()

      }

      if (input.dataset.input == 'tel') {

        if (input.value[1] == '7') {

          maxLengthInputTel(18)

        } else if (input.value[0] == '8') {

          maxLengthInputTel(17)

        } else if (input.value[1] !== '7') {

          maxLengthInputTel(11)

        } else {

          error.innerText = 'Пожалуйста, введите ваш номер!'

        }

      }

      if (input.dataset.input == 'text') {

        if (input.value.length > 0 && input.value.length < 10) {

          error.innerText = 'Введите не менее 10 символов!'

          inputError()

        } else {

          error.innerText = 'Пожалуйста, заполните поле!'

        }

      }

      if (input.dataset.input == 'select') {
        if (input.value === 'empty') inputError()
      }

      input.addEventListener('input', ((): void => {

        if (input.value.length > 0) {

          input.classList.remove('input--error')
          error.classList.remove('visible', 'opacity-100')

        }

      }) as EventListener, { once: true })

    })

  })

  return validate

}

export default { init }