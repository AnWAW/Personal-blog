"use strict";

// make an function about event listener on multiple elements

const addEventOneElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// mobile navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
};

addEventOneElements(navToggle, "click", toggleNav);

// header animation
// when scroll down to 100px header will be active

const header = document.querySelector("[data-header]");
const backtotop = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backtotop.classList.add("active");
  } else {
    header.classList.remove("active");
    backtotop.classList.remove("active");
  }
});

// slider

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPreBtn = document.querySelector("[data-slider-previous]");
const sliderNexBtn = document.querySelector("[data-slider-next]");

// step
let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);

console.log(totalSliderVisibleItems);

let totleSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;
console.log(totleSlidableItems);

console.log(sliderContainer.childElementCount);

let currentSlidePos = 0;

console.dir(sliderContainer);

const moveSliderItems = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

console.dir(moveSliderItems);
// next slider
const slideNext = function () {
  const slideEnd = currentSlidePos >= totleSlidableItems;
  console.log(slideEnd);
  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  console.log(`Next slider pos ${currentSlidePos}`);
  moveSliderItems();
};

sliderNexBtn.addEventListener("click", slideNext);

// previous slide
const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totleSlidableItems;
  } else {
    currentSlidePos--;
  }

  console.log(`Pre slider pos ${currentSlidePos}`);

  moveSliderItems();
};

sliderPreBtn.addEventListener("click", slidePrev);
