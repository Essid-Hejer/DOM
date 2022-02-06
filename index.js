var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var like = document.querySelectorAll('.like');
var sum = document.getElementById('total');
var prices = document.querySelectorAll('.price')

console.log(plus)
for (let i= 0; i<plus.length;i++){
    plus [i].addEventListener('click', inc);

}
for (let i= 0; i<minus.length;i++){
    minus [i].addEventListener('click', dec);

}
for (let i = 0; i<like.length; i++) {
    like [i].addEventListener('click', changecolor);
    
}



function inc(event){
    var cible = event.target;
    var parent = cible.parentElement;
    var p = parent.querySelector('p');
    var quantity = Number(p.innerHTML);
    quantity++;
    p.innerHTML=quantity
    var tr = parent.parentElement.parentElement
    console.log(tr);
    var unitprice = Number(tr.querySelector('.unitPrice').innerHTML)
    console.log(unitprice);
    var total = unitprice*quantity
    var price = tr.querySelector('.price')
    var somme = 0
    price.innerHTML = total
    for (let i = 0; i < prices.length; i++) {
       somme += Number(prices[i].innerHTML)
        
    }
    console.log(somme);
  sum.innerHTML = somme
}

function dec(event){
    var cible = event.target;
    var parent = cible.parentElement;
    var p = parent.querySelector('p');
    var quantity = Number(p.innerHTML);
    if (quantity> 0)
    quantity--;
    p.innerHTML=quantity

    // console.log(p);
    var tr = parent.parentElement.parentElement
    console.log(tr);
    var unitprice = Number(tr.querySelector('.unitPrice').innerHTML)
    console.log(unitprice);
    var total = unitprice*quantity
    var price = tr.querySelector('.price')
    price.innerHTML = total
    var somme = 0
    for (let i = 0; i < prices.length; i++) {
       somme += Number(prices[i].innerHTML)
        
    }
    console.log(somme);
  sum.innerHTML = somme

}
function changecolor(event){
    var cible = event.target;
   if (cible.style.color != "red"){
       cible.style.color = "red"
   } else if (cible.style.color == "red"){
       cible.style.color = "grey"
   }
}
