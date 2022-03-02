// recupération des objets demandés pour passer commande 

let contact = getContact()
let basket = getBasket()

let products = basket.map(i => i.trueId) 

let  post = {
    contact : contact,
    products : products,
}

// option necessaire à l'api pour utiliser POST

const apiParam = {
    method : 'POST',
    headers : {
        'Accept' : 'application/json',
        'Content-Type': 'application/json' 
    },
    body : JSON.stringify(post)
}

// envoi des données au serveur

 fetch("http://localhost:3000/api/products/order",apiParam )
 .then(data => data.json())

 // affichage du numéro de commande

 .then (order => {
     let htmlOrderId = document.getElementById('orderId')
     let newOrderId = document.createTextNode(`${order.orderId}`)
    
    if (newOrderId != undefined) {
        htmlOrderId.replaceChild(newOrderId, htmlOrderId.childNodes[0])

    } else {
        htmlOrderId.appendChild(newOrderId)
    }
})

// suppression du localStorage pour éviter les erreurs une fois la commande passé

localStorage.clear()