// Hambugeer button js class adder and remover
const navButton = document.querySelector(".ham-menu");
const nav = document.querySelector("nav");

let navOpen = false;

navButton.addEventListener("click", () => {
  if (!navOpen) {
    nav.classList.add("open-nav");
    navButton.classList.add("open");
    navOpen = true;
  } else {
    nav.classList.remove("open-nav");
    navButton.classList.remove("open");
    navOpen = false;
  }
});
