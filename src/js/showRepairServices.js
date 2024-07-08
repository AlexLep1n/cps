'use strict'
export const showBtns = document.querySelectorAll('.show-more')

if (showBtns) {
  showBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => showMoreBtnHandler(e))
  })
}

export function showMoreBtnHandler(e) {
  // нашел все необходимые эелементы
  const showBtn = e.target
  const serviceSection = e.target.closest('.service')
  const brandsList = serviceSection.querySelector('.service__swiper')
  const showImg = serviceSection.querySelector('.more__img')
  const liElement = brandsList.querySelector('.service__item')
  let liHeight = parseInt(getComputedStyle(liElement).height)
  // начальная высота блока brandsList
  const initBrandsListHeight = '160px'
  // высота блока brandsList после клика по кнопке showBtn
  let greaterBrandsListHeight = `${
    parseInt(initBrandsListHeight) + liHeight + 16
  }px`
  // отслеживаем через изменение класса
  brandsList.classList.toggle('service__swiper--height')
  if (brandsList.classList.contains('service__swiper--height')) {
    brandsList.style.height = greaterBrandsListHeight
    showBtn.textContent = 'Скрыть'
    showImg.style.transform = 'rotate(180deg)'
  } else {
    brandsList.style.height = initBrandsListHeight
    showBtn.textContent = 'Показать все'
    showImg.style.transform = 'rotate(0deg)'
  }
}
