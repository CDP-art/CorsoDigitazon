import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

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
        <div className="products">
            {products.map((img, i) => (
                <div className="img" key={i}>
                    <img src={img} key={i} alt="" style={{ objectFit: "contain", margin: "10px" }} width={200} height={200}></img>
                </div>
            ))}
        </div>
    );
}