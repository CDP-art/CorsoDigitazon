import { useState, useEffect } from "react";
import "./fetch.css"

export default function Fetch() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProdutcs() {
            let res = await fetch("https://fakestoreapi.com/products")
            let json = await res.json()
            setProducts(json)
        }
        fetchProdutcs()
    }, [])

    return (
        <div id="fetchContainer">
            <div id="title"><h1>FETCH</h1></div>
            <div id="imagesList">
                {products.map((e) =>
                (
                    <div key={e.id} id="article">
                        <h3 style={{ color: "red" }}>{e.title}</h3>
                        <img src={e.image} alt="" style={{ width: "100px", }}></img>
                        <h3 style={{ color: "green" }}>{e.price} $</h3>
                    </div>
                )
                )}
            </div>
        </div>
    );
}