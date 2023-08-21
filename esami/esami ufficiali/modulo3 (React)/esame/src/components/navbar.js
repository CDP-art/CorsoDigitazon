import React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/App.css";

export default function Navbar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere le categorie
        async function getCategories() {
            const res = await axios.get("https://dummyjson.com/products/categories")
            setCategories(res.data)
        }
        getCategories()
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
                        <span>CDP94</span>
                    </div>
                </nav>
                <div className="categories">
                    {categories.map((category, i) => (
                        <div key={i}>
                            <Link to={`${category}`} style={{ textDecoration: "none", color: "orange" }}>
                                <p >{category}</p></Link>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}