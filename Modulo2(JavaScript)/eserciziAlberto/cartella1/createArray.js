// scrivere una funzione chiamata createArray che
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []

//creare una funzione 
//creare un array vuoto
//fare un ciclo for dove l'indice è minore di n
//pushare nell'array n  
//ritornare array

function createArray(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(n)
    }
    return array
}

console.log(createArray(24));

//FATTO