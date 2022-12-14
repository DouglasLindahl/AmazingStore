
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".burgerContainer");
const burger = document.querySelectorAll("burger");

const body = document.querySelector("body");



menuButton.addEventListener("click", () => {
    menu.classList.toggle("menuOpen");
    menuButton.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 0)
    {
        menu.classList.remove("menuOpen");
    }
})