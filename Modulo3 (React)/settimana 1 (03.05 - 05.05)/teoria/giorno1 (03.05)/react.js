//SPREAD OPERATOR

/*
    Scrivere una funzione AND che si comporti come l'and nei booleani (&&) e accetti un numero qualsiasi di parametri
    AND(true, false)
    AND(true)
    AND(false)
    AND(false, true, true, true, false)
*/

//scrivere una funzione AND
//l'operatore && funziona che ritorna true solo ed esclusivamente se tutti i parametri sono true.
//Se anche uno solamente è false, allora ritorna false.
//quindi se almeno un parametro false => return false
//visto che non sappiamo quanti parametri riceverà la funzione, fra le tonde () posso inserire (...parametro). In questo caso la funzione prende il/i parametri in ingresso e li trasforma in array

// function AND(...p) {
//     let result = []
//     p.forEach(el => {
//         result = result && el
//     })
//     return result
// }

// console.log(AND(true, false));



function and(...bool) {
    for (let i = 0; i < bool.length; i++) {
        if (!bool[i]) {
            return bool[i]
        }
    }
    return true
}


//DESTRUCTORING
/*
    Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo i valori relativi aLle seguenti chiavi:
 * "chiave1"
 * "chiave2"
a prescindere da quante ce ne siano nell'oggetto.
Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare lo spread operator
*/

// scrivere una funzione che prende in ingresso diversi oggetti (...obj)
//deve ritorare solamente i valori di determinate chiavi

function keys(...obj) {
    return `le chiavi degli oggetti sono ${Object.values(obj)}`
}

let oggetto = {
    name: "mario",
    surname: "rossi"
}

let oggetto2 = {
    name: "luigi",
    surname: "verdi"
}


console.log(Object.values(oggetto));
console.log(keys(oggetto, oggetto2));


function print({ chiave1, chiave2 }) {
    console.log(chiave1, chiave2)
}

function print2(obj) {
    let { chiave1, chiave2 } = obj
    console.log(chiave1, chiave2)
}

print({ chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4 })
print2({ chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4 })



import { MyQualcosa } from './qualcosa'


let a = 0
function qualcosa(a, b, c) {

}