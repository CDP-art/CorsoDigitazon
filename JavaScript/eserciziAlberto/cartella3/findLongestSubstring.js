// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"

function findLongestSubstring(string) {
    let caratteri = string.split("");
    let uniqueCaratteri = new Set(caratteri)
    let arrCaratteri = [...uniqueCaratteri]
    let newString = arrCaratteri.join("")
    console.log(newString);
    return newString
}

findLongestSubstring("ciao")

//FATTO