//scrivere una funzione che prende in ingresso una stringa e ritorna il numero di occorrenze(mappa o oggetto) di ogni singolo carattere della stringa

//creo una stringa qualsiasi
//creo una funzione che prende una stringa
//creazione del ciclo per verificare la lunghezza della stringa
//creo una mappa
//nel ciclo creo un if(se mappa.has quella chiave)
//se true incremento il valore della chiave
//else (metto come chiave il carattere attuale e come valore 1)
//restituire mappa

let word = "";

function fn(stringa) {
  const m = new Map();
  for (let i = 0; i < stringa.length; i++) {
    // console.log(stringa[i]);
    if (m.has(stringa[i])) {
      m.set(stringa[i], m.get(stringa[i]) + 1);
    } else {
      m.set(stringa[i], 1);
    }
  }
  return m;
}

// fn(word);
console.log(fn(word));
console.log("-------------");

//scrivere una funzione e data in ingresso una stringa rimuove tutte i dati duplicati(set)

//creare un stringa
//creare una funzione che accetta una stringa
//creare una stringa vuota che ritorni il risultato
//creare un ciclo che itera la stringa
//indexOf per capire se il carattere è contenuto dentro il risultato(index of ritorna -1 se il carattere non è presente)
//se false concateno il risultato con il carettere
//ritorno risultato

let word2 = "pallone";
console.log(word2);

function fn2(stringa) {
  let result = "";
  for (let i = 0; i < stringa.length; i++) {
    console.log(stringa[i]);
    if (result.indexOf(stringa[i]) - 1) {
    } else result + stringa[i];
  }
}
fn2(word2);
// console.log(fn2(word2));

// Scrivere una funzione che data una stringa in ingresso, rimuove tutti i dati duplicati

//creo una stringa
//creare una funzione che accetta la stringa creata
//creare un set vuoto
//creare un ciclo che itera la stringa
//(inserire direttamente la stringa dentro al set?)
//ritornare set

let word3 = "claudio";

function fn3(stringa) {
  let set = new Set(stringa);
  console.log(set);
}

// console.log(fn3(word3));
fn3(word3);
