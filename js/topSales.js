let topSalesSlider = document.querySelector(".topsales-goods-slider");
let topSalesIndicatorActive = document.querySelector(".topsales-indicator-active");
let sliderBox = document.querySelector(".slider-box");
let topSalesContainer = document.querySelector(".container-topsales");

salesSort.forEach((elem, index) => {
        let sliderItem = document.createElement("div");
        let imageBox = document.createElement("a");
        let imageBoxImage = document.createElement("img");
        let imageBoxAdditions = document.createElement("div");
        let promo = document.createElement("span");
        let newAdded = document.createElement("span");
        let promoImage = document.createElement("img");
        let newImage = document.createElement("img");
        let inStock = document.createElement("span");
        let inStockImg = document.createElement("img");

        let sliderItemInfo = document.createElement("div");
        let sliderItemInfoName = document.createElement("span");
        let sliderItemInfoAdditions = document.createElement("div");
        let additionsLeft = document.createElement("div");
        let additionsRight = document.createElement("div");
        let additionsLeftImg = document.createElement("img");
        let additionsLeftCost = document.createElement("span");
        let additionsRightSettings = document.createElement("span");
        let additionsRightFavourite = document.createElement("span");
        let settingsImg = document.createElement("img");
        let favouriteImg = document.createElement("img");

        inStock.classList.add("in-stock");
        imageBox.classList.add("card-img-box");
        imageBoxAdditions.classList.add("card-img-box-additions");
        newAdded.classList.add("new");
        promo.classList.add("promo");
        sliderItem.classList.add("topsales-slider-item");
        sliderItemInfo.classList.add("topsales-slider-item-info");
        sliderItemInfoName.classList.add("topsales-item-info-name");
        sliderItemInfoAdditions.classList.add("topsales-item-info-additions");
        additionsLeft.classList.add("item-info-additions-left");
        additionsRight.classList.add("item-info-additions-right");
        additionsLeftCost.classList.add("item-info-cost");

        newImage.setAttribute("src",`images/trophy.svg`);
        promoImage.setAttribute("src",`images/promotion.svg`);
        imageBox.setAttribute("href", `${elem.url}`);
        imageBoxImage.setAttribute("src",`images/${elem.searchImg}`); 
        additionsLeftImg.setAttribute("src",`images/bag.svg`);
        settingsImg.setAttribute("src",`images/settings.svg`);
        favouriteImg.setAttribute("src",`images/favourite.svg`);

        promo.innerText = "Акция";
        newAdded.innerText = "Новинка";
        if(elem.amount > 0){
            inStockImg.setAttribute("src",`images/tick.svg`);
            inStock.innerText = "В наличии";
            inStock.prepend(inStockImg);
        } else{
            inStockImg.setAttribute("src",`images/x-button.svg`);
            inStock.innerText = "Нет в наличии";
            inStock.prepend(inStockImg);
        }
        sliderItemInfoName.innerText = `${elem.title + " " + elem.name + " " + elem.color}`
        additionsLeftCost.innerText = `${elem.cost} ₽`;
        additionsRightSettings.innerText = `0`;


        promo.prepend(promoImage);
        newAdded.prepend(newImage);
        if(index === 0){
            imageBoxAdditions.append(promo);
        }
        if(elem.id == salesSort.length){
            imageBoxAdditions.append(newAdded);
        }
        imageBox.appendChild(imageBoxImage);
        imageBox.appendChild(imageBoxAdditions);
        imageBox.appendChild(inStock);
        additionsRightSettings.prepend(settingsImg);
        additionsRightFavourite.prepend(favouriteImg);
        additionsRight.appendChild(additionsRightSettings);
        additionsRight.appendChild(additionsRightFavourite);
        additionsLeft.appendChild(additionsLeftImg);
        additionsLeft.appendChild(additionsLeftCost);
        sliderItemInfoAdditions.appendChild(additionsLeft);
        sliderItemInfoAdditions.appendChild(additionsRight);
        sliderItemInfo.appendChild(sliderItemInfoName);
        sliderItemInfo.appendChild(sliderItemInfoAdditions);

        sliderItem.appendChild(imageBox);
        sliderItem.appendChild(sliderItemInfo);

        topSalesSlider.appendChild(sliderItem);
});

let pressed = false;
let startX = 0;
let px = 0;
let boxPos = 0;
let sliderPos = 0;

sliderBox.style.width = `${Math.floor((topSalesContainer.clientWidth+30)/300)*300-30}px`;

topSalesSlider.addEventListener("touchstart", (e) => {
    pressed = true;
    topSalesSlider.style.transition = "0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    boxPos = sliderBox.getBoundingClientRect().x;
    startX = e.touches[0].clientX;
    px = Number((topSalesSlider.style.transform).replace("translateX(", "").replace("px)", ""));
});

