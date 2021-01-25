
//   //----------------------------------------------------------------------------------------------------------------------------------
//   function quantity(){// tester si les valeurs sont des number sinon les convertir 
 
//     var inputQte = document.getElementById("inputQte").value // on recupere le contenu de l'input
//     // addEventListener("click", displayDate);
    
//         if(inputQte ===""){//tester si l'input est vide  : si rien n'est saisi aficher 0
//          document.getElementById("inputQte").value = 0 
         
//         }else {
//           console.log('afficher le texte saisi dans input')
//           //ecouter l'ebvenement "taper du texte)" input puis recupere la valeur saisie
  
//         }
        
//   } 
       
  
//    function totalPrice(inputQte){
//     var inputQte = document.getElementById("inputQte").value
//     console.log ("inputQte", inputQte)
//     console.log(typeof("inputQte"))
//     var inputTotalPrice = document.getElementById("totalPrice").value   
//     var teddyPrice = data.price // prix teddy
//     var totalPrice = teddyPrice*1000
  
//    if(inputQte){
//     document.getElementById("totalPrice").value= teddyPrice 
//       }else{
       
//         console.log ("totalPrice", totalPrice)
//    console.log(typeof("totalPrice"))
//     //document.getElementById("totalPrice").value= teddyPrice * inputQte
//           }  
       
//     }

      
//      // page panier
  

// // function pour cacher un élément
// function hide(id) {
//   document.getElementById(id).style.display = "none";
// }

// // function pour afficher un élément
// function show(id) {
//   document.getElementById(id).style.display = "block";
// }
// let teddy ={
//   [data.name] : //nommer l'objet teddy avec le nom du teddy selmectionne puis creer l'objet teddy qui recuperer les info a envoyer au local storage
//       {name : data.name, 
//       description : data.description,
//       id : data._id,
//       image : data.imageUrl,
//       price : data.price,
//       qte :0
//       }
// }
// if(!cartArray) {
//   //on verifier si teddyaray existe
//     if (teddyArray.length=0){// sinon on le creer
//       let teddyArray = []
//       console.log("tableau vide",teddyArray)
      
//       }else{//sinon on push l'objet teddy dans le teddyArray
//         teddyArray.push(teddy);
//         console.log("tableau plein",teddyArray)

//       }  
// // on envoi le teddyArray (objet JS) dans le local storage,on le convertit au format JSON



    
// }
//  // if(teddy){// sinon si qte est null et color est null 
//  console.log("qte null", object.key(teddy))
     
//  //} alors on ajoute qte et color au teddy puis on met a jour le localstorage
//         console.log("qte choisie") 
//         // des qte ou color choisi ds uinput ajouter a teddy
//         quantity.addEventListener("change",function(e){
//           inputQte = this.value // ou e.target.value ou quantity.value
//           teddy.qte = inputQte
//            teddy["qte"]= inputQte
//            teddyArray.push(teddy);
//            console.log("objet teddy", teddy)})
//         console.log("teddy ok pour local storage",teddyArray) 

//  if(Object.keys(teddy) === qte){// on verrifie si qte et color existe
            //    console.log("color et qte existe",teddy["qte"])
            //  }//sinon on ajoutre qte et color au teddy 
            //  console.log("qte null",teddy.qte) 
            //  quantity.addEventListener("change",function(e){
            //   inputQte = this.value // ou e.target.value ou quantity.value
            //   teddy.qte = inputQte // ou teddy["qte"]= inputQte
            //   //teddyArray.push(teddy.qte);
            //  console.log("objet choisie", inputQte)})
            // color.addEventListener("change",function(e){
//   inputColor = this.value // ou e.target.value ou color.value
//   teddy.color = inputColor
//   teddy["color"]= inputColor
//   console.log("ajout couleur",inputColor)
// })
// if (color == null || dataQte == null){
    //   console.log("arrayQte[0]",arrayQte[0])
    // }else{
    //   console.log("add qte cart()")

            //Si input color ou input qte n’ont pas été choisit, sélectionner par défaut la première valeur du tableau (colors[0] ou qte[0])et envoyer au local storage



// // boucler les qte de l'array quantite et les afficher dans l'iput
  //     let arrayQte = [1,2,3,4,5,6,7,8,9,10]
  //     const quantity = document.getElementById("quantity")

  //       for (var i=0 ; i<arrayQte.length ; i++ ){
  //         var qte = arrayQte[i]
  //         var option = document.createElement("option")
  //         quantity.appendChild.option
  //         option.innerHTML = qte
  //         quantity.options.add(option)
  //       }
   ///bonus voir pour faire un compteur qui incremente  + -avec bouton



//    function setTeddy(data){
//     //on initialise un tableau vide
//    let teddyArray = []
//     // on recupere la clef cart array dans local storage
//     let cartArray =localStorage.getItem('cartArray')
//     //on creer l objet teddy
//     let teddy ={//nommer l'objet teddy avec le nom du teddy selmectionne puis creer l'objet teddy q
//       [data.name] : 
//           {name : data.name, 
//           id : data._id,
//           price : data.price,
//           qte : 1,
//           color : "",
//           }
       
//     }
    
//          if(!cartArray) {// on verifie si le local storage est vide
//           console.log("cartarray vide")
//             if (teddyArray.length=0){//on verifier si teddyaray est vide
//               console.log("tableau vide",teddyArray)
//               }else{//sinon on crreer un teddy array
//                 teddyArray = []
//                 console.log("tableau existant",teddyArray)
//                 console.log("nom de l'objet",Object.keys(teddy))
//                 teddyArray.push(teddy);
//                console.log("teddyarray plein",teddyArray)
              
              
//               console.log("teddy ok pour local storage",teddyArray) 
//               }
  
//              }//else{ sinonon  creer un cartArray vide et on push le teddy SANS qte et colorlocalStorage.setItem('cartArray', JSON.stringify(teddyArray) )
              
//             // }
//             //on boucle le teddyarray et on compte le nombre de teddy
//             console.log("longeur du teddy", teddyArray.length)// permet de tester si les teddy se cumulent bien
            
//   }
  
//cumuler les teddy 

let array = []

// on ajoute 3 autre teddy dans le tableau

let teddy1 =
{name :"y", 
price : 90,
qte : 5
}
let teddy2 =
{name :"r", 
price : 60,
qte : 9
}
let teddy3 =
{name :"a", 
price : 4,
qte : 2
}

array.push(teddy1)
array.push(teddy2)
array.push(teddy3)
console.log("testTadedey 2",array)

let teddy4 = 
{name :"i", 
price : 4,
qte : 2
}
array.push(teddy4)
//console.log("testTadedey 3",array )
// array.splice(2,1) // sup 1 element a partir index 2
// console.log("testTadedey 4",array )
//changer une propriete
array[0].name ="zuzu"
//console.log("arrayname",array[0].name)
//console.log("testTadedey 4",array )

// parcourir le tableau
for (i=0 ; i<array.length; i++){
  
  console.log("bouclearrayName",array[i].name)
  


}

// supprimer un teddy



// faire la boucle du teddy array et recup proprietes d'un objet 
// // si shopping cart est vide afficher votre panier est vide et cacher le formulaire
	// if (shoppingCart[0] = undefined){
	// 	console.log('si shooping cart est vide',shoppingCart)
	// 	document.getElementById("form").style.display = "none";
	// }else{
	// 	console.log('si shooping cart est plein',shoppingCart)
	// //sinon afficher le panier
	// createTableCart()
	// }
	