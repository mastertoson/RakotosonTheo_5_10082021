// global const
const apiurl = "https://teddies-api.herokuapp.com/api/cameras";
const cards = document.querySelector(".cards_container");
const table = document.querySelector(".table");
const totalpric = document.getElementById("total");
// INDEX.JS //

// creation des cards
function createElement(element) {
  cards.innerHTML += `
     <div class="cards">
     <a href="item.html?_id=${element._id}"><img class=img src="${
    element.imageUrl
  }" alt=""></a>
     <div class=text>
        <p>${element.name}</p>
        <p>${element.price / 100} €</p>
     </div>
     <div class="description">
     <p>${element.description}</p>
     </div> 
     <input class="achat btn btn-secondary col-2" type="button" onclick="window.location.href='item.html?_id=${
       element._id
     }';" value="acheter"></input>
    </div>`;
}

// BASKET.JS //

// affichage des produits
function listOfProduct() {
  if (basketProduct != null) {
    basketProduct.forEach((Product) => {
      createE(Product);
    });
  } else {
    nottable();
  }
}
// //si localstorage non vide
// creation basket
function createE(Product) {
  let realprice = Product.price / 100;
  //  sous total
  let sousTotalCalcul = realprice * Product.quantity;
  // total
  table.innerHTML += `
      <tbody>
                 <td><img class="image" src="${Product.image}"></td>
                 <td id="name">${Product.name}</td>
                 <td id="lense">${Product.lense}</td>
                 <td id="quantity">${Product.quantity}</td>
                 <td id="price">${realprice + " €"}</td>
                 <td id="sousTotal" class="value">${sousTotalCalcul} €</td>
      </tbody>`;
}
// // si localstorage vide
function nottable() {
  table.innerHTML += `
      <tbody>
                 <td></td>
                 <td id="name"></td>
                 <td id="lense"></td>
                 <td id="quantity"><p>pas de produits</p></td>
                 <td id="price"></td>
                 <td id="sousTotal"></td>
      </tbody>`;
}
