document.addEventListener("DOMContentLoaded", (event) => {
  // fetch de l'url de l'api
  fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
      // pour chaque element de l'api lance la fonction createElement
      data.forEach((element) => {
        createCards(element);
      });
    })
    .catch((error) => {
      alert("erreur");
    });
});
