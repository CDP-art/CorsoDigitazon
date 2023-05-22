import { useState } from "react";
import "./rgb.css"

export default function RGB() {

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    return (
        <>
            <h2>Caccia al colore</h2>
            <div className="container" style={{ width: "50%", marginTop: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <div>
                            <input
                                type="text"
                                className="input"
                                onChange={(e) => setRed(e.target.value)}
                                placeholder="Inserisci un numero da 0 a 255"></input>
                            <span>R</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input"
                                onChange={(e) => setGreen(e.target.value)}
                                placeholder="Inserisci un numero da 0 a 255"></input>
                            <span>G</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input"
                                onChange={(e) => setBlue(e.target.value)}
                                placeholder="Inserisci un numero da 0 a 255"></input>
                            <span>B</span>
                        </div>
                    </div>
                    <div>
                        <div className="square" style={{ backgroundColor: `rgb(${red},${green},${blue})` }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}