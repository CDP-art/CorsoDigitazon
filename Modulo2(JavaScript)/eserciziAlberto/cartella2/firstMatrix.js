//creare una funzione firstMatrix che prende in ingresso un array e un numero n
//Il numero n corrisponde a quante volte bisogna stampare l'array
//crerare un array matrix vuoto che si andrà a riempire con gli array in ingresso
//ciclare all'interno dell'array

// ad esempio con [1,2,3] e 3 ritorna [[1,2,3],[1,2,3],[1,2,3]]
// ad esempio con [1,2] e 1 ritorna [1,2]
// ad esempio con [1,2,3,4] e 0 ritorna []


//creare una funzione che prende in ingresso un array e un numero n
//n sarà la quantità di volte che bisogna stampare l'array
//creare un array vuoto che diveterà la matrice
//creare un ciclo for dove la lunghezza di permanenza nel ciclo sarà n
//pushare l'array all'interno della matrice
//stampare matrice

function firstMatrix(arr, n){
    let matrix = [];
    for(let i = 0; i < n; i++){
        matrix.push(arr)
    }
    return matrix
}

let a = [1,2,3,4,5,6]
console.log(firstMatrix(a, 8));