//data una stringa in ingresso la funzione deve calcolare la sottostringa più lunga
//es. abba 1abba1 c
//ritornare true se palindroma

//PSEUDOCODICE
//creare una stringa
//creare una funzione che prende una stringa in ingresso come parametro
//creare una stringa nuova all'interno della funzione dove memorizza la stringa invertita
//creare un ciclo for al contrario in modo tale da iniziare dall'ultima lettera e tornare indietro
//creare una seconda funzione dove ritorna true se la stringa è palindroma

let word = "ciao";

let invertiStringa = (stringa) => {
  let risultato = "";
  for (let i = stringa.length - 1; i >= 0; i--) {
    risultato += stringa[i];
  }
  return risultato;
};

let palindroma = (stringa) => {
  return stringa == invertiStringa(stringa);
};

console.log(palindroma(word));

console.log("-----------------------");

//scrivere una funzione data in ingresso di array e un numero, ritorni gli inidici dei due numeri la cui somma fa quel numero

//es. [10,20,30], 50 => [1,2] perchè la somma dell'indice 1 (20) e dell'indice 2 (30) come risultato da 50 (numero inserito)

//PSEUDOCODICE
//creare una funzione che prende in ingresso un array e un numero
//creare array nuovo dove inserire gli indici
//creare ciclo for che iteri l'array e prende il singolo indice
//creare un secondo ciclo che va a prendere il secondo indice dell'array da sommare
//se i1 + i2 = numeroPassato, allora ritornami un arrai di i1 e i2
//ritornami l'array

let sommaArray = (array, num) => {
  let indiciArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = +1; j < array.length; j++) {
      if (array[i] + array[j] == num) {
        return [array[i], array[j]]
      }
    }
  }
  return indiciArray;
};

let newArray = [10,20,30];
let number = 50;

console.log(sommaArray(newArray, number));

console.log("-----------------------");

//scrivere una funzione che prenda in ingresso una stringa che contiene un numero in notazione romana
//tradurlo in notazione araba

//creare una funzione che prende una stringa in ingresso
//