document.addEventListener("DOMContentLoaded", (event) => {
  const apiurl = "https://teddies-api.herokuapp.com/api";
  
  const cards = document.querySelector('.cards_container');
  


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
    let div = document.createElement("a");
    let price = document.createElement("p");
    let name = document.createElement("p");
    let description = document.createElement("p");
    // let lenses = document.createElement("p");
    let img = document.createElement("img");
    // let link = document.createElement("a");

    // image
    img.innerHTML = null;
    // le prix
    price.innerHTML = element.price+" €";
    // le nom
    name.innerHTML = element.name;
    // description
    description.innerHTML = element.description;
   

    // attribution classes
    div.setAttribute("class", "cards", "href");
    div.setAttribute("href","item.html"+ "?id=" + element._id);
    price.setAttribute("class", "price");
    name.setAttribute("class", "name");
    img.setAttribute("class", "img");
    img.setAttribute("src", element.imageUrl);
    img.setAttribute("alt", element.name);
    description.setAttribute("class", "description");
    

    // ordre DOM
    cards.prepend(div);
    div.prepend(description);
    div.prepend(price);
    div.prepend(name);
    div.prepend(img);
    
  }
  
});

