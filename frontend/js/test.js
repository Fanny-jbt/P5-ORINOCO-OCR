// objet item pour recuperer les valeur des objet du shopping cart
let shoppingCartItem ={// objet item du shopping cart
	name : shoppingCart[i].name, 
	id : shoppingCart[i].id,
	price : shoppingCart[i].price,
	qte : 1
	
}

//compteur qui modifie les qte et met à jour le prix de la ligne
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
let numberValue =1;

plus.addEventListener('click', function(e){
  if(numberValue >= 10){
    numberValue = 10 
    shoppingCartItem.qte = numberValue // on met a jour la key qte avec la value de l'input
    console.log("shoppingCartItem",shoppingCartItem.qte)
  }else{
    numberValue ++;
    number.innerHTML =numberValue;
    shoppingCartItem.qte = numberValue;
    

  }
  console.log("shoppingCartItem",shoppingCartItem)
  console.log("shoppingCart",shoppingCart)

})

minus.addEventListener('click',function(e){
  if(numberValue<=1) {
    numberValue = 1 
    shoppingCartItem.qte = numberValue;
    
  }else{
    numberValue -- 
    number.innerHTML =numberValue;
    shoppingCartItem.qte = numberValue;
    
  }
  console.log("shoppingCartItem",shoppingCartItem)
  console.log("shoppingCart",shoppingCart)
})



function delateItemCart(index){
	//supprimer un teddy en fonction de son index dans teddyArray
	console.log ("index",index)
	const teddy = cart[index]
	console.log ("teddy id",teddy.name)
	console.log ("teddy a suprimer",cart[index])
	cart.splice(index,1)
	console.log ("cart apres suppression",cart)
	
	let array = []
	array.push(shoppingCart)
	console.log ("array",array)

	for (let i = 0; i < cart.length; i++) {
		console.log ("array",teddy[i].name)
		
	   
	  }

 for (let [index, item] of cart.entries()) { //entries renvoie un tableau de [key, value] paires.
	// // 	if (product.name === item.name && product.colors === item.colors) {
	// // 	  cart.splice(index, 1) //splice permet de supprimer un élement du tableau
	// // 	  sessionStorage.setItem('list_products', JSON.stringify(cart)) //mettre a jour le sessionStorage apres la suppression du produit
 let curentItem =item[index].name +item[index].colors
	 console.log ("boucle index,item",index,item,curentItem)
	// console.log ("boucle curentItem",curentItem)
 }

	// console.log ("curentItem1",shoppingCart )
	// console.log ("curentItem2",shoppingCart[curentItem] )
	// console.log ("curentItem3",Object.keys(shoppingCart))
	// let panier = {[curentItem] : item[index]}
	// let panier2 =shoppingCart[curentItem]
	// console.log ("curentItem4",Object.keys(shoppingCart))
	// console.log ("curentItem5",panier2)

	// reste a voir comment acceder a la clef name object . keys?
//}
	//   }
	//  
	// }

	// 	console.log ("objet a suprimer",cart[index])
	// 	cart.splice(index,1)// on supprimer le teddy qui correpond a l'index ( du bouton cliqué)
	// 	console.log ("maj shopping cart",cart.length, cart)
	// 	 //vide le localstorage
 	// // 	 localStorage.removeItem('cart');
	//  //mettre à jour le local storage avec nouveau panier
	//  localStorage.setItem('cart',JSON.stringify(cart) ) ;
	//  totalCartPrice ();
	// //  // recharger la page
	//   document.location.reload();
//}

 }


/******  page cart ********/
