"use strict";

// Script for open and close menu
const menuOpenBtn = document.querySelector(".nav-button__menu");
const menuOverlay = document.querySelector(".overlay--z--50");
const menuBlock = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".menu__close");

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

// Script for change active menu link
const menuLinks = document.querySelectorAll(".menu__nav-link");
let menuActiveLink = document.querySelector(".menu__nav-link--active");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (!e.target.classList.contains("menu__nav-link--active")) {
      menuActiveLink.classList.remove("menu__nav-link--active");
      e.target.classList.add("menu__nav-link--active");
      menuActiveLink = e.target;
    }
  });
});

// Script for change active language button
const menuLangBtn = document.querySelectorAll(".menu__footer-btn");
let menuActiveLangBtn = document.querySelector(".menu__footer-btn--active");

menuLangBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (!e.target.classList.contains("menu__footer-btn--active")) {
      menuActiveLangBtn.classList.remove("menu__footer-btn--active");
      e.target.classList.add("menu__footer-btn--active");
      menuActiveLangBtn = e.target;
    }
  });
});
