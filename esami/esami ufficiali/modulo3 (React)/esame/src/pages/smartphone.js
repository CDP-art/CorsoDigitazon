import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Smartphone() {

    const [smartphones, setSmartphones] = useState([])

    useEffect(() => {
        async function getSmarthpnes() {
            const res = await axios.get("https://dummyjson.com/products/category/smartphones")
            setSmartphones(res.data.products)
        }
        getSmarthpnes()
    }, [])

    return (
        <>
            <h1>I migliori Smartphones in circolazione!</h1>
            {smartphones.map((smartphone) => (
                <div key={smartphone.id}>
                    <ul>
                        <li>{smartphone.title}</li>
                    </ul>
                </div>
            ))}
        </>
    );
}