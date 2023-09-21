// This component shows when the too many re-renders error pops up

import { useState } from "react"

export default function TooManyReRenders() {
    const [which, setWhich] = useState(0)

    return (
        <div className="container">
            <h2>Too many re-renders</h2>
            <input
                style={{ borderColor: which === 0 ? "red" : "black" }}
                onChange={() => setWhich(0)}
            />
            <input
                style={{ borderColor: which === 1 ? "red" : "black" }}
                onChange={() => setWhich(1)}
            />
            {/*
         Questo per vedere l'errore di quando non passiamo la funzione, ma il risultato dell'invocazione
         della funzione setWich
         
         <input
         style={{borderColor: which === 2 ? "red" : "black"}}
         onChange={setWhich(2)}
       />
       */}
        </div>
    )
}