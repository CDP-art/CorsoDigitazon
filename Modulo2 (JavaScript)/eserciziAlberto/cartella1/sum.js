// scrivere una funzione chiamata sum che
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum([1, 2, 3]));

//FATTO
