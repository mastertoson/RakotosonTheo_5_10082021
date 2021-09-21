document.addEventListener("DOMContentLoaded", (event) => {
  // recuperation du localstorage
  basketJSON = localStorage.getItem("basket");
  // parse de l'objet du localstorage
  Productt = basketJSON && JSON.parse(basketJSON);
  
  // affichage des produits
  test();
  
  
  
  
});

// vide le localstorage
let viderpanier = document.getElementById("viderpanier");

viderpanier.addEventListener("click", (e) => {
  localStorage.clear();
  console.log("localStorage cleared");
  location.reload();
});


let testt = document.getElementById("collapseExample");

// test.submit(function(e) {
//   e.preventDefault();
// });

