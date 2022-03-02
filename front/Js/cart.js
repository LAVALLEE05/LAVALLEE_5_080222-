// recupération du localStorage 

let product = getproduct()

if(product.length ==  0){
    alert("votre panier est vide")
}

// mise à disposition du produit

for (let product ) {

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