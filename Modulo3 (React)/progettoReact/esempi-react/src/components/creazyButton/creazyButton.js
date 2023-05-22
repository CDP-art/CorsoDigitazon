import { useState } from "react";

export default function CreazyButton() {

    const [position, setPosition] = useState({ x: 0, y: 0 })


    return (
        <main style={{ width: "1200px", height: "600px", backgroundColor: "pink", position: "relative" }}>

            <div
                onMouseEnter={(e) => {
                    let newHeight = Math.random() * 550;
                    let newWidth = Math.random() * 1150;
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