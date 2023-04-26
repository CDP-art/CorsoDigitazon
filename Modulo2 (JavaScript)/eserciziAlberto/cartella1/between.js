// scrivere una funzione chiamata between che
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi



//creare una funzione che prenda un array come parametro di ingresso
//creare una variabile con valore 0 che ci servirà in seguito
//creare un ciclo for che entri nell'array in ingresso
//creare un secondo ciclo che identifichi il secondo valore
//incrementare la variabile creata dall'indice 0 dell'array fino al secondo indice -1
//stampare in un array la varibile

 // ====> [2,3,4,5,6,7,8,9]

 

let between = (a, b) => {
    let array = []
        for(let i = a +1; i < b; i++){
            // console.log(i);
            array.push(i);
    }
        return array
    }
    

// console.log(mid(array));
console.log(between(-1, 15))