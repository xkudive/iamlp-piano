const imagesBox = document.querySelector(".hero-slider-images");
const heroTitlePianoType = document.querySelector(".hero-about-info-title-type");
const heroTitlePianoName = document.querySelector(".hero-about-info-title-name");
const heroPianoAvailableColor = document.querySelector(".hero-about-info-piano-color");
const heroPianoCost = document.querySelector(".hero-about-info-piano-cost-var");

function cards() {
    for(let i = 0; i < heroCards.length; i++){
        let imgBox = document.createElement("div");
        let img = document.createElement("img");

        imgBox.classList.add("hero-slider-image");
        img.setAttribute("src",`images/${heroCards[i].image}`);

        imgBox.appendChild(img);
        imagesBox.appendChild(imgBox);

        if(i == 0) imgBox.classList.add("hero-slider-image-active");
    }
}
cards();

const indicatorBox = document.querySelector(".hero-about-info-slider-indicator");
const indicatorNumber = Array.from(document.querySelector(".hero-slider-images").children);

for (let i = 0; i < indicatorNumber.length; i++){
    let indicator = document.createElement("span");
    indicator.classList.add("slider-indicator")
    indicatorBox.appendChild(indicator);
}

function imageSlider() {
    let indicatorIndex;
    
    indicatorNumber.forEach(elem => {
        if(elem.classList.contains("hero-slider-image-active")) return indicatorIndex = indicatorNumber.indexOf(elem); 
    })

    let classListAdd = () => {
        heroTitlePianoType.innerHTML = heroCards[indicatorIndex].title;
        heroTitlePianoName.innerHTML = heroCards[indicatorIndex].name;
        heroPianoAvailableColor.innerHTML = "Доступно в цвете: " + heroCards[indicatorIndex].color;
        heroPianoCost.innerHTML = heroCards[indicatorIndex].cost + " ₽";
    }

    classListAdd();

    let indicatorBoxChildren = Array.from(indicatorBox.children);
    indicatorBoxChildren[indicatorIndex].classList.add("slider-indicator-active");

    setInterval(() => {
        heroTitlePianoType.classList.add('hero-piano-active');
        heroTitlePianoName.classList.add('hero-piano-active');
        heroPianoAvailableColor.classList.add('hero-piano-active');
        heroPianoCost.classList.add('hero-piano-active');
        setTimeout(() => {
            heroTitlePianoType.classList.remove('hero-piano-active');
            heroTitlePianoName.classList.remove('hero-piano-active');
            heroPianoAvailableColor.classList.remove('hero-piano-active');
            heroPianoCost.classList.remove('hero-piano-active');
        }, 500);

        indicatorNumber.forEach(elem => {
            indicatorBoxChildren[indicatorIndex].classList.remove("slider-indicator-active")
            elem.classList.remove('hero-slider-image-active')
        })
        if(indicatorIndex < indicatorNumber.length-1) {
            indicatorIndex = indicatorIndex + 1;
            indicatorNumber[indicatorIndex].classList.add("hero-slider-image-active");
            indicatorBoxChildren[indicatorIndex].classList.add("slider-indicator-active");
            setTimeout(() => {
                classListAdd();
            }, 500);
    
        } else{
            indicatorIndex = 0;
            indicatorNumber[indicatorIndex].classList.add("hero-slider-image-active");
            indicatorBoxChildren[indicatorIndex].classList.add("slider-indicator-active");
            setTimeout(() => {
                classListAdd();
            }, 500);

        }
    }, 5000)
}
imageSlider();