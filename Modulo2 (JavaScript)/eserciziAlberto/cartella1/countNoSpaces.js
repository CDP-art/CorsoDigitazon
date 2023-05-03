// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi (trim)

//creare un contatore
//iterare all'interno della stringa
//per ogni carattere aumento contatore
//se il carattere è uno spazio, non aumentare il contatore

function countNoSpaces(string) {
    string = string.replace(/ /g, "") // uso il replace per dire che da uno spazio, lo rimpiazzo con una stringa vuota
    let n = 0
    for (let i = 0; i < string.length; i++) {
        n++
    }
    return `La stringa inserita contiene ${n} caratteri senza contare gli spazi`
}

console.log(countNoSpaces("ciao mamma, guarda come mi diverto"));

//FATTO


