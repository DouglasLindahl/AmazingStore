
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".hamburger");


menuButton.addEventListener("click", () => {
    menu.classList.toggle("menuOpen");
})