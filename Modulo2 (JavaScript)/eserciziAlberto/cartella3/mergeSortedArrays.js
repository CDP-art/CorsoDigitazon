// scrivere una funzione chiamata mergeSortedArrays che 
// dati due array ordinati in ingresso
// ritorni un unico array ordinato

// non si puo' usare il metodo sort

// ad esempio per [1,2,3] e [4,5] ritorna [1,2,3,4,5]
// ad esempio per [5,9] e [1,6,7] ritorna [1,5,6,7,9]

//creare la funzione
//creare un array vuoto che servirà come risultato finale
//creare un ciclo che ha due indici per iterare nei due array in ingresso
//se l'indice del primo è minore uguale, allora push nell'array vuoto e incremento l'indice
//sennò push il secondo idice e incremento il secondo indice
function mergeSortedArrays(arr1, arr2) {
    let result = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] <= arr2[j] || arr2[j] == undefined) {           // ==> ALLORA BISOGNA SPECIFICARLO!!
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    return result

}

//RITORNA UNDEFINED


console.log(mergeSortedArrays([1, 63, 700], [58, 92]));