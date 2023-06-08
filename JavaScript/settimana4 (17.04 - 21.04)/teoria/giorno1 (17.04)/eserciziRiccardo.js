/*
  Ex 1

  dato l'array chiamato 'a1' con valori [10, 'ciao', true, 20, 'js', 4] usare un foreach per calcolare la somma degli elementi numerici e stamparla in output
*/

//creare l'array con i valori scritti nella consegna
//iterare l'array con il forEach array.forEach()
//creare una variabile che fa la somma
//se il valore è number, allora aggiungerlo a somma
//altrimenti errore
//stampare somma

let a1 = [10, "ciao", true, 20, "js", 4];
let sum = 0;
a1.forEach(function (i) {
  if (typeof i == "number") {
    sum += i;
  } /*console.log("Mi serve un numero")*/ else;
});

// console.log("La somma dei numeri nell'array è: " + sum);

/*
  Ex 2

  creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Panda', maxSpeed: 250, price: 1000

  creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Audi', maxSpeed: 200, price: 5000

  tramite due foreach, stampare le singole caratteristiche delle due automobile.
  DOPO, stampare in output il modello della macchina con la velocità massima più elevata

*/

// let m1 = new Map(["model", "Panda"], ["maxSpeed", 250], ["price", 1000]);

// let m2 = new Map(["model", "Audi"], ["maxSpeed", 200], ["price", 5000]);

// if (m1.get("maxSpeed") > m2.get("maxSpeed"))
//   console.log(`l'auto più veloce è: ${m1.get("model")}`);
// else if (m2.get("maxSpeed") > m1.get("maxSpeed"))
//   console.log(`l'auto più veloce è: ${m2.get("model")}`);
// else console.log("le due auto hanno la stessa velocità massima");

//----------------------------------------------------------------------------

// let m1 = {
//     model: "Panda",
//     MaxSpeed: "250",
//     Price: "1000",
//     print: function () {
//         console.log(`Modello ${this.model}, Velocità massima ${this.MaxSpeed}, Prezzo ${this.Price}`);
//         console.log("-----------------");
//     },
// };

// let m2 = {
//     model: "Audi",
//     MaxSpeed: "200",
//     Price: "5000",
//     print: function () {
//         console.log(`Modello ${this.model}, Velocità massima ${this.MaxSpeed}, Prezzo ${this.Price}`);
//         console.log("-----------------");
//     },
// };

// console.log(`Modello ${m1.model}, Velocità massima ${m1.MaxSpeed}, Prezzo ${m1.Price}`);
// console.log(`Modello ${m2.model}, Velocità massima ${m2.MaxSpeed}, Prezzo ${m2.Price}`);
