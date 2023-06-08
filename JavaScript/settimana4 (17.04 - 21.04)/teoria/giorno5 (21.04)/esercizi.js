/*
Ex 1

creare un array in cui occorre includere 5 dati di tipi diversi:
- un letterale oggetto con proprietà x: 10 e y: 5
- un numero (100)
- una stringa ("javascript")
- una mappa ("label" -> "sono una mappa")
- un array [40, 50, 60]

Iterare sull'array esterno con un foreach e...
se l'elemento corrente è...

un letterale oggetto, stampa la somma delle sue proprietà x e y

un numero, controlla se è > 100 scrivi red, altrimenti blue

una stringa, stampa il suo primo carattere

una mappa, stampa il valore della sua proprietà "label", se ce l'ha

un array, stampa i numeri in ordine inverso
*/

//creare un array "diversiValori" con i valori che sono scritti nell'esercizio
//fare un forEach => (el) dell'array per prendere ogni indice dell'array
//se el è oggetto, allora return x + y
//se el è numero, > 100 return red, else blue
//se el è stringa, primo carettere della stringa charAt
//se el è mappa, stampare proprietà label (se ce l'ha)
//se el è array, stampa numeri al contrario



let diversiValori = [
    {x:10, y:5},
    100,
    "Javascript",
    [40,50,60],
    new Map([["label", "Sono un mappa"]])
]



diversiValori.forEach((el) => {

    if(typeof el == "number"){
        if(el > 100) console.log("red") 
        else console.log("blue")
        return
    }
    
    if(typeof el == "string") {
        console.log(el.charAt(0));
        return
    }

    if(typeof el == "object"){
        console.log(el.x + el.y);
        return
    }


    if(Array.isArray(el)){
        for(let i = el.length -1; i >= 0; i--){
            console.log(el[i]);
            return
        }
    }

    if(el instanceof Map){
        
    }

    if(typeof el == "object"){
        console.log(el.x + el.y);
        return
    }
})