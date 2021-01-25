  /******Récupérer toutes les données des Teddy en fonction de son ID******/

    //  recuperer l'id du teddy dans l'url au clic du bouton personnaliser le teddy
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");

    //  affichage d'un produit dans la page
let request = new XMLHttpRequest() //crée un nouvel objet de type  XMLHttpRequest  qui correspond à notre objet AJAX
request.onreadystatechange = function () { // gestionnaire d'événement si l'attribut readyState change
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { // si la réponse est prête et le statut est OK
        teddies = JSON.parse(this.responseText) // renvoie la réponse sous la forme d'un string

        setCardItem() // appel de la fonction

    }
};
request.open("GET", "http://localhost:3000/api/teddies/" + id) // initialisation de la requête
request.send() // envoi de la requête





function setCardItem(){ 
  //générer la card avec les données api
      const cardImg = document.getElementById("cardImg")
      let img= document.createElement('img')
      cardImg.appendChild(img)
      img.setAttribute("class","bd-placeholder-img card-img-top")
      img.setAttribute("alt","image ourson"+teddies.name)
      img.setAttribute("src",teddies.imageUrl)

      const cardTitle = document.getElementById("cardTitle")
      let h3 =document.createElement("h3")
      cardTitle.appendChild(h3)
      h3.setAttribute("class","card-title")
      h3.textContent= teddies.name

      const cardPrice = document.getElementById("cardPrice")
      let h4 =document.createElement("h4")
      cardPrice.appendChild(h4)
      h4.setAttribute("class","card-sub-title")
      h4.textContent= teddies.price +"€"

      const cardText = document.getElementById("cardText")
      let p =document.createElement("p")
      cardText.appendChild(p)
      p.setAttribute("class","card-text")
      p.textContent= teddies.description

  // ajouter les couleur de l'array color dans le teddy avec l'ID color
      let colorList = teddies.colors
      const color = document.getElementById("cardColor")
          colorList.forEach(function(colors){
            let option = document.createElement("option")
            color.appendChild(option)
            option.setAttribute('value',colors)
            option.textContent =colors
          })
         
  // on stock la couleur par defaut dans une variable
      let colorSelect =teddies.colors[0];
        console.log("teddy.colors",colorSelect)
  // definir le contenu de l'objet teddy
      let teddy ={
          name : teddies.name,
          id : teddies._id,
          price : teddies.price,
          qte : 1,
          colors :colorSelect,
      }
    console.log("teddy.colors 1",colorSelect)
      
  // lors du choix de la couleur on recupere la valeur dans une variable on met a jour teddy color
      
      color.addEventListener("change",function (e){
      colorSelect = e.target.value; // on stock la couleur
      teddy.colors = colorSelect // on change la couleur par la selection
      console.log(" colorSelect", colorSelect)
      })
        
  // au clic sur btn ajouter    
      const btnAdTeddyCart =document.getElementById("adTeddyCart");   
      btnAdTeddyCart.addEventListener("click", function(){ 
        addToCart(teddy);
      })

}
         
 
function getShoppingcart(){ 
// recuperer le contenu du local storage et si vide alors creer un objet vide pour ajouter les teddy
  return JSON.parse(localStorage.getItem("shoppingCart")) || {};
}

function addToCart(product){
//on recupere le contenu du localstorage
  const shoppingCart = getShoppingcart();
  const idproduct = product.name + product.colors

         if(shoppingCart[idproduct]){//si doublons on incremente 1 a la qte du local storage
          shoppingCart[idproduct].qte += product.qte
         
            }else{//si pas doublons ajouter id et teddy dans le shoppingCart
              shoppingCart[idproduct] = product
            }
        // on sort du test et on met ajour le local storage
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))   
}

