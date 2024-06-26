"use strict";
const showBtn = document.querySelector(".more__btn");
const brandsList = document.querySelector(".service__swiper");
const showImg = document.querySelector(".more__img");

showBtn.addEventListener("click", () => {
  brandsList.classList.toggle("service__swiper--height");
  if (brandsList.classList.contains("service__swiper--height")) {
    showBtn.textContent = "Скрыть";
    showImg.style.transform = "rotate(180deg)";
  } else {
    showBtn.textContent = "Показать все";
    showImg.style.transform = "rotate(0deg)";
  }
});
