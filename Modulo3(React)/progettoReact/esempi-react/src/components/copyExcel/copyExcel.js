/*
    si richiede di creare un componente che sia la versione estremamente semplificata di una riga di Excel. Si devono creare n input dove n e' una prop, ogni qualvolta un input cambia si deve salvare nello stato:
    * il numero totale di celle che hanno un valore al loro interno
    * un array con tutti i valori nelle celle
*/


import { useState } from 'react'

export default function CopyExcel({ n = 5 }) {
    const tmpState = Array(n).fill('')
    const [values, setValues] = useState(tmpState)
    const filtered = values.filter(d => d !== '')

    return (
        <div className="container">
            <h2>Dynamic inputs</h2>
            <div>
                {
                    values.map((d, i) =>
                        <input
                            onChange={(e) => {
                                let newValues = [...values]
                                newValues[i] = e.target.value
                                setValues(newValues)
                            }}
                            key={i} />)
                }
            </div>
            Non empty cells: {filtered.length}
            <br />
            Cells contents: {filtered.toString()}
        </div>
    )
}