import { useState, useEffect } from "react";

export default function Hooks2() {

    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const [ok, setOK] = useState();

    useEffect(() => {
        if (inputA !== "" && inputB !== "") {
            setOK("funziona!")
        } else {
            setOK("")
        }
    }, [inputA, inputB])
    //array stabilito come secondo parametro nella funzione useEffect rappresenta le dipendenze.
    //Quando una delle dipenze cambia, viene eseguita la funzione. 

    return (
        <>
            <h1>Hooks 2</h1>
            <input onChange={e => setInputA(e.target.value)}></input>
            <input onChange={e => setInputB(e.target.value)}></input>
            <span>{ok}</span>
        </>
    );
}