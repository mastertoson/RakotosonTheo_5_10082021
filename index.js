document.addEventListener("DOMContentLoaded", (event) => {
  const apiurl = "https://teddies-api.herokuapp.com/api";
  
  const cards = document.querySelector('#cards');
  


  fetch(apiurl + "/cameras")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        console.log(element.name);
        
        
        createElement(element);
      });
    })
    .catch((error) => {
      alert("erreur");
    });
        

  function createElement(element) {
    // creations éléments
    let div = document.createElement("div");
    let price = document.createElement("p");
    let name = document.createElement("p");
    let description = document.createElement("p");
    let lenses = document.createElement("p");
    let img = document.createElement("img");
    let link = document.createElement("a");

    // image
    img.innerHTML = null;
    // le prix
    price.innerHTML = element.price;
    // le nom
    name.innerHTML = element.name;
    // description
    description.innerHTML = element.description;
    // lenses
    lenses.innerHTML = element.lenses;
    // links
    link.innerHTML = "oui";

    // attribution classes
    div.setAttribute("class", "div");
    price.setAttribute("class", "price");
    name.setAttribute("class", "name");
    img.setAttribute("class", "img");
    img.setAttribute("src", element.imageUrl);
    img.setAttribute("alt", element.name);
    lenses.setAttribute("class", "lenses");
    description.setAttribute("class", "description");
    link.setAttribute("class","link");
    link.setAttribute("href","item.html"+ "?id=" + element._id);

    // ordre DOM
    cards.prepend(div);
    div.prepend(link);
    div.prepend(description);
    div.prepend(lenses);
    div.prepend(price);
    div.prepend(name);
    div.prepend(img);
    
  }
  
});

