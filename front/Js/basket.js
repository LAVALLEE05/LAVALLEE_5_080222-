function saveBasket(basket){
    localstorage.setiTem("basket", JSON.stringify(basket);
}

function getBasket(){
    let basket = localstorage.getItem("basket");
    if (basket == null) {
        return [];    
    }else{
        JSON.parse (basket);
    }
} 

function addbasket(product){
    let basket = getbasket();
    basket.push(product);
    saveBasket(basket);
}


