function saveBasket(basket){
    localstorage.setiTem("basket", JSON.stringify(basket);
}

function getBasket(){
    return JSON.pars (localstorage.getItem("basket"));
} 

function addbasket(product){
    let basket = getbasket();
    basket.push(product);
}


