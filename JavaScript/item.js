// recuperation des param url
let params = new URL(document.location).searchParams;
let id = params.get("_id");
const apiUrl = `https://teddies-api.herokuapp.com/api/cameras/${id}`;

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    // affichage des données de l'url en fonction de l'id
    let lenses = data.lenses;
    let image = data.imageUrl;
    let description = data.description;
    let name = data.name;
    let price = data.price;

    document.getElementById("image").src = image;
    document.getElementById("title").innerHTML = name;
    document.getElementById("description").innerHTML = description;
    document.getElementById("price").innerHTML = price / 100 + " €";

    const card = document.getElementById("option");

    // creation label
    let selectLabel = document.createElement("label");
    selectLabel.setAttribute("id", "label");
    selectLabel.setAttribute("for", "lenses");
    // creation select
    let select = document.createElement("select");
    select.setAttribute("name", "lenses");
    select.setAttribute("id", "select");
    select.setAttribute("class", "form-select");

    // creation lenses
    lenses.forEach((element) => {
      let option = document.createElement("option");
      option.value = element;
      option.text = element;
      select.add(option);
      select.append(option);
    });

    card.append(select);
    card.append(selectLabel);

    const addButton = document.getElementById("addButton");
    // envoie dans le localstorage des options choisis
    addButton.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedlense = document.getElementById("select");
      const selectedquantity = document.getElementById("quantity");
      let lenses = selectedlense.value;
      let quantity = selectedquantity.value;

      if (localStorage.getItem("basket")) {
        basket = JSON.parse(localStorage.getItem("basket"));
      } else {
        var basket = [];
      }

      Product = {};
      Product.id = id;
      Product.name = name;
      Product.lense = lenses;
      Product.quantity = quantity;
      Product.price = price;
      Product.image = image;

      basket.push(Product);

      localStorage.setItem("basket", JSON.stringify(basket));

      window.alert("Produit ajouté dans le panier");
    });
  })
  .catch((error) => {
    alert("erreur");
  });
