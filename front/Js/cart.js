<article class="cart__item" id=${objPanier[i].id} data-color=${objPanier[i].couleur}>
<div class="cart__item__img">
<img src=${objPanier[i].image} alt=${objPanier[i].imageAlt}>
</div>
<div class="cart__item__content">
<div class="cart__item__content__description">
    <h2>${objPanier[i].name}</h2>
    <p>${objPanier[i].couleur}</p>
    <p class="total">${objPanier[i].prix * objPanier[i].nombre} €</p>
</div>
<div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
    <p>Qté : </p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" oninput="updateQty(this)" value=${objPanier[i].nombre}>
    </div>
    <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Supprimer</p>
    </div>
</div>
</div>
</article>`

