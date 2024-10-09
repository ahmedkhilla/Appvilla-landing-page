"strict mode";
const burgerMenu = document.querySelector(".burger-btn");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  burgerIcon.classList.toggle("hidden");
});
