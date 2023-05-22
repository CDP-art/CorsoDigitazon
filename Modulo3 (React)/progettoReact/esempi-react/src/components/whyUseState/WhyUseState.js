import { useState } from 'react'

//Usiamo lo stato perchè è l'unico modo per far comunicare il mondo HTML al mondo JAVASCRIPT.
//Se dovessimo usare il codice sottostante, non si vedrà mai a video l'aumento del contatore.
//Questo perchè l'HTML non reindirizzerà mai il cambiamento di stato del count.


// export function WhyUseState() {
//   let count = 0
//   return (
//     <div className="container">
//       <h2>Why use state</h2>
//       <button onClick={() => {
//         count++
//         console.log(count)
//       }}>Click me!</button>
//       {count}
//     </div>
//   )
// }

//Con lo stato, invece, riusciamo a tenere traccia dell'aggiornamento dello stato interessato,
//e lo mostriamo a video.

//Per inizializzare lo stato, dobbiamo inizializzarlo come una variabile (let o const), e lo andiamo a 
//memorizzare all'interno di un array con due valori: stato iniziale e il cambiamento di stato.
//il secondo valore è una funzione. Se gli passiamo a sua volta una funzione, è come se andassimo a prendere
//lo stato precedente
//Dopo aver dichiarato la variabile, allora gli associamo lo stato (useState) con useState()
//e dentro le parentesi ci mettiamo il valore dello stato (primo posto dell'array) di partenza

export default function WhyUseState() {

    // 1) useState
    //in questo caso abbiamo inizializzato lo stato con il valore 0 visto che abbiamo un contatore
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h2>Why use state</h2>
            <button onClick={() => {
                // 2) invoke the setter function
                setCount(count + 1)
                console.log(count)
            }}>Click me!</button>
            {count}
        </div>
    )
}