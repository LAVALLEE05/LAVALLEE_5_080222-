function saveBasket(basket){
    localstorage.setiTem("basket",basket);
}

function getBasket(){
    localstorage.getItem("basket");
} 

function addbasket(product){
    let basket = getbasket();
    basket.push
}
