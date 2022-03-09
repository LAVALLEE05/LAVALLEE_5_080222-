function saveBasket(basket){
    localstorage.setiTem("basket",basket);
}

function getBasket(){
    return localstorage.getItem("basket");
} 

function addbasket(product){
    let basket = getbasket();
    basket.push(product);
}


