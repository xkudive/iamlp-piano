const instrumentsBox = document.querySelector(".instruments-box-item");
const instrumentsIndicatorBox = document.querySelector(".instruments-slider-indicator-box");
const instrumentsIndicatorNumber = Array.from(instrumentsBox.children);
const instrumentsLeftBtn = document.querySelector(".instruments-slider-left-button");
const instrumentsRightBtn = document.querySelector(".instruments-slider-right-button")

function instrumentsSlider() {
    let indicatorIndexNew;

    instrumentsIndicatorNumber.forEach(elem => {
        if(elem.classList.contains("instruments-image-active")) return indicatorIndexNew = instrumentsIndicatorNumber.indexOf(elem); 
    })

    let indicatorBoxChildren = Array.from(instrumentsIndicatorBox.children);
    indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
    
    let instrumentsSliderUpdate = function() {
        instrumentsIndicatorNumber.forEach(elem => {
            indicatorBoxChildren[indicatorIndexNew].classList.remove("instruments-indicator-active")
            elem.classList.remove('instruments-image-active')
        })
        if(indicatorIndexNew < instrumentsIndicatorNumber.length-1) {
            indicatorIndexNew = indicatorIndexNew + 1;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
    
        } else{
            indicatorIndexNew = 0;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
        }
    }

    let instrumentsInterval = setInterval(instrumentsSliderUpdate, 5000)

    instrumentsRightBtn.addEventListener("click", () => {
        clearInterval(instrumentsInterval)
        instrumentsInterval = setInterval(instrumentsSliderUpdate, 5000)
        instrumentsIndicatorNumber.forEach(elem => {
            indicatorBoxChildren[indicatorIndexNew].classList.remove("instruments-indicator-active")
            elem.classList.remove('instruments-image-active')
        })
        if(indicatorIndexNew < instrumentsIndicatorNumber.length-1) {
            indicatorIndexNew = indicatorIndexNew + 1;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
        } else{
            indicatorIndexNew = 0;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
        }
    })
    instrumentsLeftBtn.addEventListener("click", () => {
        clearInterval(instrumentsInterval)
        instrumentsInterval = setInterval(instrumentsSliderUpdate, 5000)
        instrumentsIndicatorNumber.forEach(elem => {
            indicatorBoxChildren[indicatorIndexNew].classList.remove("instruments-indicator-active")
            elem.classList.remove('instruments-image-active')
        })
        if(indicatorIndexNew > 0) {
            indicatorIndexNew = indicatorIndexNew - 1;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
        } else{
            indicatorIndexNew = instrumentsIndicatorNumber.length - 1;
            instrumentsIndicatorNumber[indicatorIndexNew].classList.add("instruments-image-active");
            indicatorBoxChildren[indicatorIndexNew].classList.add("instruments-indicator-active");
        }
    })

}

instrumentsSlider()