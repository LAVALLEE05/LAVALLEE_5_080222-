// recupération du localStorage 
  
  let basket = getBasket() {
  
  if(basket.length ==  0){
     alert("votre panier est vide")
   
  
// mise à disposition du produit
  
  for (let product of basket) {
  
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
  });
