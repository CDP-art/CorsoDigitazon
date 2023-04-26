/*
    1 - Find and replace
Scrivere una funzione che riceva in ingresso tre stringhe:
● la prima sara’ un testo
● la seconda sara’ una parola che andra’ cercata nel testo
● la terza sara’ la parola da sostituire al posto della seconda
La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
replace di una parola in un testo.
Si assuma che:
● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
non ci saranno spazi
● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
l’algoritmo
● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
caratteri
Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
La funzione deve ritornare la nuova stringa aggiornata.
*/

//scrivere una funzione findAndReplace che riceve tre stringhe in ingresso (text, word1, word2)
//es. text = "ciao mario", word1 (da cercare) = "mario", word2 (da sostituire) = "luigi ==> nuovo text = "ciao luigi"
//trasformo con split text in un array, in modo tale che possa iterare nell'array e prendere ogni singolo indice (parola)
//se text[i] è uguale a word1, allora sostituisci con word2
//ritrasformo l'array in stringa e stampo la nuova stringa(sarà il vecchio txt con la nuova word2)

let findAndReplace = (text, word1, word2) =>{
    let arrayStringa = text.split(" ");
            for (let i = 0; i < arrayStringa.length; i++) {
                if (arrayStringa[i] === word1) arrayStringa[i] = word2
            }

            return arrayStringa.join(" ");
}



console.log(findAndReplace("Nel mezzo del cammin di mia vita", "mia", "nostra"));










/*
    2 - Find and update
Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:


[
    {
        "maggiorenne": null,
        "type" : "boolean"
    },

    {
        "nome" : null,
        "type" : "string"
    },
    {
        "cognome" : "rossi",
        "type" : "string"
    }, ...
]

sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
regole:
● se il type e’ “boolean” deve aggiornare usando false
● se il type e’ “string” deve aggiornare usando stringa vuota
● se il type e’ “number” deve aggiornare usando 0
● se il type e’ “array” deve aggiornare usando array vuoto
● se il type e’ “object” deve aggiornare usando oggetto vuoto
Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.
*/

//creare array people di oggetti come in esempio
//creare una funzione update che prende in input l'oggetto
//ciclare all'interno dell'array per prendere ogni singolo oggetto
//iterare in ogni singolo oggetto per prendere ogni valore degli oggetti visto che ci interessa il valore null. object.values
//dove valore null, bisogna cambiare il type
//ritornare l'array d'ingresso

let people =  [

    {
        "maggiorenne": null,
        "type" : "boolean"
    },

    {
        "nome" : null,
        "type" : "string"
    },
    {
        "cognome" : "rossi",
        "type" : "string"
    }
];

// console.log(people[0]);

function modificaObj (array){
    array.forEach((i) => {
                Object.values(i).forEach((v) => {
                    if (v == null) {
                        if (i.type == "boolean") i.type = false
                        if (i.type == "string") i.type = ""
                        if (i.type == "number") i.type = 0
                        if (i.type == "object") i.type = {}
                        if (i.type == "array") i.type = []
                    }
                })
            })
            return array
}

console.log(modificaObj(people))
    