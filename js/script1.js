//myJavaScript
//Fai inserire un numero, che chiameremo N, all’utente.
var n = parseInt(prompt("inserisci un numero"));
var risultato = [];
//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
for(var count = 0; count < n; count++) {
  risultato.push(generaArray());
}

function generaArray () {
  var array = []

  for (var count = 0; count < 10; count++ ) {
  var numeroCasuale = Math.floor(Math.random() * 10) + 1;
  array.push(numeroCasuale);
}
  return array
}

console.log(generaArray())

console.log(risultato)
//Ogni volta che ne crei uno, stampalo a schermo.
