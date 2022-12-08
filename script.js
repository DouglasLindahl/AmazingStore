
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".burgerContainer");

const body = document.querySelector("body");



menuButton.addEventListener("click", () => {
    menu.classList.toggle("menuOpen");
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 0)
    {
        menu.classList.remove("menuOpen");
    }
})