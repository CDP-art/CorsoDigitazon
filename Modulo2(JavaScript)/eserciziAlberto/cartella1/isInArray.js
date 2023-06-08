// scrivere una funzione chiamata isInArray che
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

function isInArray(arr, n) {
    return arr.includes(n)
}

console.log(isInArray([1, 2, 32], 32));

//Altro modo

function isInArray2(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return true
    }
    return false
}

console.log(isInArray2([1, 2, 32], 40));

//Altro modo

function isInArray3(arr, n) {
    arr.forEach(el => {
        if (el === n) return true
    })
    return false
}

console.log(isInArray2([1, 2, 32], 2));

//FATTO