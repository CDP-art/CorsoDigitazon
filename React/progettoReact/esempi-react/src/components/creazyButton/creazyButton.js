import { useState } from "react";

export default function CreazyButton() {

    const [position, setPosition] = useState({ x: 0, y: 0 })


    return (
        <main style={{ width: "100%", height: "100%", backgroundColor: "lightblue", position: "relative" }}>

            <div
                onMouseEnter={(e) => {
                    let newHeight = Math.random() * 550;
                    let newWidth = Math.random() * 733;
                    setPosition({ x: newHeight, y: newWidth })
                }}
                style={{ padding: "10px", backgroundColor: "purple", position: "absolute", left: position.y, top: position.x }}>
                <button
                    style={{ padding: "10px" }}
                >Click me, if you can!</button>
            </div>

        </main>
    );
}