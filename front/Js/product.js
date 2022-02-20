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

    const colors = document.getElementById('colors').value
    const quantity = document.getElementById('quantity').value
    const quantityNumber = parseInt(quantity)

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