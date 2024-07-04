"use strict";

const menuOpenBtn = document.querySelector(".nav-button__menu");
const menuOverlay = document.querySelector(".overlay-menu");
const menuBlock = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".nav-button__menu-close");

menuOpenBtn.addEventListener("click", function () {
  menuBlock.classList.toggle("menu--show");
  menuOverlay.classList.toggle("overlay--hidden");
});

menuCloseBtn.addEventListener("click", function () {
  menuBlock.classList.toggle("menu--show");
  menuOverlay.classList.toggle("overlay--hidden");
});
