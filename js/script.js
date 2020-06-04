//myJavaScript

//Variabili globali
var arrayBombe = [];
var maxRange = 100;
var nBombe = 16;
var tentativiPossibili = maxRange - nBombe;


//Chiedi a Utente il livello di gioco
//Valida la scelta Utente
var livelloGioco = parseInt(prompt("Scegli mil livello di gioco. Digita 1 per facile. 2 per normale. 3 per difficile"));
while (livelloGioco !== 1 && livelloGioco !== 2 && livelloGioco !== 3) {
  livelloGioco = parseInt(prompt("Scegli mil livello di gioco. Digita 1 per facile. 2 per normale. 3 per difficile"));
}

//Cambia il livello del gioco in base alla scelta utente
//Il livello di gioco interagisce con il Rangemax di possibilita. Default maxRange = 100
if (livelloGioco === 2) {
  maxRange = 80;
}else if (livelloGioco === 3) {
  maxRange = 50;
}


generaBombe(nBombe, maxRange, arrayBombe)
console.log(arrayBombe)

//Chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
//Continuare a chiedere un numero fino a quando il nTentativiUtente < rispetto al nTentativiPossibili(cambia in base al livello di difficolta)
var esplosione = false;
var tentativiUtente = 0;
var arrayTentativiUtente = [];
while (!esplosione && tentativiUtente < tentativiPossibili ) {
  var nUtente = parseInt(prompt("Prova a evitare le bombe inserendo un numero da 1 a " + maxRange))

  //Validazione numero immesso da Utente
  while (isNaN(nUtente) || nUtente < 1 || nUtente > maxRange) {
    nUtente = parseInt(prompt("Hey! Inserisci un numero valido! Prova a evitare le bombe inserendo un numero da 1 a " + maxRange));
  }

  //Verifica che Utente non inserisce stesso numero piu volte
  while (verificaArray(nUtente, arrayTentativiUtente)) {
    nUtente = parseInt(prompt("Hey! Non ci provare! Questo numero lo hai gia' inserito! inserisci un numero da 1 a " + maxRange));
  }

  //If il numero è presente nella lista dei numeri generati, la partita termina
  //Else si continua chiedendo all’utente un altro numero.
  //La partita termina quando il giocatore inserisce un numero “vietato”.
  if (verificaArray(nUtente, arrayBombe)) {
    console.log("Mi dispiace. Una bomba ti ha fatto esplodere. Credo dispiaccia anche a te..." + "Sei arriavato a " + tentativiUtente + " Prima di esplodere")
    esplosione = true;
  }else {
    tentativiUtente++
    arrayTentativiUtente.push(nUtente)
    console.log("Questi sono i numeri che hai inserito precedentemente " + arrayTentativiUtente)
    console.log("Bravo! Continua, puoi farcela...")
    console.log("Sei arriavato a " + tentativiUtente + " tentativi." + " Ne hai a disposizione ancora " + (tentativiPossibili - tentativiUtente))
  }
}

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (tentativiPossibili === tentativiUtente) {
  console.log("Complimenti! Ci sei riuscito e sei rimasto tutto intero. Hai totalizzato " + tentativiUtente + " Punti");
} else {
  console.log("Sei esploso. Hai totalizzato " + tentativiUtente + " Punti")
}

//FUNZIONI
// //Verifica se elemento incluso dentro un arrayBombe
// //Ritorna un valore booleano
// //Se il valore viene trovato ritorna true altrimenti false
// //La funziona torna true solo se elemento === array[count]
function verificaArray (elemento, array) {
  var inclusoArray = false;

  for (var count = 0; count < array.length; count++) {
    if (elemento === array[count]) {
      inclusoArray = true;
    }
  }

  return inclusoArray;
}

//Genera un numero di bombe e le include in un array
//Bisogna immettere un numero di Bombe da inserire in array che diventa il valore .length di array
//Bisogna inserire un range max di valori entro cui generare il valore numerico di ogni elemento
//Ritorna un Array con un n numero di bombe
function generaBombe (numBombe, numMaxTentativi, array) {
  var count = 0;
  while (count < nBombe) {

    var bomba = Math.floor(Math.random() * maxRange) + 1;

    if (!verificaArray(bomba, arrayBombe)) {
      array.push(bomba);
      count++
    }
  }

  return arrayBombe;
}
//FINE FUNZIONI
