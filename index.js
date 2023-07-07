// declare all variables
var kidQty = document.getElementById('quantitykid');
var adultQty = document.getElementById('quantityAdult');
var childQty = document.getElementById('quantityChild');
var seniorQty = document.getElementById('quantitySenior');
var submitBtn = document.getElementById('submitButton');
var outputPara = document.getElementById('totalPrice');

// generic function that takes in quantity and multiplies with appropriate price
function calcPrice(qty, price){
  return qty * price;
}

// generic function that outputs final price and amout it tickets purchased
function getMessage(qty, total){
  return outputPara.innerHTML = 'You purchased ' + qty + ' ticket(s) and your total price is $' + total + '<br><br>' + '<button>Proceed To Checkout</button>';
}

submitBtn.addEventListener('click', function() { 

 if(kidQty.value === '0' && adultQty.value === '0' && childQty.value === '0'  && seniorQty.value === '0'){
   alert('Please purchase at least 1 ticket');
 } else {
    var totalkid = calcPrice(kidQty.value, 0);
   var totalAdult = calcPrice(adultQty.value, 20);
   var totalChild = calcPrice(childQty.value, 10);
   var totalSenior = calcPrice(seniorQty.value, 15);

   var totalPrice = totalkid + totalAdult + totalChild + totalSenior;
   var totalTix = parseInt(adultQty.value) + parseInt(kidQty.value) + parseInt(childQty.value) + parseInt(seniorQty.value);

   getMessage(totalTix, totalPrice);
 }

}); 