'use strict'

export const modalFeedBack = document.querySelector('.modal-feedback')
export const modalCallBack = document.querySelector('.modal-callback')

export const feedBackBtns = document.querySelectorAll('.nav-button__chat')
export const callbackBtns = document.querySelectorAll('.nav-button__phone')

export const closeModalsBtns = document.querySelectorAll('.modal__close-btn')

export const modalsOverlay = document.querySelector('.overlay--z--100')

export const menuLayer = document.querySelector('.overlay--z--50')
export const menu = document.querySelector('.menu')

// Open feedback modal by chat button
feedBackBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    if (menu.classList.contains('menu--show')) {
      menuLayer.classList.add('overlay--hidden')
    }
    modalFeedBack.classList.add('modal-feedback--show')
    modalsOverlay.classList.remove('overlay--hidden')
  })
})

// Open callback modal by phone button
callbackBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    if (menu.classList.contains('menu--show')) {
      menuLayer.classList.add('overlay--hidden')
    }
    modalCallBack.classList.add('modal-callback--show')
    modalsOverlay.classList.remove('overlay--hidden')
  })
})

// Close modals depending on the type of modal
closeModalsBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    let currentModal = e.target.closest('.modal')
    console.log(currentModal)
    if (currentModal.classList.contains('modal-feedback--show')) {
      currentModal.classList.remove('modal-feedback--show')
    } else {
      currentModal.classList.remove('modal-callback--show')
    }
    modalsOverlay.classList.add('overlay--hidden')

    if (menu.classList.contains('menu--show')) {
      menuLayer.classList.remove('overlay--hidden')
    }
  })
})

// Close by modal overlay
modalsOverlay.addEventListener('click', function () {
  if (modalFeedBack.classList.contains('modal-feedback--show')) {
    modalFeedBack.classList.remove('modal-feedback--show')
  } else {
    modalCallBack.classList.remove('modal-callback--show')
  }
  modalsOverlay.classList.add('overlay--hidden')

  if (menu.classList.contains('menu--show')) {
    menuLayer.classList.remove('overlay--hidden')
  }
})
