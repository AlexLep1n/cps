"use strict";

const menuOpenBtn = document.querySelector(".nav-button__menu");
const menuOverlay = document.querySelector(".overlay--z--50");
const menuBlock = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".nav-button__menu-close");

// Open by menu open button
menuOpenBtn.addEventListener("click", function () {
  menuBlock.classList.toggle("menu--show");
  menuOverlay.classList.toggle("overlay--hidden");
});

// Close by menu close button
menuCloseBtn.addEventListener("click", function () {
  menuBlock.classList.toggle("menu--show");
  menuOverlay.classList.toggle("overlay--hidden");
});

// Close by menu overlay
menuOverlay.addEventListener("click", function () {
  menuBlock.classList.toggle("menu--show");
  menuOverlay.classList.toggle("overlay--hidden");
});
