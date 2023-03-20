let topSalesSlider = document.querySelector(".topsales-goods-slider");
let topSalesIndicatorActive = document.querySelector(".topsales-indicator-active");
let sliderCase = document.querySelector(".slider-box");
let topSalesContainer = document.querySelector(".container-topsales");
let topSalesSliderIndicator = document.querySelector(".sales-slider-indicator");
let sliderLeftBtn = document.querySelector(".slider-left-button");
let sliderRightBtn = document.querySelector(".slider-right-button");

let workSlider = document.querySelector(".work-box");
let workIndicatorActive = document.querySelector(".work-indicator-active");
let workSliderBox = document.querySelector(".work-box-container");
let workContainer = document.querySelector(".work-container");
let workSliderIndicator = document.querySelector(".work-slider-indicator-box");
let workSliderLeftBtn = document.querySelector(".work-slider-left-button");
let workSliderRightBtn = document.querySelector(".work-slider-right-button");

let servicesSlider = document.querySelector(".services-box");
let servicesIndicatorActive = document.querySelector(".services-indicator-active");
let servicesSliderBox = document.querySelector(".services-box-container");
let servicesContainer = document.querySelector(".services-container");
let servicesSliderIndicator = document.querySelector(".services-slider-indicator-box");
let servicesSliderLeftBtn = document.querySelector(".services-slider-left-button");
let servicesSliderRightBtn = document.querySelector(".services-slider-right-button");

