/*
    Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
    “pazza”.
    Una stringa e’ “pazza” se:
    ● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
    ● finisce con “?!?”
    ● contiene la stringa “Cthulhu”
    ● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
    ● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”

    Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la
    stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
    ● Church
    ● mare

    Esempi di stringhe pazze:
    ● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
    ● Andare a rimirare

    Esempi di stringhe non pazze:
    ● Lui e’ pazzo.
    ● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
    amano ~
    ● ~ Papa’, come sta Church? ~
*/

//creare una funzione sringaPazza che prenda in ingresso una stringa s
//prendo la frase in ingresso e la trasformo tutta in minuscolo per evitare problemi 
//trasformo in array la stringa s in modo tale che posso prendere ogni singolo indice e confrontarlo con i requisiti
//se gli indici del nuovo array hanno uno dei requisiti, allora la stringa è pazza
//se hanno "church" o "mare", è comunque pazza
//altrimenti no
//trasforma l'array in stringa
//stampa stringa

let stringaPazza = s => {

    let sArray = s.split(" ");

    let ultimoIndice = sArray[sArray.length - 1]
    let primoIndice = sArray[0]

    for (let i = 0; i < sArray.length; i++) {

        if (
            (sArray[i] === "lui" && sArray[i] === "lei" && sArray[i] === "ella" && sArray[i] === "egli")
            || (primoIndice === "," && primoIndice === "." && primoIndice === "!" &&
                primoIndice === "?" && primoIndice === ":" && primoIndice === ";" &&
                primoIndice === "-" && primoIndice === "~")
            || (primoIndice && ultimoIndice === "are") && (primoIndice && ultimoIndice === "ire") && (primoIndice && ultimoIndice === "ere")
            || ultimoIndice === "?!?"
        ) {

            return `Questa stringa è pazza: ${s}`;

        } else if (sArray[i] === "Church" && sArray[i] === "mare") {

            return `Questa stringa NON è pazza: ${s}`;
        } else {

            return `Questa stringa NON è pazza: ${s}`;
        }
    }
}

console.log(stringaPazza("~ Papa’, come sta Church? ~"));

//Non so se funziona correttamente. Ci ho messo due ore solamente per questo e quando ho visto che questa frase mi usciva il risultato corretto, sono passato subito al secondo esercizio