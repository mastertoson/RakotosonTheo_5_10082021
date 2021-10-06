document.addEventListener("DOMContentLoaded", (event) => {
  // recuperation du localstorage
  basketJSON = localStorage.getItem("basket");
  // parse de l'objet du localstorage
  basketProduct = basketJSON && JSON.parse(basketJSON);

  // affichage des produits
  test();

  let total = document.getElementById("total");

  let basketTotal = getBasketTotal(basketProduct);

  total.innerHTML = basketTotal + " €";
});

// vide le localstorage
let viderpanier = document.getElementById("viderpanier");

viderpanier.addEventListener("click", (e) => {
  localStorage.clear();
  console.log("localStorage cleared");
  location.reload();
});

// crée le total du panier
function getBasketTotal(Productt) {
  return Productt.reduce(function (sum, current) {
    console.log(sum + (current.price * current.quantity) / 100);
    return sum + (current.price * current.quantity) / 100;
  }, 0);
}

let testt = document.getElementById("collapseExample");


 //validation du formulaire et envoie en POST
 const order = document.getElementById("commandValidation");
 const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
 const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
 const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
 const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
 const checkBox = document.getElementById("invalidCheck");

 order.addEventListener("click", (event) => {
     // préparation les infos pour l'envoie en POST
     let contact = {
         firstName: document.getElementById("firstName").value,
         lastName: document.getElementById("lastName").value,
         address: document.getElementById("address").value,
         city: document.getElementById("city").value,
         email: document.getElementById("email").value,
     };
     // validation que le formulaire soit correctement rempli
     if (
         (regexMail.test(contact.email) == true) &
         (regexName.test(contact.firstName) == true) &
         (regexName.test(contact.lastName) == true) &
         (regexCity.test(contact.city) == true) &
         (regexAddress.test(contact.address) == true) &
         (checkBox.checked == true)
     ) {
         event.preventDefault();

      

         let products = [];
         for (listId of basketProduct) {
             products.push(listId.id);
         }

         // envoie en POST
         fetch("https://teddies-api.herokuapp.com/api/cameras/order", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({ contact, products }),
         })
             .then((response) => response.json())
             .then((data) => {
                 localStorage.setItem("order", JSON.stringify(data));
                 document.location.href = "order.html";
             })
             .catch((erreur) => console.log("erreur : " + erreur));
     } else {
         alert(
             "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
         );
     }
     
 });
