"use strict";
let windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 768) {
  new Swiper(".swiper", {
    slidesPerView: "auto",
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
