let topSalesSlider = document.querySelector(".topsales-goods-slider");
let sliderBox = document.querySelector(".slider-box");
let pressed = false;
let startX = 0;
let px = 0;
let boxPos = 0;
let sliderPos = 0;

topSalesSlider.addEventListener("touchstart", (e) => {
    pressed = true;
    boxPos = sliderBox.getBoundingClientRect().x;
    startX = e.touches[0].clientX;
    px = Number((topSalesSlider.style.transform).replace("translateX(", "").replace("px)", ""));
});

sliderBox.addEventListener("touchcancel", (e) => {
    pressed = false;
});

topSalesSlider.addEventListener("touchend", (e) => {
    pressed = false;
    if (window.innerWidth < (window.innerWidth - (topSalesSlider.getBoundingClientRect().width + topSalesSlider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
        topSalesSlider.style.transform = `translateX(${-(topSalesSlider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
    };
    if (sliderPos > boxPos) {
        topSalesSlider.style.transform = `translateX(0px)`;
    }
});

topSalesSlider.addEventListener("touchmove", (e) => {
    if(pressed === false) return;
    sliderPos = topSalesSlider.getBoundingClientRect().x;
    topSalesSlider.style.transform = `translateX(${(startX - e.touches[0].clientX) * -1 + px}px)`;
});