sliderBox.addEventListener("touchcancel", (e) => {
    pressed = false;
});

topSalesSlider.addEventListener("touchend", (e) => {
    document.body.style.overflow = "visible";
    pressed = false;
    setTimeout(() => {
        topSalesIndicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - topSalesSlider.getBoundingClientRect().x)/300)*12}px)`;
        if(pressed === true) return;
        topSalesSlider.style.transition = "0.5s ease";
        topSalesSlider.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - topSalesSlider.getBoundingClientRect().x)/300)*-300}px)`;
    }, 300)
    setTimeout(() => {
        if(pressed === true) return;
        if (window.innerWidth < (window.innerWidth - (topSalesSlider.getBoundingClientRect().width + topSalesSlider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
            topSalesIndicatorActive.style.transform = `translateX(${topSalesSliderIndicator.getBoundingClientRect().width - topSalesIndicatorActive.clientWidth}px)`;
            topSalesSlider.style.transform = `translateX(${-(topSalesSlider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
        } else if (topSalesSlider.getBoundingClientRect().x > sliderBox.getBoundingClientRect().x){
            topSalesIndicatorActive.style.transform = `translateX(0px)`;
            topSalesSlider.style.transform = `translateX(0px)`;
        }
    }, 400)
});

topSalesSlider.addEventListener("touchmove", (e) => {
    if(Math.abs(startX - e.touches[0].clientX) > 100) document.body.style.overflow = "hidden";
    if(pressed === false) return;
    sliderPos = topSalesSlider.getBoundingClientRect().x;
    topSalesSlider.style.transform = `translateX(${(startX - e.touches[0].clientX) * -1 + px}px)`;
});

let topSalesSliderIndicator = document.querySelector(".sales-slider-indicator");
let sliderLeftBtn = document.querySelector(".slider-left-button");
let sliderRightBtn = document.querySelector(".slider-right-button");
sliderLeftBtn.addEventListener("click", () => {
    setTimeout(() => {
        topSalesIndicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - topSalesSlider.getBoundingClientRect().x)/300)*12}px)`;       
    }, 500)
    let sliderTransform = Number((topSalesSlider.style.transform).replace("translateX(", "").replace("px)", ""));
    topSalesSlider.style.transform = `translateX(${sliderTransform + 300}px)`;
    setTimeout(() => {
        boxPos = sliderBox.getBoundingClientRect().x;
        sliderPos = topSalesSlider.getBoundingClientRect().x;
        if (sliderPos > boxPos) {
            topSalesSlider.style.transform = `translateX(0px)`;
        }
        if (window.innerWidth < (window.innerWidth - (topSalesSlider.getBoundingClientRect().width + topSalesSlider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
            topSalesSlider.style.transform = `translateX(${-(topSalesSlider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
        };
    }, 200)
})
sliderRightBtn.addEventListener("click", () => {
    setTimeout(() => {
        topSalesIndicatorActive.style.transform = `translateX(${Math.round((sliderBox.getBoundingClientRect().x - topSalesSlider.getBoundingClientRect().x)/300)*12}px)`;        
    }, 500)
    let sliderTransform = Number((topSalesSlider.style.transform).replace("translateX(", "").replace("px)", ""));
    topSalesSlider.style.transform = `translateX(${sliderTransform - 300}px)`;
    setTimeout(() => {
        boxPos = sliderBox.getBoundingClientRect().x;
        sliderPos = topSalesSlider.getBoundingClientRect().x;
        if (window.innerWidth < (window.innerWidth - (topSalesSlider.getBoundingClientRect().width + topSalesSlider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
            topSalesSlider.style.transform = `translateX(${-(topSalesSlider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
        };
        if (window.innerWidth < (window.innerWidth - (topSalesSlider.getBoundingClientRect().width + topSalesSlider.getBoundingClientRect().x - (sliderBox.getBoundingClientRect().width + boxPos)))){
            topSalesSlider.style.transform = `translateX(${-(topSalesSlider.getBoundingClientRect().width - sliderBox.getBoundingClientRect().width)}px)`;
        };
    }, 200)
})
window.addEventListener("resize", () => {
    topSalesIndicatorActive.style.setProperty("--items-visible", `${Math.round(sliderBox.getBoundingClientRect().width/300)}`)
    sliderBox.style.width = `${Math.floor((topSalesContainer.clientWidth+30)/300)*300-30}px`;
})
topSalesIndicatorActive.style.setProperty("--items-visible", `${Math.round(sliderBox.getBoundingClientRect().width/300)}`)
for(let i = 0; i < Array.from(topSalesSlider.children).length; i++) topSalesSliderIndicator.appendChild(document.createElement("span"));