// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore

function largestSwap(n) {
    let nString = n.toString()
    let arrInv = []

    for (let i = nString.length - 1; i >= 0; i--) {
        arrInv.push(nString[i]);
    }

    let stringInv = arrInv.join("");
    let numInv = parseInt(stringInv, 10);

    if (n > numInv) {
        return true
    } else {
        return false
    }
}

largestSwap(27)

//FATTO