// scrivere una funzione chiamata isHomogeneous che
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

//creare una funzione chiamata isHomogeneous
//prende in ingresso un array chiamato array
//fare un ciclo per ciclare l'array
//tanti if di typeof?
//se tutti array[i] typeoff == tutti i valori ---- allora true 
//altrimenti false

let arr = [1, "ciao", 3]

function isHomogeneous(arr) {
    if (arr.length === 0) {
        return true; // L'array vuoto è considerato omogeneo
    }

    //creo una variabile per verificare di che tipo è il primo indice (0) dell'array
    //Se l'indice 0 è un numero, allora la varibile firstType sarà un numero.
    //Questa cosa vale per tutti i tipi
    const firstType = typeof arr[0];

    //faccio un ciclo for partendo direttamente dall'indice successivo visto che l'indice 0 lo abbiamo
    //gà controllato precedentemente
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
            return false; // L'array contiene elementi di tipi diversi
        }
    }

    return true; // Tutti gli elementi dell'array hanno lo stesso tipo
}


console.log(isHomogeneous(arr));