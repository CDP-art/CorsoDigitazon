// scrivere una funzione chiamata alfabetoStrambo che
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(s) {
    let arrString = s.split(" ")
    let ultimaLettera = ""
    let vocali = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < arrString.length; i++) {
        let parola = arrString[i];
        ultimaLettera = parola.slice(parola.length - 1);
        if (vocali.includes(ultimaLettera)) {
            arrString[i] = `${parola}r${ultimaLettera}`
        }
    }
    stringa = arrString.join(" ")
    return stringa;
}

console.log(alfabetoStrambo("ciao a tutti"))

//FATTO