function confirmation() {
  const confirmNumb = document.getElementById("orderId");
  confirmNumb.innerText = (new URL(window.location).searchParams.get("orderId"));
  console.log("Id de la commande =");
  localStorage.clear();
}

confirmation();