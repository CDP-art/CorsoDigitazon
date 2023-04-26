let x= {}, y = 5,z = 6
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x);

//funzione che dato un array lo svuota

//creare un array da passargli
//creare funzione empty che prende l'array creato come parametro(a)
//ritornare a come array vuoto
//stampa funzione



let array = [1,2,3,4]

function empty(a){
    a = []
    console.log(a);
};

empty(array);

console.log("--------------------");


//dato un array, non devo stampare doppioni

//creare un array
//creare una funzione noDoppioni che accetti l'array (a)
//inserire l'array in un Set()
//stampare il set

let array2 = [1,2,3,4,4]

function noDoppioni(a){
    let set = new Set(a)
    return set
}

console.log(noDoppioni(array2));

console.log("--------------------");

//stampare un array al contraio e stampare solamente quelli con indici dispari

//creare array
//se abbiamo un array.length pari aggiungiamo 1 torniamo indietro di 2
//se abbiamo un array.length, torniamo indietro di 2

let array3 = [7,4,5,1,0]


//sommare tutti i numeri di una matrice 

function sum(matrice){
    let sum = 0
    for(let i = 0; i < matrice.length; i ++){
        for(let j = 0; j <matrice[i].length; j++){
            sum += matrice[i][j];
         }
    }   return sum
}

console.log(sum([[1,2], [3,4]]));

console.log("--------------------");
 


//GANDALF
//GNAFADL

//mi creo una variabile risultato = ""
//parto ad iterare da 1 e salto 1. salvo in r
//parto da 0 e sato 1. salvo in r2.
//stampare r1+r2

let stringa = "GANDALF"

function alterna(s){
    let ris = ""
    let ris2 = ""
    for(let i = 1; i < s.length; i+=2){
        ris = s[i]
        console.log(ris);
    }

    for(let j = 0; j < s.lenght; j++){
        console.log();
    }
}

console.log(alterna(stringa));

console.log("--------------------");


//scrivere funzione che stampa tutti gli elementi degli array

function elementi(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
elementi([1,2,3,4,5]);

console.log("--------------------");

let a = [1,2,3,4,5]

a.forEach(function(el){
    console.log(el);
})

console.log("--------------------");

function tri(n) {
    for (let i = 1; i < 2*n; i++) {
        let a = ''
        for (let j = 0; j < n-Math.abs(n - i) ; j++) {
            a += 'x'
        }
        console.log(a)
    }
}
tri(4)

console.log("--------------------");

//inverti array

let a1 = [1,2,3,4,5]

let i = a1.length -1;
while(i >= 0){
    let risultato = [i--]
    console.log(i);
}

console.log();


let people = {
    name:"mario",
    lastname:"rossi"
}

console.log(Object.keys(people))