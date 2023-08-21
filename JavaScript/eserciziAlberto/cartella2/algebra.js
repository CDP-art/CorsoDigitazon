// scrivere una funzione chiamata algebra che
// dato un array di interi
// ritorni il prodotto degli elementi di indice pari a cui vengono
// sottratti tutti gli elementi di indice dispari

// ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3


//devo prendere l'array
//ciclarci dentro
//devo prendere quello con l'indice pari %2==0
//sommare indici dispari !%2==0
//numero indice pari - somma indici dispari

function algebra(arr) {
    let ProdottoPari = 1
    let sommaDispari = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            ProdottoPari = ProdottoPari * arr[i]
        } else {
            sommaDispari = sommaDispari + arr[i]
        }
    }

    console.log(ProdottoPari - sommaDispari)
}

algebra([1, 2, 3, 4])

//FATTO

