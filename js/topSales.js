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
    imageBox.setAttribute("draggable",`false`);
    newImage.setAttribute("draggable",`false`);
    promoImage.setAttribute("draggable",`false`);
    settingsImg.setAttribute("draggable",`false`);
    favouriteImg.setAttribute("draggable",`false`);
    additionsLeftImg.setAttribute("draggable",`false`);
    sliderItemInfoName.setAttribute("draggable",`false`);
    imageBoxImage.setAttribute("src",`images/${elem.searchImg}`);
    imageBoxImage.setAttribute("draggable",`false`); 
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

for(let i = 0; i < salesSort.length; i++) topSalesSliderIndicator.appendChild(document.createElement("span"));