let sliderAll = function(slider, sliderBox, sliderContainer, indicator, indicatorActive, leftBtn, rightBtn , transformPixels){
    let pressed = false;
    let startX = 0;
    let px = 0;
    let boxPos = 0;
    let sliderPos = 0;

    sliderBox.style.width = `${Math.floor((sliderContainer.clientWidth+30)/transformPixels)*transformPixels-30}px`;
    if(sliderBox.className === "services-box-container") {
        setTimeout(() => {
            if(window.innerWidth < 761) sliderBox.style.width = `${Math.floor((sliderContainer.clientWidth+30)/transformPixels)*transformPixels-30}px`;
            else sliderBox.style.width = `100%`;
        }, 1000)
    }

    slider.addEventListener("touchstart", (e) => {
        pressed = true;
        slider.style.transition = "0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
        boxPos = sliderBox.getBoundingClientRect().x;
        startX = e.touches[0].clientX;
        px = Number((slider.style.transform).replace("translateX(", "").replace("px)", ""));
    });
    
    sliderBox.addEventListener("touchcancel", (e) => {
        pressed = false;
    });
    
    slider.addEventListener("touchend", (e) => {
        document.body.style.overflow = "visible";
        pressed = false;
        setTimeout(() => {
            indicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*12}px)`;
            if(pressed === true) return;
            slider.style.transition = "0.5s ease";
            slider.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*-transformPixels}px)`;
        }, 300)
        setTimeout(() => {
            if(pressed === true) return;
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                indicatorActive.style.transform = `translateX(${indicator.getBoundingClientRect().width - indicatorActive.clientWidth}px)`;
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            } else if (slider.getBoundingClientRect().x > sliderBox.getBoundingClientRect().x){
                indicatorActive.style.transform = `translateX(0px)`;
                slider.style.transform = `translateX(0px)`;
            }
        }, 400)
    });
    
    slider.addEventListener("touchmove", (e) => {
        if(Math.abs(startX - e.touches[0].clientX) > 100) {
            document.body.style.overflow = "hidden";
        }
        if(pressed === false) return;
        sliderPos = slider.getBoundingClientRect().x;
        slider.style.transform = `translateX(${(startX - e.touches[0].clientX) * -1 + px}px)`;
    });
    
    slider.addEventListener("mousedown", (e) => {
        pressed = true;
        slider.style.transition = "0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
        boxPos = sliderBox.getBoundingClientRect().x;
        startX = e.clientX;
        px = Number((slider.style.transform).replace("translateX(", "").replace("px)", ""));
    });
    
    sliderBox.addEventListener("mouseup", (e) => {
        document.body.style.overflow = "visible";
        pressed = false;
        setTimeout(() => {
            indicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*12}px)`;
            if(pressed === true) return;
            slider.style.transition = "0.5s ease";
            slider.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*-transformPixels}px)`;
        }, 300)
        setTimeout(() => {
            if(pressed === true) return;
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                indicatorActive.style.transform = `translateX(${indicator.getBoundingClientRect().width - indicatorActive.clientWidth}px)`;
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            } else if (slider.getBoundingClientRect().x > sliderBox.getBoundingClientRect().x){
                indicatorActive.style.transform = `translateX(0px)`;
                slider.style.transform = `translateX(0px)`;
            }
        }, 400)
    });
    
    window.addEventListener("mouseup", (e) => {
        pressed = false;
        document.body.style.overflow = "visible";
        pressed = false;
        setTimeout(() => {
            indicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*12}px)`;
            if(pressed === true) return;
            slider.style.transition = "0.5s ease";
            slider.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*-transformPixels}px)`;
        }, 300)
        setTimeout(() => {
            if(pressed === true) return;
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                indicatorActive.style.transform = `translateX(${indicator.getBoundingClientRect().width - indicatorActive.clientWidth}px)`;
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            } else if (slider.getBoundingClientRect().x > sliderBox.getBoundingClientRect().x){
                indicatorActive.style.transform = `translateX(0px)`;
                slider.style.transform = `translateX(0px)`;
            }
        }, 400)
    });
    
    window.addEventListener("mousemove", (e) => {
        if(pressed === false) return;
        sliderPos = slider.getBoundingClientRect().x;
        slider.style.transform = `translateX(${(startX - e.clientX) * -1 + px}px)`;
    });
    
    slider.addEventListener("mousemove", (e) => {
        if(pressed === false) return;
        sliderPos = slider.getBoundingClientRect().x;
        slider.style.transform = `translateX(${(startX - e.clientX) * -1 + px}px)`;
    });
    
    leftBtn.addEventListener("click", () => {
        setTimeout(() => {
            indicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*12}px)`;       
        }, 500)
        let sliderTransform = Number((slider.style.transform).replace("translateX(", "").replace("px)", ""));
        slider.style.transform = `translateX(${sliderTransform + transformPixels}px)`;
        setTimeout(() => {
            boxPos = sliderBox.getBoundingClientRect().x;
            sliderPos = slider.getBoundingClientRect().x;
            if (sliderPos > boxPos) {
                slider.style.transform = `translateX(0px)`;
            }
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            };
        }, 200)
    })
    rightBtn.addEventListener("click", () => {
        setTimeout(() => {
            indicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - slider.getBoundingClientRect().x)/transformPixels)*12}px)`;        
        }, 500)
        let sliderTransform = Number((slider.style.transform).replace("translateX(", "").replace("px)", ""));
        slider.style.transform = `translateX(${sliderTransform - transformPixels}px)`;
        setTimeout(() => {
            boxPos = sliderBox.getBoundingClientRect().x;
            sliderPos = slider.getBoundingClientRect().x;
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            };
            if (window.innerWidth < (window.innerWidth - (slider.getBoundingClientRect().width + slider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
                slider.style.transform = `translateX(${-(slider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
            };
        }, 200)
    })
    window.addEventListener("resize", () => {
        if(sliderBox.className === "services-box-container") {
            if(window.innerWidth < 761) sliderBox.style.width = `${Math.floor((sliderContainer.clientWidth+30)/transformPixels)*transformPixels-30}px`;
            else sliderBox.style.width = `100%`;
        }
        if(sliderBox.className !== "services-box-container") sliderBox.style.width = `${Math.floor((sliderContainer.clientWidth+30)/transformPixels)*transformPixels-30}px`;
        
        if(getComputedStyle(document.querySelector(".work-slider-indicator")).getPropertyValue("display") === "none") slider.style.transform = `translateX(0px)`;
        indicatorActive.style.setProperty("--items-visible", `${Math.round(sliderBox.getBoundingClientRect().width/transformPixels)}`);

    })
    indicatorActive.style.setProperty("--items-visible", `${Math.round(sliderBox.getBoundingClientRect().width/transformPixels)}`)
}

sliderAll(topSalesSlider, sliderCase , topSalesContainer, topSalesSliderIndicator, topSalesIndicatorActive, sliderLeftBtn, sliderRightBtn, 300);
sliderAll(workSlider, workSliderBox , workContainer, workSliderIndicator, workIndicatorActive, workSliderLeftBtn, workSliderRightBtn, 300);
sliderAll(servicesSlider, servicesSliderBox , servicesContainer, servicesSliderIndicator, servicesIndicatorActive, servicesSliderLeftBtn, servicesSliderRightBtn, 240);