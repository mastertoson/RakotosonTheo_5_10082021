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
    // creation des cards 
     cards.innerHTML += `
     <div class="cards">
     <a href="item.html?_id=${element._id}"><img class=img src="${element.imageUrl}" alt=""></a>
     <div class=text>
        <p>${element.name}</p>
        <p>${element.price}</p>
     </div>
     <div class="description">
     <p>${element.description}</p>
     </div> 
     <input class="achat btn btn-secondary col-2" type="button" onclick="window.location.href='item.html?_id=${element._id}';" value="acheter"></input>
    </div>`;
  }
 


  


  
});

