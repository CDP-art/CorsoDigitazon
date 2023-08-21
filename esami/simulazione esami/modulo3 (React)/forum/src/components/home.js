import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import "../css/App.css"


//Link per prendere l'id dei prodotti
//https://jsonplaceholder.typicode.com/posts
//Cosi tramite l'id riesco a fare ogni singolo collegamento



export default function Home() {


    const [idPost, setIdPost] = useState([])

    useEffect(() => {
        //effettuo la chiamata al server esterno per la navbar
        async function getId() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const data = await res.data
            const cutJson = data.slice(0, 3)
            setIdPost(cutJson)
        }
        getId()
    }, [])
    return (
        <div className="home">
            <div className="navbar">
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    {idPost.map((e) => (
                        <li key={e.id}><Link to={`/post/${e.id}`}><h2>Post {e.id}</h2></Link></li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}