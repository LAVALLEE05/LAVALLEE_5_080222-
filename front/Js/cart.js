// produits envoyer dans le localstorage

function savecart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

// produits récupérer dans le localStorage 

function getcart() {
    let cart = localStorage.getItem("cart")
    if (cart == null) {
        return []
    } else {
        return JSON.parse(cart)
    }
}

// produit choisis ajouté dans le localStorage et verification des doublons 

function addcart(product) {
    let cart = getcart()
    let foundProduct = cart.find(p => p.id == product.id) && cart.find(p => p.color == product.color)
    if (foundProduct != undefined) {
        foundProduct.quantity += product.quantity
    } else {

        cart.push(product)
    }

    savecart(cart)
}

// suppression du ou des produit(s) choisis du localStorage 

function removeFromcart(product) {
    let cart = getcart()
    // a tester 
    // cart.filter(p => p.id !== product.id && p => p.color !== product.color)
    cart = cart.filter(p => p.id != product.id)
    savecart(cart)
}

// recupération total du ou des produit(s) du localStorage 

function getNumberProduct() {
    let cart = getcart()
    let number = 0
    for (let product of cart) {
        number += product.quantity
    }
    return number
}

// affichage de la quantité totale 

function setTotalQuantity() {
    let totalQuantity = document.getElementById('totalQuantity')
    let newQuantity = document.createTextNode(`${getNumberProduct()}`)
    if (newQuantity != undefined) {
        totalQuantity.replaceChild(newQuantity, totalQuantity.childNodes[0])

    } else {
        totalQuantity.appendChild(newQuantity)
    }
}

// affichage du prix total

function setTotalPrice() {
    let totalPrice = document.getElementById('totalPrice')
    let newPrice = document.createTextNode(`${getTotalPrice()}`)
    if (newPrice != undefined) {
        totalPrice.replaceChild(newPrice, totalPrice.childNodes[0])
    } else {
        totalPrice.appendChild(newPrice)
    }
}

// ajout de quantité 

function addQuantity(product) {
    let basket = getBasket()
    let foundProduct = basket.find(p => p.id == product.id)
    if (foundProduct != undefined) {
        foundProduct.quantity = product.quantity
    }
    setTotalQuantity()
    setTotalPrice()
}

// formulaire de contact

function validNameCity (inputName){
    let nameRegexp = new RegExp (/^[a-z ,.'-]+$/i)

    let testName = nameRegexp.test(inputName.value)
    let messageName = inputName.nextElementSibling
    if(testName){
        messageName.innerHTML = ""
        return true
    }else{
        messageName.innerHTML = "Invalide"
        return false
    }
}

// regex mail 

function validMail (inputMail){
    let mailRegexp = new RegExp (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
    let testMail = mailRegexp.test(inputMail.value)
    let messageMail = inputMail.nextElementSibling
    if(testMail){
        messageMail.innerHTML = ""
        return true
    }else{
        messageMail.innerHTML = "Invalide"
        return false
    }
}