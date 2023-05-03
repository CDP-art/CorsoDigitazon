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

//scrivere una funzione stringaPazza che prende in ingresso una stringa
//bisogna verificare che la stringa ha determinati requisiti per definirla pazza o meno
//potremmo creare diversi array per includere i vari requisiti, per esempio array soggetti, esclamazioni, punteggiature, finaleVerbi
//si potrebbe itererare su ogni array e se l'indice di quell'array corrisponde a una parola della stringa, allora possiamo definire pazza la stringa
//potremmo fare un altro array parole speciali che contiene le due singole parole dove in quel caso la stringa non è mai pazza
//stampare quindi quando la stringa è pazza o meno

let stringaPazza = stringa => {
    let soggetto = ["Lui", "Lei", "Egli", "Ella"]
    let finaleVerbi = ["are", "ere", "ire"]
    let punteggiature = [",", ".", "!", "?", ":", ";", "-", "~"]
    let paroleSpeciali = ["mare", "Church"]

    for (let i = 0; i < soggetto.length; i++) {
        if (stringa.includes(soggetto[i])) {
            console.log(`Questa stringa NON è pazza: ${stringa}`);
        }
    }

    for (let i = 0; i < paroleSpeciali.length; i++) {
        if (stringa.includes(paroleSpeciali[i])) {
            console.log(`Questa stringa NON è pazza: ${stringa}`);
        }
    }

    if (stringa.charAt(stringa.length - 1) === "?!?" || stringa.includes("Cthulhu")) {
        return `Questa stringa è pazza: ${stringa}`
    }

    for (let i = 0; i < punteggiature.length; i++) {
        if (stringa.includes(punteggiature[i])) {
            console.log(`Questa stringa è pazza: ${stringa}`);
        }
    }

    for (let i = 0; i < finaleVerbi.length; i++) {
        if (stringa.includes(finaleVerbi[i])) {
            console.log(`Questa stringa è pazza: ${stringa}`);
        }
    }

    return `Questa stringa NON è pazza: ${stringa}`;
}

console.log(stringaPazza("Lei è pazzo"))

//


function isMad(sentence) {
    const subjects = ["Lui", "Lei", "Egli", "Ella"]
    const verbs = ["are", "ere", "ire"]
    const punct = [',', '.', '!', '?', ':', ';', '-', '~']

    const extras = ['Church', 'mare']

    let isSubjectPresent = subjects.some(subj => sentence.includes(subj))
    let endsHarshly = sentence.endsWith('?!?')
    let aboutCthulhu = sentence.includes('Cthulhu')

    let startsWithVerbs = verbs
        .some(verb => sentence.split(' ')[0].endsWith(verb))
    let endsWithVerbs = verbs.some(verb => sentence.endsWith(verb))
    let startsOrEnds = startsWithVerbs && endsWithVerbs

    let startsWithPunct = punct.some(p => sentence.startsWith(p))

    let isNeverMad = extras.some(e => sentence.includes(e))

    return !isNeverMad && (
        !isSubjectPresent ||
        endsHarshly ||
        aboutCthulhu ||
        startsOrEnds ||
        startsWithPunct)
}


// TODO write "unit tests" using map string -> bool
let tests = {
    ".Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.": true,
    "Lui e’ pazzo.": false,
    "Lui e’ pazzo?!?": true,
    "Cthulhu fhtagn": true,
    "finire Lui qualcosa finire": true,
    "Lui ama giocare molto": false,
    ".Pazzissima e' Lei": true,
    "~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~": false,
    "~ Papa', come sta Church? ~": false,
}

let res = Object
    .keys(tests)
    .reduce((res, s) => isMad(s) === tests[s] && res, true)
console.log(res)