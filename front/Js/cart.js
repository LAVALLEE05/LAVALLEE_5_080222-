// localstorage

function savecart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

// récuperation des produits du localStorage 

function getcart() {
    let cart = localStorage.getItem("cart")
    if (cart == null) {
        return []
    } else {
        return json(cart)
    }
}

