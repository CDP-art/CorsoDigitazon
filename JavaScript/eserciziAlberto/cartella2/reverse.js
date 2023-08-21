// scrivere una funzione chiamata reverse che
// data una stringa in ingresso
// ritorni la stringa inversa

// ad esempio "ciao" deve ritornare "oaic"
// ad esempio "Jessica" deve ritornare "acisseJ"

//creare una funzione che accetta un parametro stringa in ingresso
//creare una stringa vuota per memorizzare la stringa al contrario
//fare un ciclo al contrario per iterare la stringa al contrario
//stampare stringa al contrario
function reverse(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverse("Jovanotti"));

//FATTO
