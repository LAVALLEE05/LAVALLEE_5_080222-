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



