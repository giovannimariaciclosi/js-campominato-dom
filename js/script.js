/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPERBONUS
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/


/*
PSEUDOCODICE

- Assegno variabile e event listener al bottone play
- Assegno una variabile al numero di celle da generare
- Assegno una variabile all'elemento html grid container
- Creo una funzione createSquare che genera un elemento "div" con del testo all'interno e gli assegna una classe "square"
- Nell'event listener del bottone play creo un ciclo for che va da 1 a 100
- Nel ciclo for assegno una variabile nuovo elemento alla funzione createSquare e la appendo al grid container
- Aggiungo un event listener a questa variabile che al click fa aggiungere una classe ai quadrati
- Aggiungo il console log che stampa, al click di un quadrato, il suo inner text
*/

// prendo l'elemento play button e gli assegno una variabile
let playButtonEl = document.getElementById("play-button");
// console.log(playButtonEl);

// prendo l'elemento grid container easy e gli assegno una variabile
let gridContainerEl = document.getElementById("grid-container");

// prendo l'elemento grid container medium e gli assegno una variabile
// let gridContainerMediumEl = document.getElementById("grid-container-medium");

// prendo l'elemento grid container hard e gli assegno una variabile
// let gridContainerHardEl = document.getElementById("grid-container-hard");


// creo una variabile per il numero di celle da generare (che forse potrebbe servirmi per i bonus)
let cellNumber;


//bonus test

// prendo l'elemento diffculty selector e gli assegno una variabile
let difficutlySelectorEl = document.getElementById("difficulty-selector");

// provo a comprendere come funziona il select / option di html
// console.log(difficutlySelectorEl);
// difficutlySelectorEl.addEventListener("click", function() {
//   console.log(difficutlySelectorEl.value);
// });


//aggiungo l'event listener al click del play button
playButtonEl.addEventListener("click", function() {

  gridContainerEl.innerText = "";

  // se il valore dell'elemento diffulty selector è = easy
  if (difficutlySelectorEl.value == "easy") {

    // faccio un ciclo for che va da 1 a 100
    for (let i = 1; i <= 100; i++) {
  
      // assegno una variabile nuovo elemento alla funzione createSquare con parametri i e classe square-easy
      let newSquareEl = createSquare(i, "square-easy");
    
      // aggiunto un event listener alla variabile nuovo elemento
      newSquareEl.addEventListener("click", function() {
    
        // al click del quadrato
        // aggiungo la classe light blue per cambiare il background color
        newSquareEl.classList.add("light-blue");
        // stampo in console l'inner text del quadrato
        console.log(newSquareEl.innerText);
  
      });

      // cambio il display di grid container da none a flex
      gridContainerEl.style.display = "flex";
      
      // appendo i nuovi elementi a grid container
      gridContainerEl.append(newSquareEl);

    }
  
    // se il valore dell'elemento diffulty selector è = medium
  } else if (difficutlySelectorEl.value == "medium") {

    // faccio un ciclo for che va da 1 a 81
    for (let i = 1; i <= 81; i++) {
    
      // assegno una variabile nuovo elemento alla funzione createSquare con parametri i e classe square-medium
      let newSquareEl = createSquare(i, "square-medium");
    
      // aggiunto un event listener alla variabile nuovo elemento
      newSquareEl.addEventListener("click", function() {
    
        // al click del quadrato
        // aggiungo la classe light blue per cambiare il background color
        newSquareEl.classList.add("light-blue");
        // stampo in console l'inner text del quadrato
        console.log(newSquareEl.innerText);
    
      });
      
      // cambio il display di grid container da none a flex
      gridContainerEl.style.display = "flex";

      // appendo i nuovi elementi a grid container
      gridContainerEl.append(newSquareEl);
    }

    // se il valore dell'elemento diffulty selector è = hard
  } else if (difficutlySelectorEl.value == "hard") {

    // faccio un ciclo for che va da 1 a 49
    for (let i = 1; i <= 49; i++) {
    
      // assegno una variabile nuovo elemento alla funzione createSquare con parametri i e classe square-hard
      let newSquareEl = createSquare(i, "square-hard");
    
      // aggiunto un event listener alla variabile nuovo elemento
      newSquareEl.addEventListener("click", function() {
    
        // al click del quadrato
        // aggiungo la classe light blue per cambiare il background color
        newSquareEl.classList.add("light-blue");
        // stampo in console l'inner text del quadrato
        console.log(newSquareEl.innerText);
    
      });

      // cambio il display di grid container da none a flex
      gridContainerEl.style.display = "flex";
        
      // appendo i nuovi elementi a grid container
      gridContainerEl.append(newSquareEl);
    }
  }
});



// _________________________________________________________________________________

// FUNZIONI

/**
 * Funzione che genera un elemento "div", gli assegna una classe da inserire come parametro "addClass" e inserisce al suo interno una stringa = al parametro "text" assegnato alla funzione
 * @param {any} text
 * @returns {any}
 */
function createSquare(text, addClass) {

  // creare un elemento
  // dargli una classe
  let newElement = document.createElement('div');
  newElement.classList.add(addClass);

  newElement.innerText = text;

  return newElement;
}

/**
 * Funzione che genera un numero random compreso tra i due parametri min e max
 * @param {any} min
 * @param {any} max
 * @returns {any}
 */
function randomNumberBetween(min, max) {

  // genero un numero random
  let random = Math.floor(Math.random() * (max - min + 1) + min)

  // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
  return random;

};




/**
 * Funzione che genera un array (di lunghezza "count") di numeri casuali, tutti diversi tra loro e con valori tra 1 e "max"
 * @param {any} count
 * @param {any} max
 * @returns {any}
 */
function generateRandomNumbersArray(count, max) {
  const randomNumberList = [];
  while (randomNumberList.length < count) {
    const newRandomNumber = randomNumberBetween(1, max);
    if (randomNumberList.indexOf(newRandomNumber) == -1) {
      randomNumberList.push(newRandomNumber);
    }
  }
  return randomNumberList;
};

console.log(generateRandomNumbersArray(16, 100));



