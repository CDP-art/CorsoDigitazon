// scrivere una funzione chiamata even che
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

//creare una funzione
//creare un array vuoto che farà da risultato
//ciclare nell'array
//se l'indice è %2 === 0 allora push nell'array
//ritornare l'array risultato

function even(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(even([1, 2, 3, 4]));

//FATTO