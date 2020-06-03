//myJavaScript
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombe = [];
var count = 0;
var utente = "";

while (bombe.length <= 15) {

  var bomba = Math.floor(Math.random() * 100) + 1;

  if (!(bombe.includes(bomba))) {
    bombe.push(bomba);
  }

}

console.log("sedici bombe " + bombe);

//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.


//Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

while(bombe.length < 100) {

  utente = prompt("Inserisci un numero");

  if (!(bombe.includes(utente))) {
    bombe.push(utente);
    console.log("Bravo continua! Hai inserito " + utente)
    console.log("Aggiornamento tentativi " + bombe);
  }else {
    console.log("Hai perso");
    bombe.length = 100;
  }

}

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
