let heroCards = [
    {
        title: "Цифровое пианино",
        name : "Roland FP-30X",
        color : "белый",
        cost : "87 900",
        image : "piano-1.png",
        url : "#",
        searchImg: "goods-piano-1.png",
        sales: "561",
        id: "1",
        amount: "22",
    },
    
    {
        title: "Концертный рояль",
        name : "Octopus GP 210",
        color : "чёрный",
        cost : "54 200",
        image : "piano-2.png",
        url : "#",
        searchImg: "goods-piano-2.png",
        sales: "312",
        id: "2",
        amount: "0",
    },
    
    {
        title: "Салонный рояль",
        name : "Yamaha CVP 809 GP",
        color : "чёрный",
        cost : "86 300",
        image : "piano-3.png",
        url : "#",
        searchImg: "goods-piano-3.png",
        sales: "113",
        id: "3",
        amount: "3",
    },
    
    {
        title: "Кабинетный рояль",
        name : "Yamaha WWE 1100",
        color : "коричневый, чёрный",
        cost : "99 890",
        image : "piano-4.png",
        url : "#",
        searchImg: "goods-piano-4.png",
        sales: "225",
        id: "4",
        amount: "2",
    }, 

    {
        title: "Концертный рояль",
        name : "Octopus GP 210",
        color : "чёрный",
        cost : "54 200",
        image : "piano-2.png",
        url : "#",
        searchImg: "goods-piano-2.png",
        sales: "321",
        id: "5",
        amount: "7",
    },
        
    {
        title: "Кабинетный рояль",
        name : "Yamaha WWE 1100",
        color : "коричневый, чёрный",
        cost : "99 890",
        image : "piano-4.png",
        url : "#",
        searchImg: "goods-piano-4.png",
        sales: "874",
        id: "6",
        amount: "14",
    },

    {
        title: "Салонный рояль",
        name : "Yamaha CVP 809 GP",
        color : "чёрный",
        cost : "86 300",
        image : "piano-3.png",
        url : "#",
        searchImg: "goods-piano-3.png",
        sales: "64",
        id: "7",
        amount: "5",
    },
]

let idSort = heroCards.slice(0, heroCards.length);
idSort.sort((a, b) => b.id - a.id);
let newGoodsAdded = idSort.slice(0, 4);

let salesSort = heroCards.slice(0, heroCards.length);
salesSort.sort((a, b) => b.sales - a.sales);