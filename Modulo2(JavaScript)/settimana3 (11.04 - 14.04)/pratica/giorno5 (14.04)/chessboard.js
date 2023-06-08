// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati

//creazione di una funzione denominata chessboard che prende in ingresso un numero
//il numero iserito deve corrispondere al numero dell'altezza della scacchiera
//Cosa è che mi stampa in altezza le stringhe? (array con ciclo for?)
//Creare array vuoto che parte da 0 fino al numero inserito da noi e stamparlo con il ciclo for per visualizzarlo in altezza e non in una sola riga
//

// function chessboard(n) {
//   let a = [];
//   for (let i = 0; i < a.length; i++) {
//     i += n;
//     i.push(a);
//   }
//   return a;
// }

// console.log(chessboard(5));

// stampare una scacchiera

// per stampare una riga:
// ricevo in ingresso l, che e' la lunghezza della riga
// inizio con il cancelletto e lo memorizzo in RIGA
// ULTIMO e' true
// ciclo da 0 a l escluso
//   metto dentro RIGA un cerchio se ULTIMO e' true
//   oppure metto dentro RIGA un cancelletto se ULTIMO e' false
//   inverto ULTIMO
// ho finito

function row(l, toggle) {
  let riga = "";
  for (let i = 0; i < l; i++) {
    if (toggle) {
      riga += "o";
    } else {
      riga += "#";
    }
    toggle = !toggle;
  }
  return riga;
}

// disegnare la scacchiera
// utilizzo row chiamandolo l volte
// detto in altro modo: ciclo l volte e ad ogni iterazione chiamo row passandogli l e stampo il risultato

function chessboard(l) {
  let toggle = false;
  for (let i = 0; i < l; i++) {
    console.log(row(l, toggle));
    toggle = !toggle;
  }
}

chessboard(6);
