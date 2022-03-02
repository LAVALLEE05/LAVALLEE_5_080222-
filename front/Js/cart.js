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






// recupération du localStorage 

let product = getproduct()

if(product.length ==  0){
    alert("votre panier est vide")
}

// mise à disposition du produit

for (let product of cart) {

    document.querySelector("#cart__items").innerHTML +=

        `<article class="cart__item" data-id="${product.id}" data-color="${product.color} ">
                            <div class="cart__item__img">
                              <img src="${product.image}" alt="${product.altTxt} ">
                            </div>
                            <div class="cart__item__content">
                              <div class="cart__item__content__description">
                                <h2>${product.name} </h2>
                                <p>${product.color}</p>
                                <p>${product.price}€</p>
                              </div>
                              <div class="cart__item__content__settings">
                                <div class="cart__item__content__settings__quantity">
                                  <p>Qté :  </p>
                                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                                </div>
                                <div class="cart__item__content__settings__delete">
                                  <p class="deleteItem">Supprimer</p>
                                </div>
                              </div>
                            </div>
                          </article>`
}                     

// suppression du produit au click 

document.querySelectorAll(".deleteItem").forEach(item => item.addEventListener("click", (e) => {
    let deletItem = e.target.closest('[data-id]')
    let product = deletItem.dataset
    removeFromBasket(product)
    window.location.assign("cart.html")
}));

// changement du choix du produit

document.querySelectorAll(".itemQuantity").forEach(item => item.addEventListener("change", (e) => {
    let quantity = e.target.closest('.itemQuantity').value
    let quantityNumber = parseInt(quantity)
    let deletItem = e.target.closest('[data-id]')
    let product = deletItem.dataset

    productID = {
        id: product.id,
        quantity: quantityNumber
    }

// suppression du produit en cas de probleme 

    if (quantityNumber <= 0 ){
        removeFromcart(productID)
        window.location.assign("cart.html")
    } else if (quantityNumber > 100){
        removeFromcart(productID)
        window.location.assign("cart.html")
    }else {

        // ajout de la quantité si aucun probleme 

        addQuantity(productID)
    }
}))

// affichage de la quantité et du prix total

setTotalQuantity()
setTotalPrice()

// formulaire de contact

let form = document.querySelector('.cart__order__form')

form.firstName.addEventListener('change', function(){ 
validNameCity(this)
})

form.lastName.addEventListener('change', function(){ 
validNameCity(this)
})

form.city.addEventListener('change', function(){ 
    validNameCity(this)
})

form.email.addEventListener('change', function(){ 
    validMail(this)
})

// si le formulaire est valide la redirection se fais sur la page de confirmation

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const email = document.getElementById('email').value


    contact = {
        firstName : firstName,
        lastName : lastName,
        address : address,
        city : city,
        email : email
    }

    if( validNameCity(form.firstName) == false){
        alert("merci de renseigner votre Prénom")

    }else if (validNameCity(form.lastName) == false){
        alert("merci de renseigner votre Nom")

    }else if (validNameCity(form.city) == false){
        alert("merci de renseigner votre Ville")

    }else if(validMail(form.email) == false){
        alert("merci de renseigner votre Email")

    }else if(cart.length == 0){
        alert("votre panier est vide")
        
    }else{
        saveContact(contact)
        window.location.assign("confirmation.html")
    }          
})

