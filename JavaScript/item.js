// recuperation des param url
let params = new URL(document.location).searchParams;
let id = params.get("_id");
console.log(id);
const newUrl = `https://teddies-api.herokuapp.com/api/cameras/${id}`;

fetch(newUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let lenses = data.lenses;
    let image = data.imageUrl;
    let description = data.description;
    let name = data.name;
    let price = data.price;

    document.getElementById("image").src = image;
    document.getElementById("title").innerHTML = name;
    document.getElementById("description").innerHTML = description;
    document.getElementById("price").innerHTML = price/100 + " €";

    test();
    function test(element) {
      const card = document.getElementById("option");

      let select = document.createElement("select");
      select.setAttribute("name", "lenses");
      select.setAttribute("id", "select");
      select.setAttribute("class", "form-select");

      lenses.forEach((element) => {
        let option = document.createElement("option");
        option.value = element;
        option.text = element;
        select.add(option);
        select.append(option);
      });
      card.append(select);
    }

    // change_valeur();
    // function change_valeur() {
    //   value = document.getElementById("option").value;
    // }

  })
  .catch((error) => {
    alert("erreur");
  });

// ajout au panier
function myFunction() {
    console.log("oui");
}