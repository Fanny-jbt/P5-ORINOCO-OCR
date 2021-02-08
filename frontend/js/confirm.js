//déclaration des variables
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));  // recuperer le panier convertit en javascript 
console.log('shoppingCart',shoppingCart)
let cartApi =JSON.parse(localStorage.getItem('orderInfos'));
console.log('cartApi',cartApi)
const orderModal = document.getElementById("modalText");



//boite modal 
let p1 = document.createElement('p');
orderModal.appendChild(p1);
let orderId = cartApi.orderId
console.log("orderId",orderId)
p1.textContent ="Commande n°"+"br"+orderId;//recuperer par l'api
let p2 = document.createElement('p');
orderModal.appendChild(p2);
let price =totalCartPrice ();
console.log("price",price)
p2.textContent ="Prix total de la commande :"+" "+ price +" €";

const btnclearOrder = document.getElementById("clearOrder")
btnclearOrder.addEventListener('click', function(){
	localStorage.clear();
	location.replace("index.html")
}) 

function totalCartPrice (){
    let totalCart = 0;
     for ( let teddy in shoppingCart){
	
        let cartQte =  shoppingCart[teddy].qte;
        let cartprice =  shoppingCart[teddy].price;
        totalCart += cartQte * cartprice
     localStorage.setItem('totalCart',JSON.stringify(totalCart) );
 }
  return totalCart
}
