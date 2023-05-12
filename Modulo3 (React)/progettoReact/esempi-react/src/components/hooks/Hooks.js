import { useState, useEffect } from "react";

export default function Hooks() {

    const [count, setCount] = useState(0);

    useEffect(() => { console.log(count); }, [count])
    //array stabilito come secondo parametro rappresenta le dipendenze.
    //Quando una delle dipenze cambia, viene eseguita la funzione. 

    return (
        <>
            <h1>Hooks</h1>
            <button onClick={() => setCount(count + 1)}>Clicca qui</button>
            <span>{count}</span>
        </>
    );
}