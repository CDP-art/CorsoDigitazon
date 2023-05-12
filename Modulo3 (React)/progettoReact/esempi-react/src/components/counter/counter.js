import { useState } from "react";
import "./counter.css"

export default function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h2>Counter</h2>
            <span>{count}</span>
            <div className="buttonsContainer">
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    );
}