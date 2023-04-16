// scrivere una funzione chiamata union che
// dati due array di interi
// ritorni un array che rappresenti l'unione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna [1,2,3,4,5,6]

//creare una funzione che accetti due array in ingresso
//creare un nuovo array vuoto per memorizzare i due array esterni
//creare un ciclo che iteri l'array 1
//creare un ciclo che iteri l'array 2
//pushare i valori dei due array all'interno dell'array vuoto
//stampare nuovo array

function union(arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    array.push(arr1[i]);
    array.push(arr2[i]);
  }
  return array;
}

console.log(union([1, 2, 3], [4, 5, 6]));
