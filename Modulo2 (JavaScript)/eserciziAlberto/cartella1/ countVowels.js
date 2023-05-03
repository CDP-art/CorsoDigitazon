// scrivere una funzione chiamata countVowels che
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

//creare una funzione
//creare un contatore
//iterare nella stringa
//quando trova le vocali, aggiornare contatore

function countVowels(string) {

    let nVowels = 0
    for (let i = 0; i < string.length; i++) {
        let index = string[i];
        if (index == "a" || index == "A" || index == "e" || index == "E" || index == "I" || index == "i" || index == "o" || index == "O" || index == "u" || index == "U") {
            nVowels++
        }
    }

    return `In questa stringa "${string}" ci sono ${nVowels} vocali`
}

console.log(countVowels("Eccomi, sto arrivando"));

//FATTO

