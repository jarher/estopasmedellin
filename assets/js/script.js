const menuIcon = document.querySelector("#menu-icon");
const mainNav = document.querySelector(".main-nav");

const toggleNav = () => mainNav.classList.toggle("nav-collapse");

document.addEventListener("click", (e) => {
  if (
    e.target.id === "menu-icon" ||
    e.target.id === "close-nav" ||
    e.target.className === "navbar-link"
  ) {
    toggleNav();
  }
});
