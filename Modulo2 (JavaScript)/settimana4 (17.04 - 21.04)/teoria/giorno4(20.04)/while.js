/*
    Il while si differenzia dal for perché non sai a priori di quanto viene eseguito. Il while si può identificare con “fin tanto che…”. , “mentre la condizione è vera”.

A differenza del for, la variabile che utilizziamo come indice, la dichiariamo esternamente. Quindi avremo

Let i = 0; 						==> enter Point (punto d’ingresso, inizializzazione dell’indice)

While (i <= 10){				==> condizione di permanenza del ciclo (fin tanto che l’istruzione dentro alle                                 () è vera, si esegue l’istruzione facendo un ciclo
Console.log(i)
i++								==> modifica dell’indice.
}
 
Si esce dal ciclo quando la condizione dentro alle parentesi è false.
*/

// let i = 1;

// while( i <= 5 ) {
//   console.log(i)
//   let j = 1

//   while( j <= 3 ) {
//     console.log('ciao')
//     j++
//   }

//   i++
// }

// i ...




/*
Ex 1

Utilizzando un apposita strategia e utilizzando il ciclo WHILE, stampare i numeri da 20 a 15 (scalando) omettendo il numero 19
*/

// let c = 20

// while( c >= 15){
//     if(c != 19)console.log(c);
//     c--
// }

/*


Ex 2

Creare un array di 5 parole.
Iterare su questo array in 2 modi.
PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.

DOPO con un foreach, per stampare tutte le parole dell'array in ordine
*/



// let a = ["ciao", "mario", "come", "stai", "?"]

// let i = a.length -1;                //inizializzazione
// while(i >= 0){
//     console.log(a[i].toUpperCase());
//     i--
// }

// console.log("------------");

// a.forEach(function(j){
//     console.log(j);
// })



/*
    creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:

- proprietà label, indica il nome del linguaggio
- proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
- un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE

chiamare il metodo printTags per mostrare i dati in console
*/

//creare un oggetto chiamato language
//proprietà label : "CSS"
//proprietà tags : ["stile a cascata", "frontend", "layout"]
//creare una funzione dentro all'oggetto chiamata printTags che prende come parametro d'ingresso l'array tags.
//itero nell'array con il ciclo while e stampo l'array
//stampare array 

let language = {
    label:"css",
    tags: ["stile a cascata", "frontend", "layout"],
    printTags : function() {
        console.log(`${this.label} caratteristiche: `);
        let i = 0
        while(i < this.tags.length){
            console.log(this.tags[i]);
            i++
        }
    }
}

language.printTags();


