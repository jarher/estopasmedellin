const menuIcon = document.querySelector("#menu-icon");
const mainNav = document.querySelector(".main-nav");

const toggleNav = () => {
  if (mainNav.classList.contains("nav-collapse")) {
    mainNav.classList.toggle("nav-collapse");
    setTimeout(() => mainNav.classList.toggle("fadeIn"), 200);
  } else {
    mainNav.classList.toggle("fadeIn");
    setTimeout(() => mainNav.classList.toggle("nav-collapse"), 200);
  }
};

document.addEventListener("click", (e) => {
  if (
    e.target.id === "menu-icon" ||
    e.target.id === "close-nav" ||
    e.target.className === "navbar-link"
  ) {
    toggleNav();
  }
});
