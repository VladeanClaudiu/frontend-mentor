// Hambugeer button js class adder and remover
const navButton = document.querySelector(".ham-menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".container-overlay");

let navOpen = false;

navButton.addEventListener("click", () => {
  if (!navOpen) {
    nav.classList.add("open-nav");
    navButton.classList.add("open");
    overlay.classList.add("overlay-on");
    navOpen = true;
  } else {
    nav.classList.remove("open-nav");
    navButton.classList.remove("open");
    overlay.classList.remove("overlay-on");
    navOpen = false;
  }
});
