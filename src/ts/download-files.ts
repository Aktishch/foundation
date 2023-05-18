const init = (): File[] => {

  const data: File[] = []

  document.addEventListener('change', ((event: Event): void => {

    if ((event.target as HTMLInputElement).getAttribute('data-input') == 'file') {

      const input = event.target as HTMLInputElement
      const files = input.files as FileList

      for (let i: number = 0; i < files.length; i++) data.push(files[i])

    }

  }) as EventListener)

  return data

}

export default { init }