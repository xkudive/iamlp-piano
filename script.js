window.addEventListener("load", () => {
    let body = document.body;
    body.classList.remove("preload");
    let preloader = document.querySelector('.preloader');
    navbarEdit();
    setTimeout(() => {
        body.style.overflow = "visible";
        preloader.style.display = "none";
        navbarEdit();
    }, 1000)
});

let navMainRightSection = document.querySelector(".nav-main-r-sec");
let navMiddleRightSection = document.querySelector(".nav-middle-r-sec");
let navExtraAdd = document.querySelector(".extra-add");
let navSearchBox = document.querySelector(".search-top");
let ulMenu = document.querySelector(".ul-menu");
let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuContent = document.querySelector(".burger-menu-content")
let navMainContainer = document.querySelector(".nav-main-container");
let navLocation = document.querySelector("#location");
let navNumber = document.querySelector(".number");
let navbar = document.querySelector(".navbar");
let burgerTopSection = document.querySelector(".burger-top-section");
let burgerBottomSection = document.querySelector(".burger-bottom-section");

let burgerBtn = document.querySelector(".burger-btn");
let burgerCloseBtn = document.querySelector(".burger-close-btn");

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("burger-active");
})
burgerCloseBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-active")
})

Array.from(ulMenu.children).forEach(elem => elem.addEventListener("click", () => burgerMenu.classList.remove("burger-active")))

const navbarEdit = () => {
let navSearchButtonLeft = document.querySelector(".search-btn").getBoundingClientRect().x;
    if(window.innerWidth < 761) {
        burgerMenuContent.appendChild(ulMenu)
        burgerTopSection.prepend(navLocation)
        burgerBottomSection.prepend(navNumber)
        navMainRightSection.appendChild(navExtraAdd);
        navSearchBox.style.right = `auto`;
        navSearchBox.style.left = `${navSearchButtonLeft}px`;
        if(navSearchButtonLeft === 16) navSearchBox.style.left = `0px`;
    } else if(window.innerWidth < 1001) {
        navMainContainer.prepend(ulMenu);
        navMiddleRightSection.appendChild(navLocation);
        navMiddleRightSection.appendChild(navNumber);
        navMiddleRightSection.appendChild(navExtraAdd);
        navSearchBox.style.left = `auto`;
        navSearchBox.style.right = `0px`;
    } else{
        navMainContainer.prepend(ulMenu);
        navMiddleRightSection.appendChild(navLocation);
        navMiddleRightSection.appendChild(navNumber);
        navMainRightSection.appendChild(navExtraAdd);
        navSearchBox.style.right = `auto`;
        navSearchBox.style.left = `${navSearchButtonLeft}px`;
    }
}
navbarEdit();
window.addEventListener("resize", navbarEdit);