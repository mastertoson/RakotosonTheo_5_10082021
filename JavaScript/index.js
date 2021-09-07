document.addEventListener("DOMContentLoaded", (event) => {
  
  fetch(apiurl)
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

  
});
