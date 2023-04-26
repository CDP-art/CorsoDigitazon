function fn1(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    return;
  }

  return x + y;
}

const r1 = fn1(10, 4);
console.log(r1);
console.log(fn1("ciao", " js"));

console.log("---------------------------");

function fn2(a /* array */) {
  if (!Array.isArray(a)) {
    console.log("Errore! Il dato non è un array");
    return;
  }

  for (let i = 0; i < a.length; i++) {
    console.log("iterazione " + i + ": " + a[i]);
  }
}

fn2(10);
fn2([10, 20, 30]);
fn2(["ciao", "js", 10, 30]);

console.log("---------------------------");

function fn3() {
  return [10, 20, 30, 40];
}

const a1 = fn3();
console.log(a1[1]);

console.log("---------------------------");

let id = 1;

function makePerson(n, ls, age) {
  return {
    id: id++,
    name: n,
    lastname: ls,
    age: age,
  };
}

const people = [
  makePerson("mario", "rossi", 18),
  makePerson("luigi", "verdi", 19),
  makePerson("claudio", "de paolis", 20),
];

people.forEach(function (el) {
  console.log(
    `Numero di matricola: ${el.id}, Nome: ${el.name}, Cognome: ${el.lastname}, età: ${el.age}`
  );
});

function getPersonById(_id, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == _id) return arr[i];
  }
}

console.log(getPersonById(1, people));

console.log("---------------------------");

/*
Ex 1

creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2

chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
Per chi riesce: stampare il valore prodotto in upper case
*/

function getStr(arr) {
  return arr[2].toUpperCase();
}

let arrString = ["ciao", "mario", "come", "stai", "?"];

console.log(getStr(arrString));

console.log("---------------------------");

/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
*/

function makeObj(s, n) {
  return {
    label: s,
    rate: n,
  };
}

console.log(makeObj("mario", 10));
console.log(makeObj("luigi", 8));

/*
    creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo del primo array, e il secondo che rappresenta il numero più grande del primo array.
    Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo con un apposito messaggio
*/

let array = [1, 2, 3, 4, 5];

function getMaxMinAsArray(a) {
  let max = 0;
  let min = 0;
  let risult = [];
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}

getMaxMinAsArray(array);
