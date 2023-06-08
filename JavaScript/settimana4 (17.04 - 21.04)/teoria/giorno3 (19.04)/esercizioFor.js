/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

//creare un array con dentro 3 oggetti [{base: 3, altezza: 4} * 3]
//creare variabile areaRettangolo
//creare un ciclo for che cicla l'array e prende i valori base a altezza. 
// assegnare areaRettangolo all'operazione base*altezza di ogni rettangolo
//stampare areaRettangolo
//creare un forEach che prevede una funzione e come parametro di ingresso prende l'array in modo tale da restitutire subito gli indici dell'array
//prendere la variabile areaRettangolo e farci l'operazione all'interno del forEach.
//stampre areaRettangolo


let arrayRettangoli = [
    
    { base: 3, altezza: 5},
    {base: 2, altezza: 8},
    {base: 8, altezza: 4}
]



let areaRettangolo = 0

console.log("Ciclo For:");

for(let i = 0; i < arrayRettangoli.length; i++){
    areaRettangolo = arrayRettangoli[i].base * arrayRettangoli[i].altezza;
    console.log(`L'area del rettangolo ${i + 1} è ${areaRettangolo}`);
}

console.log("ForEach:");

arrayRettangoli.forEach(function(rettangoloSingolo, i){
    areaRettangolo = rettangoloSingolo.base * rettangoloSingolo.altezza;
    console.log(`L'area del rettangolo ${i +1} è: ${areaRettangolo}`);
})
