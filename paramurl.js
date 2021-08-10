
document.addEventListener("DOMContentLoaded", (event) => {
  const apiurl = "http://localhost:3000/api";
  let url_string = window.location.href;
  let url = new URL(url_string);
  let id = url.searchParams.get("id");
  let i = 1;
  let currentObject = {};

  fetch(apiurl + "/cameras/" + id)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let lenses = data.lenses;
      let image = data.imageUrl;
      let description = data.description;
      let name = data.name;
      let price = data.price;
      currentObject = data;

      document.getElementById("title").innerHTML = name;
      document.getElementById("description").innerHTML = description;
      document.getElementById("price").innerHTML = price + " €";
      document.getElementById("image").src = image;

      test();
      function test(element) {
        const card = document.getElementById("card-body");

        let select = document.createElement("select");
        select.setAttribute("name", "lenses");
        select.setAttribute("id", "select");

        lenses.forEach((element) => {
          let option = document.createElement("option");
          option.value = element;
          option.text = element;
          select.add(option);
          console.log(select);
          select.append(option);
        });
        card.append(select);
      }

      change_valeur();
      function change_valeur() {
        value = document.getElementById("select").value;
      }

      let count = getBasketFromLocaleStorage().length;
      document.getElementById("counter").innerHTML = count;
    })
    .catch((error) => {
      alert("erreur");
    });

  document.getElementById("bouton").addEventListener("click", () => {
    let objet = currentObject;

    objet.lenses = document.getElementById("select").value;

    let basket = getBasketFromLocaleStorage();

    let count = basket.push(objet);
    if(count < 0 ){
      localStorage.clear();
      count = 0;
      basket = [];
    }

    document.getElementById("counter").innerHTML = count;

    localStorage.setItem("basket", JSON.stringify(basket));
  });

  function getBasketFromLocaleStorage() {
    let basket = [];

    if (localStorage.getItem("basket") != undefined) {
      basket = JSON.parse(localStorage.getItem("basket"));
    }
    return basket;
  }
});
