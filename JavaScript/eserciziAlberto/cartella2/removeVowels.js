// scrivere una funzione chiamata removeVowels che 
// data una stringa in ingresso
// ritorna la stringa senza le vocali

// suggerimento, ritornate una nuova stringa senza tentare di 
// modificare la stringa originale

// ad esempio "ciao" deve ritornare "c"
// ad esempio "aeiou" deve ritornare ""
// ad esempio "esercizio" deve ritornare "srcz"

function removeVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelsLess = ""
    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            vowelsLess += string[i]
        }
    }
    console.log(vowelsLess);
    return vowelsLess
}

removeVowels("barbabietola")

//FATTO