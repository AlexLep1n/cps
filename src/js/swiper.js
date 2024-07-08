'use strict'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

export let windowInnerWidth = window.innerWidth

if (windowInnerWidth < 768) {
  new Swiper('.swiper', {
    slidesPerView: 'auto',
    // If we need pagination
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
