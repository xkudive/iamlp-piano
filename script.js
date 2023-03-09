window.addEventListener("load", () => {
    let body = document.body;
    body.classList.remove("preload");
    let preloader = document.querySelector('.preloader');
    setTimeout(() => {
        body.style.overflow = "visible";
        preloader.style.display = "none";
    }, 1000)
}) 