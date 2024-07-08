'use strict'

export const readMoreBtn = document.querySelector('.read-more')
export const textBox = document.querySelector('.services__text-box')
export const img = readMoreBtn
  .closest('.services__more')
  .querySelector('.more__img')
export const pElements = textBox.querySelectorAll('.services__text')
export let maxHeight = 0
export const initHeight = `${parseInt(getComputedStyle(textBox).height)}px`

pElements.forEach((item) => {
  maxHeight += item.clientHeight
})

readMoreBtn.addEventListener('click', function (e) {
  console.log(initHeight)
  textBox.classList.toggle('services__text-box--height')
  if (textBox.classList.contains('services__text-box--height')) {
    textBox.style.height = `${maxHeight + 32}px`
    img.style.transform = 'rotate(180deg)'
    readMoreBtn.textContent = 'Скрыть'
  } else {
    textBox.style.height = `${initHeight}`
    img.style.transform = 'rotate(0deg)'
    readMoreBtn.textContent = 'Читать далее'
  }
})
