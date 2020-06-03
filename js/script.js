//myJavaScript
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombe = [];
var count = 0;
while (bombe.length <= 15) {

  var bomba = Math.floor(Math.random() * 16) + 1;
  console.log("bomba " + bomba);

  if (!(bombe.includes(bomba))) {
    bombe.push(bomba);
  }

count++
}

console.log("sedici bombe " + bombe);
//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
