const header = document.querySelector(".header");

const prevSlideBtn = document.querySelector(".previous-slide-btn");
const nextSlideBtn = document.querySelector(".next-slide-btn");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const btn1 = document.querySelector(".slider-btn-1");
const btn2 = document.querySelector(".slider-btn-2");
const btn3 = document.querySelector(".slider-btn-3");
const slider = document.querySelector(".slider");
const slide1 = document.querySelector(".slider0");
const slide2 = document.querySelector(".slider1");
const slide3 = document.querySelector(".slider2");
const navButton = document.querySelector(".btn-mobile-nav");
const mobileNav = document.querySelector(".header-nav");
const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");
const arrowDown1 = document.querySelector("#down-arrow1");
const arrowUp1 = document.querySelector("#up-arrow1");
const arrowDown2 = document.querySelector("#down-arrow2");
const arrowUp2 = document.querySelector("#up-arrow2");
const arrowDown3 = document.querySelector("#down-arrow3");
const arrowUp3 = document.querySelector("#up-arrow3");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("less-opacity");
  } else {
    header.classList.remove("less-opacity");
  }
});

let val = 0;

let sliderInterval = setInterval(() => {
  let active = val % 3;
  let next = (val + 1) % 3;

  document.querySelector(`.slider${active}`).classList.toggle("no-opacity");
  document.querySelector(`.slider${next}`).classList.toggle("no-opacity");
  val++;
}, 3000);

slider.addEventListener("mouseenter", () => {
  clearInterval(sliderInterval);
});

slider.addEventListener("mouseleave", () => {
  sliderInterval = setInterval(() => {
    let active = val % 3;
    let next = (val + 1) % 3;

    document.querySelector(`.slider${active}`).classList.toggle("no-opacity");
    document.querySelector(`.slider${next}`).classList.toggle("no-opacity");
    val++;
  }, 3000);
});

prevSlideBtn.addEventListener("click", () => {
  let active = val % 3;
  let next = (val - 1 < 0 ? 2 : val - 1) % 3;
  document.querySelector(`.slider${active}`).classList.toggle("no-opacity");
  document.querySelector(`.slider${next}`).classList.toggle("no-opacity");
  if (val === 0) {
    val = 2;
  } else val--;
});

nextSlideBtn.addEventListener("click", () => {
  let active = val % 3;
  let next = (val + 1) % 3;

  document.querySelector(`.slider${active}`).classList.toggle("no-opacity");
  document.querySelector(`.slider${next}`).classList.toggle("no-opacity");
  val++;
});

let opened = 0;

question1.addEventListener("click", () => {
  answer1.classList.toggle("hidden");
  answer2.classList.add("hidden");
  answer3.classList.add("hidden");
  arrowDown1.classList.toggle("hidden");
  arrowUp1.classList.toggle("hidden");
  arrowDown2.classList.remove("hidden");
  arrowUp2.classList.add("hidden");
  arrowDown3.classList.remove("hidden");
  arrowUp3.classList.add("hidden");
});

question2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
  answer1.classList.add("hidden");
  answer3.classList.add("hidden");
  arrowDown2.classList.toggle("hidden");
  arrowUp2.classList.toggle("hidden");
  arrowDown3.classList.remove("hidden");
  arrowUp3.classList.add("hidden");
  arrowDown1.classList.remove("hidden");
  arrowUp1.classList.add("hidden");
});

question3.addEventListener("click", () => {
  answer3.classList.toggle("hidden");
  answer2.classList.add("hidden");
  answer1.classList.add("hidden");
  arrowDown3.classList.toggle("hidden");
  arrowUp3.classList.toggle("hidden");
  arrowDown1.classList.remove("hidden");
  arrowUp1.classList.add("hidden");
  arrowDown2.classList.remove("hidden");
  arrowUp2.classList.add("hidden");
});

navButton.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-open");
  openNavBtn.classList.toggle("hidden");
  closeNavBtn.classList.toggle("hidden");
});

btn1.addEventListener("click", () => {
  val = 0;
  slide1.classList.remove("no-opacity");
  slide2.classList.add("no-opacity");
  slide3.classList.add("no-opacity");
});
btn2.addEventListener("click", () => {
  val = 1;
  slide2.classList.remove("no-opacity");
  slide1.classList.add("no-opacity");
  slide3.classList.add("no-opacity");
});
btn3.addEventListener("click", () => {
  val = 2;
  slide3.classList.remove("no-opacity");
  slide2.classList.add("no-opacity");
  slide1.classList.add("no-opacity");
});
