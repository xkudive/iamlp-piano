let scrollRecommend = document.querySelector(".recommend");
let scrollCatalogue = document.querySelector(".catalogue");
let scrollTopSales = document.querySelector(".topsales");
let scrollDelivery = document.querySelector(".delivery");
let scrollWork = document.querySelector(".work");
let scrollServices = document.querySelector(".services");
let scrollOurTeam = document.querySelector(".our-team");
let scrollInstruments = document.querySelector(".instruments");

function scrollReveal(element){
    let elementTop = element.offsetTop;
        let elementHeight = element.clientHeight/4;
        let windowScroll = document.body.scrollTop + window.innerHeight;
        if(windowScroll > elementTop + elementHeight) element.classList.add("reveal")
        // if(!element.classList.contains("no-remove")) {
        //     if(windowScroll < elementTop + elementHeight) element.classList.remove("reveal")
        //     if(windowScroll - window.innerHeight > elementTop + elementHeight*4) element.classList.remove("reveal")
        // }
    window.addEventListener("scroll", () => {
        let elementTop = element.offsetTop;
        let elementHeight = element.clientHeight/4;
        let windowScroll = document.body.scrollTop + window.innerHeight;
        if(windowScroll > elementTop + elementHeight) element.classList.add("reveal")
        // if(!element.classList.contains("no-remove")) {
        //     if(windowScroll < elementTop + elementHeight) element.classList.remove("reveal")
        //     if(windowScroll - window.innerHeight > elementTop + elementHeight*4) element.classList.remove("reveal")
        // }
    })
}

let topSalesDelay = Array.from(document.querySelector(".topsales-goods-slider").children)

for(let i = 0; i < topSalesDelay.length; i++){
    topSalesDelay[i].style.transitionDelay = `${i*0.2+0.2}s`
}

scrollReveal(scrollRecommend);
scrollReveal(scrollCatalogue);
scrollReveal(scrollTopSales);
scrollReveal(scrollDelivery);
scrollReveal(scrollWork);
scrollReveal(scrollServices);
scrollReveal(scrollOurTeam);
scrollReveal(scrollInstruments);