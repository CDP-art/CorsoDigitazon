// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"

//creare una stringa
//creare una funzione findeLongestSubstring che prende in ingresso una stringa
//creare una variabile stringa vuota current si aggiorna al primo ciclo
//creare una varibile stringa vuota result che si aggiorna al risultato finale
//creare un ciclo for per iterare nella stringa che inizializza da 0 e arriva a -1
//aggiornare current con indice della stringa
//creare un secondo ciclo per tenere traccia del primo e parte da 1 e arriva a -1
//se result ha un carattere della stringa, allora ricomincia partendo da i+1



let stringa = "pwwkew"
function findLongestSubstring(string) {
  let current = ""
  let result = ""
  for(let i = 0; i < string.length -1; i++){
    current += string[i]
  }
   
}

console.log(findLongestSubstring(stringa));


/*
  for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length; j++) {
            if (curr.includes(string[j])) {
                if (curr.length > res.length) {
                    res = curr
                }
                curr = ''
                break
            }
            curr += string[j]
        }
    }
*/


/*
    function findLongestSubstring(s){
    let parola=''
    let res=''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if(parola.includes(lettera)){
            if(parola.length>res.length){
                res=parola
            }
            parola=''
        }else{
            parola+=lettera
        }
    }
    if(parola.length>res.length){
        res=parola
    }
    return res
}
*/

/*
  function findLongestSubstring(s) {
    let parola = ''
    let res = ''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if (parola.includes(lettera)) {
            if (parola.length > res.length) {
                res = parola
            }
            parola = parola.substring(parola.indexOf(lettera)+1, i)
        } else {
            parola += lettera
        }
    }
    if (parola.length > res.length) {
        res = parola
    }
    return res
}
*/