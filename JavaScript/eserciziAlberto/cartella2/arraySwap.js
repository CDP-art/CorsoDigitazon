// scrivere una funzione chiamata arraySwap che 
// dato un array di interi
// ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
// e il valore alla posizione i + 1 sono invertiti di posizione

// ad esempio: con [5, 6] ritornerebbe [6, 5]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
// ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
// essere scambiato con niente siccome l'array e' terminato

//devo creare un array newArr [] che sara il nuovo array. Spread operator?
//devo ciclare dentro all'array
//devo capire quanto è lungo l'array perchè se disparo, l'ultimo elemento non lo devo calcolare
//partire dall' i 0
//farlo finire a .length -1
//ma incrementando di 2


function arraySwap(array) {
    let newArr = [...array]  //clone array

    for (let i = 0; i < array.length - 1; i += 2) {
        const element = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = element;
    }

    console.log(newArr);
}

arraySwap([5, 6])

//FATTO

