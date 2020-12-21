// inserisco oggetti dom in variabili
var nameBurger = document.getElementById('name-burger');
var checkElements = document.getElementsByClassName('check-elements');
var coupon = document.getElementById('coupon');
var button = document.getElementById('button');
var price = document.getElementById('price');
// creao lista array con i coupon possibili
var arrCoupon = ['12354ABCDEb', '12354ABCDEo', '12354ABCDEq', '12354ABCDEv', '12354ABCDEm'];

// dichiaro variabile di controllo checkbox impostata a 0
var counter = 0;
//dichiaro variabile total alla quale si sommeranno i vari ingredienti
var total = 50;
// aggiungo l' evento click al bottone
button.addEventListener('click', function() {
  // controllo che l' utente abbia inserito il nome e lo richiamo in caso contrario
  if (nameBurger.value === '') {
    alert('Inserire nome burger');
  }/*altrimenti avvio le operazioni*/else{
    // ad ogni click total torna a 50 altrimenti continuerebba ad aumentare
    total = 50;
    // creo ciclo for per verificare i checkbox selezionati dall' utente
    for (var i = 0; i < checkElements.length; i++) {
      if (checkElements[i].checked) {
        // ogni elemento checkato counter aumenta di 1
        counter += 1;
        // stabilisco il nuovo total sommandolo al parseInt del valore html dei checkElements
        total += parseInt(checkElements[i].value);
      }
    }

    price.innerHTML = total +" "+ 'euro';
  }



});
