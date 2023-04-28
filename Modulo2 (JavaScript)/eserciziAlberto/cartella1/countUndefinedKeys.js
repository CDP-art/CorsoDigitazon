// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

const obj = {1:"flour", 2:"sugar", 3:"", 4:"salt", 5:undefined, 6:"0", 7:null}

function countUndefinedKeys(obj) {
    let count = 0
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let key = Object.keys(obj)[i]
        if (obj[key] == null) {
            count++
        }
    }
return count
}

console.log(countUndefinedKeys(obj))