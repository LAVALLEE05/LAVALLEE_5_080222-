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

//  à enproduit a envoyer dans le localStorage au click