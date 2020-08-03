let nav = document.querySelector(".main-nav");
let toggle = document.querySelector(".main-nav__toggle");

nav.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  } else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");
  }
});
