const init = (input: HTMLInputElement, error: HTMLElement): boolean => {

  const files = input.files as FileList

  if (files.length == 0) {

    error.classList.add('visible', 'opacity-100')
    error.innerText = 'Пожалуйста, загрузите файл!'
    return false

  } else if (!['image/jpeg', 'image/png', 'application/pdf'].includes(files[0].type)) {

    error.classList.add('visible', 'opacity-100')
    error.innerText = 'Только jpg, png или pdf!'
    return false

  } else if (files[0].size > 2 * Math.pow(1024, 3)) {

    error.classList.add('visible', 'opacity-100')
    error.innerText = 'Размер не более 3 мб!'
    return false

  } else {

    error.classList.remove('visible', 'opacity-100')
    return true

  }

}

export default { init }