// This component shows how useEffect is called with regard to its dependencies
//useEffect è come a una funzione che viene eseguita automaticamente da React dopo ogni aggiornamento del componente
//UseEffect accetta due parametri: una funzione anonima che esegue un compito e delle dipendenze che si mettono all'interno a delle []

import { useState, useEffect } from "react"

export default function UseStateUseEffectWhy() {
    const [inputA, setInputA] = useState('')
    const [inputB, setInputB] = useState('')
    const [ok, setOk] = useState()

    // useful for data fetching, no dependencies
    useEffect(() => {
        console.log("Triggers only on load")
    }, []) //L'array vuoto [] indica che useEffect viene eseguito solo una volta durante il caricamento iniziale della pagina

    // both states changed
    // In questo caso indica che il codice dentro alla funzione viene eseguito solamente al cambiamento di entrambi gli input 
    useEffect(() => {
        setOk(inputA && inputB ? 'both changed' : "")
    }, [inputA, inputB])

    // only inputA changed
    //In questo caso indica che il codice dentro alla funzione viene eseguito solamente al cambiamento di un input
    useEffect(() => {
        console.log(`InputA changed to: ${inputA}`)
    }, [inputA])

    // only inputB changed
    useEffect(() => {
        console.log(`InputB changed to: ${inputB}`)
    }, [inputB])

    return (
        <div className="container">
            <h2>useState and useEffect Why</h2>
            <input value={inputA} onChange={(e) => setInputA(e.target.value)} ></input>
            <input value={inputB} onChange={(e) => setInputB(e.target.value)} ></input>
            <span>{ok}</span>
        </div>
    )
}