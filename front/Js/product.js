// recupération du produit issu de L'url

let id = (new URL(window.location).searchParams.get("id"));

fetch("http://localhost:3000/api/products/" + id)
    .then(data => data.json())

// affichage du produit 

.then(product => {
    document.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${product.imageUrl}" alt="${product.altTxt}">`);
    document.querySelector("#title").insertAdjacentHTML("afterbegin", `${product.name}`);
    document.querySelector("#price").insertAdjacentHTML("afterbegin", `${product.price}`);
    document.querySelector("#description").insertAdjacentHTML("afterbegin", `${product.description}`);
    for (let productSelectColor of product.colors) {
        document.querySelector("#colors").innerHTML += `<option value="${productSelectColor}">${productSelectColor}</option>`
    };

//  produit a envoyer dans le localStorage au click

document.querySelector("#addToCart").addEventListener("click", function () {

console.log('appui sur le bouton');

    const colors = document.getElementById('colors').value
    const quantity = document.getElementById('quantity').value
    const quantityNumber = parseInt(quantity)

console.log('color' + colors);

console.log('quantity' + quantity);

    const productId = {
        trueId : id,
        id: id + "_" + colors,
        name: product.name,
        color: colors,
        quantity: quantityNumber,
        price: product.price,
        image: product.imageUrl,
        altTxt: product.altTxt,
    }

// alerte en cas de probleme

if (productId.color == "") {
    const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
    .item__content__settings{
        background-color:red;
    }
       `)
    alert('merci de choisir une couleur')

    } else if (productId.quantity <= 0) {
    const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
    .item__content__settings{
        background-color:red;
    }
       `)
    alert('merci de choisir une quantitée entre 1 et 100')

    } else {

// envoi dans le localStorage et redirection vers le panier 

console.log(localStorage)

        addbasket(product.Id);
        window.location.assign("cart.html")
    }
})
});