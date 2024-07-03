"use strict";

const readMoreBtn = document.querySelector(".read-more");
const textBox = document.querySelector(".services__text-box");
const img = readMoreBtn.closest(".services__more").querySelector(".more__img");
const pElements = textBox.querySelectorAll(".services__text");
let maxHeight = 0;
const initHeight = `${parseInt(getComputedStyle(textBox).height)}px`;

pElements.forEach((item) => {
  maxHeight += item.clientHeight;
});

readMoreBtn.addEventListener("click", function (e) {
  console.log(initHeight);
  textBox.classList.toggle("services__text-box--height");
  if (textBox.classList.contains("services__text-box--height")) {
    textBox.style.height = `${maxHeight + 32}px`;
    img.style.transform = "rotate(180deg)";
    readMoreBtn.textContent = "Скрыть";
  } else {
    textBox.style.height = `${initHeight}`;
    img.style.transform = "rotate(0deg)";
    readMoreBtn.textContent = "Читать далее";
  }
});
