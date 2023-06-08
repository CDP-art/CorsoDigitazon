/*
    Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al quale il target e' trovato. Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine
*/

// es nums = [1,3,5,6], target = 5 ==> 2
//nums = [1,3,5,6], target = 2 ==> 1

//creare una funzione che prenda in ingresso un array e un numero n
//ciclare dentro all'array per visualizzare tutti gli indici dell'array
//se n == array[i] => ritorna array[i]
//se array[i] > n => ritorna array[i]

// let array = [1,2,3,4,5]

// let indiceArray = (arr, n) =>{
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === n || arr[i] > n){
//             return i
//         }
//     }
// };

// console.log(indiceArray(array, 6))

//soluzione binaria
//divide l'array a metà.
//se la consegna sta nella prima metà, divide ulteriormente a metà fino a che non trova la risposta. Sennò va nella seconda metà e divide anch'essa a metà fino a che non trova la soluzione

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let n = 3

//soluzione con il for
for (let i = 0; i < array2.length; i++) {
    if (array2[i] === n) console.log(i);
}


//soluzione binaria
// Rifare 1'esercizio utilizzando la ricerca binaria
//Pseudocodice
// creo END che sarà l'indice dell'ultimo elemento dell'array
// creo HALF che sarà end diviso 2
//controllare se n è uguale ad half ritorno indice di n 
//se maggiore o minore devo prima di tutto glassegnare END 
//creo START
// se maggiore, start sarà half e end sarà lo stesso 
//se minore start sard indice 0 ed end sarà il primo half
// half verrà ricalcolato con il novo end / 2


function binarySearch(arr, n) {
    let end = arr.length - 1
    //let half = end/2
    let start = 0
    while (start <= end) {
        console.log(start, end);
        let half = Math.floor((end + start) / 2)
        if (n == arr[half]) {
            return half
        }
        if (n > arr[half]) {
            start = half + 1 //arrotondando per difetto si deve aggiustare il caso in cui ci siano solo due elementi.
        } else {
            end = half - 1
        }
        return -1
    }
}
console.log(binarySearch([1, 2, 3, 5, 6], 1));
// floor per difetto
// round per eccesso dal .5 in poi. Per difetto dal dal .1 al .4



