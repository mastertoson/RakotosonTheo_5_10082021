document.addEventListener("DOMContentLoaded", (event) => {
  // recuperation du localstorage
  Order = localStorage.getItem("order");
  basket = localStorage.getItem("basket");
  // parse de l'objet du localstorage
  OrderProduct = Order && JSON.parse(Order);
  basketProduct = basket && JSON.parse(basket);

  console.log(OrderProduct.contact);
  console.log(basketProduct);
  console.log();

  // recuperation données localstorage
  let nom = OrderProduct.contact.lastName;
  let prenom = OrderProduct.contact.firstName;
  let address = OrderProduct.contact.address;
  let city = OrderProduct.contact.city;
  let mail = OrderProduct.contact.email;
  let basketTotal = getBasketTotal(basketProduct);
  
  const information = document.getElementById("information");
  

  information.innerHTML += `
    <p>merci</p>
    <p id="total">votre commande <b>${entier}</b> d'un montant de <b>${basketTotal}</b> € est validée</p>
    <p id="mail">envoyé par mail à : <b>${mail}</b></p>
    <p id="adress">sera envoyé a l'adresse : <b>${address} ${city}</b></p>
    <p id="nom_prenom">Nom : <b>${nom} ${prenom}</b> </p>
`;
});

// calcul du total
function getBasketTotal(basketProduct) {
  return basketProduct.reduce(function (sum, current) {
    console.log(sum + (current.price * current.quantity) / 100);
    return sum + (current.price * current.quantity) / 100;
  }, 0);
}

// crée un numéro de commande random
function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1000000, 574102410);
