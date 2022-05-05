// recupération du produit issu de L'url

let productApi ="";
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
    }
    productApi = product
});

//  produit a envoyer dans le localStorage au click

document.querySelector("#addToCart").addEventListener("click", function () {

    const colors = document.getElementById('colors').value
    const quantity = document.getElementById('quantity').value
    const quantityNumber = parseInt(quantity)
    const productId = {
        trueId : id,
        id: id + "_" + colors,
        name: productApi.name,
        color: colors,
        quantity: quantityNumber,
        price: productApi.price,
        image: productApi.imageUrl,
        altTxt: productApi.altTxt,
    }

    // alerte en cas de probleme

    if (productId.color == "") {

    } else if (productId.quantity <=0) {
      const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
      .item__content__settings{
        background-color:red;
      }
      `)

      alert('merci de choisir une quantitée entre 1 et 100')

    } else {

// envoi dans le localStorage et redirection vers le panier 
// appel du panier

  if(!localStorage.getItem("basket")) { 
  localStorage.setItem("basket", JSON.stringify([]));   } 

  let basket = JSON.parse(localStorage.getItem("basket"));

 

// recherche dans le panier
        let foundProduct = basket.find(p => p.id == productId.id)        
        if (foundProduct != undefined) {
            foundProduct.quantity++;
        }else{
            //productId.quantity = 1;
            basket.push(productId);
        }    

// sauveagarde panier

        localStorage.setItem("basket", JSON.stringify(basket));

        window.location.assign("cart.html")
    }
});
