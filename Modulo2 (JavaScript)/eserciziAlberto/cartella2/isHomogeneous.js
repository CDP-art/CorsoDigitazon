// scrivere una funzione chiamata isHomogeneous che
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

//creare una funzione chiamata isHomogeneous
//prende in ingresso un array chiamato array
//fare un ciclo per ciclare l'array
//tanti if di typeof?
//se tutti array[i] typeoff == tutti i valori ---- allora true 
//altrimenti false

let arr = [1,"ciao",3]

let isHomogeneous = (array) => {
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == "boolean");
    }
    
}

console.log(isHomogeneous(arr));