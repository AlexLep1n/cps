'use strict'

export const servicesTabs = document.querySelectorAll('.services__tab')
export let serviceActivesTab = document.querySelector('.services__tab--active')

servicesTabs.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    let currentTab = e.target
    if (!currentTab.classList.contains('services__tab--active')) {
      currentTab.classList.add('services__tab--active')
      serviceActivesTab.classList.remove('services__tab--active')
      serviceActivesTab = currentTab
    }
  })
})
