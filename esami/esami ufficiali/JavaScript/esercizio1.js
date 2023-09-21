//Inizio della prova 28.04 h14.00

/*
    Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
    richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
    con i relativi importi totali.
    Segue un esempio di questa stringa:
`
    Cancelleria
    500
    40
    60

    Servizi igienici
    1000
    1
    200

    Vendite
    0
`
    Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
    in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
    i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
    In questo esempio andrebbe ritornato un risultato di questo tipo:
    
    [
        {
            "reparto": "Servizi igienici",
            "spesa" : "1201"
        },
        {
            "reparto": "vendite",
            "spesa" : 0
        }
    ]
*/

//scrivere una funzione spese che prende una stringa in ingresso
//trasformare la stringa in array da poter prendere ogni singolo indice
//creare una variabile maggiore inizializzata 0 che memorizzi il valore maggiore
//creare una variabile minore inizializzata 0 che memorizzi il valore minore
//creare una varibile stringa vuota che memorizzi il nome maggiore
//creare una varibile stringa vuota che memorizzi il nome minore
//creare una varibile sum inizializzata 0 che sommi i prezzi
//devo fare un ciclo per entrare nell'array
//quando trovo un "numero", lo devo convertire in numero
//quindi li sommo tra di loro += e aggiorno sum
//assegno sum a maggiore
//se sum è maggiore di maggiore allora min = maggiore
//altrimenti sum = minore


let string = `
    Cancelleria
    500
    40
    60

    Servizi igienici
    1000
    1
    200

    Vendite
    0
`

let piuCostoso = str => {
    let arrayS = str.split("\n"); //\n prende ogni singola riga della stringa
    let prezzoMag = 0
    let prezzoMin = 0
    let repartoMag = ""
    let repartoMin = ""
    let totSpese = 0

    for (let i = 0; i < arrayS.length; i++) {
        // console.log(arrayS[i]);
        if (arrayS[i] == Number(arrayS[i])) { //ho visto che tramuta una stringa in numero
            totSpese += arrayS[i]
        }
    }
    console.log(totSpese);
}

piuCostoso(string)

//Ho avuto poco tempo per fare questo esercizio. Probabilmente ero in grado di farlo, ma ho avuto un'ora e per è stato poco