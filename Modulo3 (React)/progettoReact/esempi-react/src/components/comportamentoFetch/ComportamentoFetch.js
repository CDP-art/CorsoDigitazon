/*
    scrivere un componente che astragga il funzionamento della fetch, quindi deve accettare in ingresso:
    * un URL
    * una funzione che verra' richiamata con il risultato quando la fetch termina
    Mostrare un esempio di utilizzo.
*/

import { useState } from "react"

function Fetch({ URL, setRes }) {

    async function fetchContents() {
        let res = await fetch(URL)
        let json = await res.json()
        setRes(json)
    }
    fetchContents()

}

export default function ComportamentoFetch() {
    let [res, setRes] = useState([])
    return (
        <>
            <h1>Il comportamento della Fetch</h1>
            <Fetch setRes={setRes} URL="https://fakestoreapi.com/products" />
            {res.map((obj) =>
                <div key={obj.id}>
                    <span>{obj.title}</span>
                </div>
            )}
        </>
    );
}  