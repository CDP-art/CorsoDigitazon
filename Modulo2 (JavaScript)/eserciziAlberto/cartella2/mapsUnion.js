// scrivere una funzione chiamata mapsUnion che
// date due mappe (in JS chiamate anche oggetti) in ingresso
// ritorni una mappa (o oggetto) che contenga tutte le chiavi e
// tutti i valori delle due mappe
// in caso di chiavi duplicate deve rimanere il valore della
// seconda mappa (o oggetto)

// e' una funzione che volendo si puo' scrivere in una riga sola

function mapsUnion(m1, m2) {
  let newObj = { ...m1, ...m2 };
  return newObj;
}

console.log(mapsUnion({ a: "1", b: "2" }, { c: 3, a: "4" }));
