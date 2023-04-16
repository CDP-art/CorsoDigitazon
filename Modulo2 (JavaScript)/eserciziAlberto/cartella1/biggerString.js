// scrivere una funzione chiamata biggerString che
// date due stringhe in ingresso
// ritorni la piu' lunga

//creare una funzione che prenda in ingresso due stringhe
//se stringa1 è maggiore di stringa2, allora stampa stringa1, altrimenti stampa stringa2

function biggerString(a, b) {
  if (a.length > b.length) return `La stringa più lunga è ${a}`;
  else if (a.length == b.length) return "Le due stringhe sono uguali";
  else return `La stringa più lunga è ${b}`;
}

console.log(biggerString("francesca", "francesca"));
