const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-top");
const searchName = document.querySelector(".search-name");
const searchClear = document.querySelector(".search-clear");
const searchGoodsList = document.querySelector(".search-goods-list");

searchBtn.addEventListener('click', () => {
    searchBar.classList.add('search-bar-active');
});

document.addEventListener("click", e => {
    let element = e.target;
    if(element.className === "search-bg-fade"){
        searchBar.classList.remove('search-bar-active');
        let searchInput = document.querySelector(".search-input");
        searchInput.value = "";
        searchName.innerText = "Найти товары";
        searchGoodsList.innerText = "";
    }
});

searchClear.addEventListener("click", () => {
    let searchInput = document.querySelector(".search-input");
    searchInput.value = "";
    searchName.innerText = "Найти товары";
    searchGoodsList.innerText = "";
});

document.addEventListener("keyup", () => {
    if(searchBar.classList.contains("search-bar-active")){
        let searchInput = document.querySelector(".search-input");
        if (searchInput.value === "") searchName.innerText = "Найти товары";
        let searchValue = searchInput.value;
        let searchResult = [];
        heroCards.forEach((elem, index) => {
            if(elem.name.toLowerCase().includes(searchValue.toLowerCase()) || elem.title.toLowerCase().includes(searchValue.toLowerCase())){
                searchResult.push(index);
            }
        })
        if (searchResult.length === 0){
            searchName.innerText = "Ничего не найдено";
            searchGoodsList.innerText = "";
        } else {
            searchGoodsList.innerText = "";
            searchName.innerText = "Результаты по запросу: " + searchValue[0].toUpperCase() + searchValue.slice(1);
            for(let i = 0; i < searchResult.length; i++){
                let searchPiano = document.createElement("a");
                let searchPianoImg = document.createElement("span");
                let searchPianoSpanImg = document.createElement("img");
                let searchPianoTitle = document.createElement("span");

                searchPiano.classList.add("search-goods-piano");
                searchPianoImg.classList.add("search-goods-piano-img");
                searchPianoTitle.classList.add("search-goods-piano-title");

                searchPiano.setAttribute("href", `${heroCards[searchResult[i]].url}`)
                searchPianoSpanImg.setAttribute("src", `images/${heroCards[searchResult[i]].searchImg}`);
                searchPianoTitle.innerText = heroCards[searchResult[i]].name + " " + heroCards[searchResult[i]].title.toLowerCase();

                searchPianoImg.append(searchPianoSpanImg);
                searchPiano.append(searchPianoImg)
                searchPiano.append(searchPianoTitle);
                searchGoodsList.append(searchPiano);
            }
        }
    }
    Array.from(searchGoodsList.children).forEach(element => element.addEventListener("click", () => {
        searchBar.classList.remove('search-bar-active');
        let searchInput = document.querySelector(".search-input");
        searchInput.value = "";
        searchName.innerText = "Найти товары";
        searchGoodsList.innerText = "";
    }))
});