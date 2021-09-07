// global const
const apiurl = "https://teddies-api.herokuapp.com/api/cameras";
const cards = document.querySelector(".cards_container");


// creation des cards 
function createElement(element) {
     cards.innerHTML += `
     <div class="cards">
     <a href="item.html?_id=${element._id}"><img class=img src="${element.imageUrl}" alt=""></a>
     <div class=text>
        <p>${element.name}</p>
        <p>${element.price/100} €</p>
     </div>
     <div class="description">
     <p>${element.description}</p>
     </div> 
     <input class="achat btn btn-secondary col-2" type="button" onclick="window.location.href='item.html?_id=${element._id}';" value="acheter"></input>
    </div>`;
  }


// creation localstorage



const btn = document.querySelector("#addButton");
const sb = document.querySelector("#select");

btn.onclick = (event) => {
    event.preventDefault();
    alert(sb.SelectIndex);
};







function addToLocalStorage(){

    
}


