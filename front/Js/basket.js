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
    let foundProduct = basket.find(p => p.id == product.id)
    if (foundProduct != undefined) {
        foundProduct.quantity++;

    }else{

        product.quantity = 1;
        basket.push(product);
    }    
    saveBasket(basket);
}

function removeFromBasket(product){
    let basket = getbasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket)
}

function changeQuantity (product,quantity){
    let basket = getbasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if (foundProduct.quantity <=0) {
            removeFromBasket(foundProduct);

        } else {

    saveBasket(basket);
    }
}

function getNumberProduct() {
    let basket = getBasket()
    let number = 0
    for (let product of basket) {
        number += product.quantity
    }
    return number
}
