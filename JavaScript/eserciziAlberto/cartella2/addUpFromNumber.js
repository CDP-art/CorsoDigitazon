// scrivere una funzione chiamata addUpFromNumber che
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato

// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10


//creare la funzione che prende un numero in ingresso
//creare un array vuoto.
//fare un ciclo dell'array dove la lunghezza è il numero passato in ingresso



function addUpFromNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

addUpFromNumber(8)