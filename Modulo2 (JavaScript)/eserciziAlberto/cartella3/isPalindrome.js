// scrivere una funzione chiamata isPalindrome che 
// data una parola 
// ritorni true se e' palindroma, false altrimenti

// ad esempio con "ciao" ritorna false
// ad esempio con "abba" ritorna true
// ad esempio con "ada" ritorna true
// ad esempio con "1234321" ritorna true
// ad esempio con "123321" ritorna true
// ad esempio con "123421" ritorna false

function isPalindrome(parola){
    let parola1 = ""
    let parola2 = ""
    for(let i = 0; i < parola.length; i++){
        parola1+=parola[i]
    }

    for(let j = parola.length -1; j >= 0; j--){
        parola2 += parola[j]
    }

    return parola1 === parola2

    // split, reverse, join, stampa se join === parola
    
    


}

console.log(isPalindrome("abba"));