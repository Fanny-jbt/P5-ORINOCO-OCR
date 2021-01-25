const url = "http://localhost:3000/api/teddies/";

/******Récupérer toutes les données de l’api (id, name, description, price, imageURL)******/ 
function getAllTeddies() {
    fetch(url)
      .then(response => {
        if (response.ok) {
          response.json()
            .then(function (datas) {
              // console.log("getAllTeddy",datas)
              addTeddiescard(datas);
            });
        } else {
          console.error("Réponse du serveur : " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getAllTeddies()


 /******  page teddiesHome ********/

function addTeddiescard(datas){//Modifier le dom avec les données api et générer la card #teddyCard

  for (teddy of datas){// boucler les donnees pour chaque oursons
    // creer une card pour chaque oursons

    var idcard= document.getElementById("teddyCard");

    var div = document.createElement("div");
    idcard.appendChild(div);
    div.setAttribute('class','card text-center')
    div.setAttribute('Style','width: 20rem;')

    var h5 = document.createElement("h5");
    div.appendChild(h5)
    h5.setAttribute("class", "card-title")
    h5.textContent=teddy.name

    var span = document.createElement("span");
    h5.appendChild(span)
    span.setAttribute("class", "badge badge-light card-price")
    span.textContent = teddy.price+"€"

    var img = document.createElement("img");
    div.appendChild(img)
    img.setAttribute("src",teddy.imageUrl)
    img.setAttribute("class","card-img-top card-image")
    img.setAttribute("alt","image teddy")

    var div1 = document.createElement("div");

    div.appendChild(div1)
    div1.setAttribute('class','card-body')

    var p = document.createElement("p");
    div.appendChild(p)
    p.setAttribute('class','card-text card-description')
    p.textContent = teddy.description

    var a = document.createElement("a");
    div.appendChild(a)
    a.setAttribute('class','btn btn-secondary addToCart')
    a.setAttribute('id','idTeddyCart')
    a.setAttribute('href','products.html?id='+teddy._id)
    a.setAttribute('role','button')
    a.textContent = "Personnaliser votre Teddy"


  }
}










