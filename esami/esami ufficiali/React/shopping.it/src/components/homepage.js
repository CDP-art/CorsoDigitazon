import React from "react";
import "../css/homepage.css"
import axios from "axios";
import { useState, useEffect } from "react";
// import Card from "./card";
import Cart from "./cart";

export default function Homepage() {

    const [user, setUser] = useState({})

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere l'utente 21
        async function getUser() {
            const res = await axios.get("https://dummyjson.com/users/21")
            setUser(res.data)
        }
        getUser()
    }, [])

    return (
        <div className="homeContainer">
            <main>
                <h1>Bentornato {user.firstName} {user.age}!</h1>
            </main>
            <Cart />
        </div>
    );
}