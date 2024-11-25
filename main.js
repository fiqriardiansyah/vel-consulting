import './style.css'


document.addEventListener("DOMContentLoaded", () => {
    const mobileNav = document.querySelector("#mobile-nav");
    const buttonMenu = document.querySelector("#button-menu");

    buttonMenu.addEventListener("click", () => {
        const isOpen = buttonMenu.getAttribute("data-open") === "true";
        buttonMenu.querySelector("img").setAttribute("src", isOpen ? "/menu.svg" : "/close.svg");
        buttonMenu.setAttribute("data-open", !isOpen);

        if(!isOpen) {
            mobileNav.classList.add("h-fit");
            mobileNav.classList.remove("h-0");
            return;
        }

        mobileNav.classList.remove("h-fit");
        mobileNav.classList.add("h-0");

    });
});