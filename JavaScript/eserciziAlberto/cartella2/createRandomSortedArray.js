// scrivere una funzione chiamata createRandomSortedArray che 
// dato un numero n in ingresso
// ritorni un array ordinato in
// modo crescente lungo n che
// contiene numeri casuali compresi tra 0 e 1,
// estremi esclusi

// ad esempio per 3 puo' ritornare
// [0.29576384904091846, 0.8219993580808898, 0.99213923917851]
// "puo'" perche' i numeri devono essere casuali
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []


function createRandomSortedArray(n) {
    let array = []
    if (n <= 0) {
        console.log(array);
        return array
    }
    for (let i = 0; i <= n; i++) {
        array.push(Math.random());
        array.sort()
    }
    console.log(array);
    return array
}

createRandomSortedArray(10)

//?