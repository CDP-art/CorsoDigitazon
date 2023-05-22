/*  Scrivere una applicazione che si avvicini piu' possibile al concetto di "ruota della fortuna", quindi deve esserci una "ruota" (che puo' anche non avere l'aspetto di una ruota, basta che si vedano diversi valori selezionati di volta in volta... per arrivare ad uno solo finale), e deve esserci uno storico dei valori usciti.
*/

import { useState } from "react";
import "./ruotaFortuna.css"

//Inizializzare lo stato di partenza della ruota con un array


export default function RuotaFortuna() {

    let valoreRuota = [2, 56, 43, 45, 76, 1]

    const [numeroFortunato, setNumeroFortunato] = useState(generateNumeroFortunato())

    let storico = []
    storico.push(valoreRuota[numeroFortunato])


    function generateNumeroFortunato() {
        let index = Math.floor(Math.random() * valoreRuota.length)
        console.log(index);
        return index
    }

    return (
        <div className="container">
            <div className="history">
                <ul>
                    {storico.map((n, i) =>
                        <li className="casella" key={i}>{n}</li>)}
                </ul>
            </div>
            <div className="ruotaFortuna">
                {valoreRuota.map((el, i) => <div className="casella" style={{ backgroundColor: "red" }} key={i}>{el}</div>)}
            </div>
            <button onClick={() => setNumeroFortunato(generateNumeroFortunato(numeroFortunato))}>Click to start</button>
        </div>
    );
}