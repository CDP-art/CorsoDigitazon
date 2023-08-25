import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Card() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere le categorie
        async function getProducts() {
            const res = await axios.get("https://dummyjson.com/products/10")
            const images = res.data.images
            console.log(images);
            setProducts(images);
        }
        getProducts()
    }, [])

    return (
        <div className="products"
            style={{
                width: "75%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {products.map((img, i) => (
                <div className="img" key={i}>
                    <img src={img} key={i} alt="" style={{ objectFit: "contain", margin: "10px" }} width={200} height={200}></img>
                </div>
            ))}
            <Outlet></Outlet>
        </div>
    );
}