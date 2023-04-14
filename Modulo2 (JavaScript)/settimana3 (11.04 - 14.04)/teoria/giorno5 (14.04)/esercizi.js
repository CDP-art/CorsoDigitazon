//Stampare una stringa al contrario

let word = "Riccardo";

// function fn(stringa) {
//   let result = "";
//   for (let i = stringa.length - 1; i >= 0; i--) {
//     result += stringa[i];
//   }
//   return result;
// }

let result = "";

for (let i = word.length; i >= 0; i--) result += word.charAt(i);

console.log(result);
console.log("-------------------");

/*
 Ex 2
data la stringa 'Riccardo'
realizzare l'apposita strategia per stampare in output l'ultimo carattere maiuscolo concatenato a un underscore e al primo carattere minuscolo:

O_r 
*/

let nome = "Riccardo";

console.log(
  `${nome.charAt(nome.length - 1).toLocaleUpperCase()}_${nome
    .charAt(0)
    .toLocaleLowerCase()}`
);
console.log("-------------------");

/*
  Ex 3


creare l'apposita strategia per rappresentare, tramite oggetto, uno studente. Lo studente avrà:
idMatricola: 14
nomeCompleto: Luigi Verdi
voti: 6, 7, 7

Stampare in output la stringa tramite apposito algoritmo:

il terzo voto dello studente con id 14 (Luigi Verdi) è 7
*/

let studente = {
  idMatricola: 14,
  nomeCompleto: "Luigi Verdi",
  voti: [6, 7, 7],
};

console.log(
  `Il terzo voto dello studente con id ${studente.idMatricola} ( ${studente.nomeCompleto} ) è ${studente.voti[2]}`
);
