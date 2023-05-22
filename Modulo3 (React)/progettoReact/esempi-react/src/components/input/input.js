import { useState } from "react";

export default function InputList() {

    const [input, setInput] = useState("")

    let frasi = []
    frasi = input.split(" ");


    return (
        <>
            <h2>Tramutazione in lista</h2>
            <div className="container">
                <input
                    type="text"
                    placeholder="Scrivi qualcosa"
                    style={{ width: "200px", padding: "10px", margin: "10px" }}
                    value={input}
                    onChange={(el) => setInput(el.target.value)
                    }></input>
            </div>
            <ul>
                {frasi.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>

        </>
    );
}