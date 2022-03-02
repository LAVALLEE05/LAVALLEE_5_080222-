// envoi des produits dans le localStorage

function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket))
}

// récuperation des produits du localStorage 

function getBasket() {
    let basket = localStorage.getItem("basket")
    if (basket == null) {
        return []
    } else {
        return JSON.parse(basket)
    }
}

// ajout du produit ciblé dans le localStorage et verification des doublons 

function addBasket(product) {
    let basket = getBasket()
    let foundProduct = basket.find(p => p.id == product.id) && basket.find(p => p.color == product.color)
    if (foundProduct != undefined) {
        foundProduct.quantity += product.quantity
    } else {

        basket.push(product)
    }

    saveBasket(basket)
}

// suppression du produit ciblé du localStorage 

function removeFromBasket(product) {
    let basket = getBasket()
    // a tester 
    // basket.filter(p => p.id !== product.id && p => p.color !== product.color)
    basket = basket.filter(p => p.id != product.id)
    saveBasket(basket)
}

// recupération du nombre total de produit du localStorage 

function getNumberProduct() {
    let basket = getBasket()
    let number = 0
    for (let product of basket) {
        number += product.quantity
    }
    return number
}

// récupération du prix total des produits du localStorage 

function getTotalPrice() {
    let basket = getBasket()
    let total = 0
    for (let product of basket) {
        total += product.quantity * product.price
    }
    return total
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

// gestion de l'ajout de quantité 

function addQuantity(product) {
    let basket = getBasket()
    let foundProduct = basket.find(p => p.id == product.id)
    if (foundProduct != undefined) {
        foundProduct.quantity = product.quantity
    }

    saveBasket(basket)
    setTotalQuantity()
    setTotalPrice()
}

// regex nom, prénom et ville

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

// envoi de l'objet contact dans le localStorage 

function saveContact(contact){
    localStorage.setItem("contact", JSON.stringify(contact))
}

// recupération de l'objet contact du localStorage 

function getContact() {
    let contact = localStorage.getItem("contact")
    if (contact == null) {
        return []
    } else {
        return JSON.parse(contact)
    }
}