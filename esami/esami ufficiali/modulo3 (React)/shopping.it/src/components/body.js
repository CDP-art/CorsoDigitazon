import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/body.css"

export default function Body({ category }) {

    const [singleCategory, setSingleCategory] = useState([])

    useEffect(() => {
        async function getCategory() {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
            const categoryArray = res.data.products;
            // console.log(categoryArray[0].category + "      ARRAY")
            setSingleCategory(categoryArray)
        }
        getCategory()
    }, [category])

    return (
        <div className="bodyContainer">
            <div className="cardContainer">
                {singleCategory.map((product, id) => (
                    <div className="card" key={id}>
                        <h3>{product.title.toUpperCase()}</h3>
                        <img src={product.images[0]} alt={product.title} style={{ objectFit: "contain", margin: "10px" }} width={200} height={200}></img>
                        <h4>{product.brand}</h4>
                        <h5>{product.description}</h5>
                        <h2>€ {product.price}</h2>
                        <button type="button">Aggiungi</button>
                    </div>
                ))}
            </div>
        </div>
    )
}