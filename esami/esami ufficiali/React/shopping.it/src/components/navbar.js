import React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/navbar.css";

export default function Navbar() {

    const [categories, setCategories] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere le categorie
        async function getCategories() {
            const res = await axios.get("https://dummyjson.com/products/categories")
            setCategories(res.data)
        }
        getCategories()
    }, [])

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere l'utente 21
        async function getUser() {
            const res = await axios.get("https://dummyjson.com/users/21")
            setUser(res.data)
        }
        getUser()
    }, [])

    return (
        <>
            <div className="containerNavbar">
                <nav>
                    <div className="logo">
                        <p><Link to="/"
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontFamily: "cursive",
                                fontSize: "30px",
                                padding: "10px",
                                backgroundColor: "orange",
                            }}
                        >Shopping.it</Link></p>
                    </div>
                    <div>
                        <input type="text" placeholder="Cerca su shopping.it"></input>
                    </div>
                    <div className="account">
                        <span>{user.firstName} {user.age}</span>
                    </div>
                </nav>
                <div className="categories">
                    {categories.map((category, i) => (
                        <div key={i}>
                            <Link to={`${category}`} style={{ textDecoration: "none", color: "orange" }}>
                                <p>{category}</p></Link>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}