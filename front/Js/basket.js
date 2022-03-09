// enregistrement du panier dans le localstorage

function saveBasket(basket){
    localstorage.setiTem("basket", JSON.stringify(basket);
}

// recuperation des produits du localstorage

function getBasket(){
    let basket = localstorage.getItem("basket");
    if (basket == null) {
        return [];    
    }else{
        JSON.parse (basket);
    }
} 

// ajout du produit dans le panier

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

// suppression des produits du panier

function removeFromBasket(product){
    let basket = getbasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket)
}

// modifier la quantite des produits du panier

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

function getTotalPrice() {
    let basket = getBasket()
    let total = 0
    for (let product of basket) {
        total += product.quantity * product.price
    }
    return total
}

function setTotalQuantity() {
    let totalQuantity = document.getElementById('totalQuantity')
    let newQuantity = document.createTextNode(`${getNumberProduct()}`)
    if (newQuantity != undefined) {
        totalQuantity.replaceChild(newQuantity, totalQuantity.childNodes[0])

    } else {
        totalQuantity.appendChild(newQuantity)
    }
}

function setTotalPrice() {
    let totalPrice = document.getElementById('totalPrice')
    let newPrice = document.createTextNode(`${getTotalPrice()}`)
    if (newPrice != undefined) {
        totalPrice.replaceChild(newPrice, totalPrice.childNodes[0])
    } else {
        totalPrice.appendChild(newPrice)
    }
}
}
