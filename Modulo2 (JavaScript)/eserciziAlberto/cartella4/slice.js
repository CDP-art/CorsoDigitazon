// scrivere una funzione chiamata slice che 
// dato un array di interi e un intero
// ritorni un array formato da gruppi di sottoarray

// ad esempio con [1,2,3,4,5] e 2 ritorna [[1,2],[3,4],[5]] 

function slice(arr, size) {
    let result = []
    arr.forEach((value, index) => {
        let newArray = arr.slice(0, size + 1);
        result.push(newArray)
        arr.splice(0, size)

    });
    return result
}

console.log(slice([1, 2, 3, 4, 5], 2));

//ci sono vicino