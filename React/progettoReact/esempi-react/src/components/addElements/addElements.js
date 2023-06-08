import { useState } from "react";
import "./addElements.css"

export default function AddElements() {

    const [list, setList] = useState(["Pane", "Latte", "Uova"])
    const [item, setItem] = useState('');

    function handleClick() {
        const newItem = [...list]
        newItem.push(item)
        setList(newItem)
    }


    return (
        <div className="container">
            <h2>Clicca e aggiungi</h2>
            <div className="list">
                <div className="addList">
                    <input placeholder="Aggiungi qualcosa"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}></input>
                    <button style={{ marginLeft: "10px" }}
                        onClick={handleClick}
                    >Add in List</button>
                </div>
                <div className="ultimateList">
                    <ul>
                        {list.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}