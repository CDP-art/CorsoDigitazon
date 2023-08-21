import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Card() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere le categorie
        async function getProducts() {
            const res = await axios.get("https://dummyjson.com/products/10")
            let urls = res.data.images
            setProducts(urls);
        }
        getProducts()
    }, [])

    return (
        <div className="products">
            {products.map((img, i) => (
                <div className="img" key={i} >
                    <img src={img} alt="" style={{ objectFit: "contain", margin: "10px" }} width={200} height={200}></img>
                </div>
            ))}
        </div>
    );
}


function Cart() {

    const [carts, setCarts] = useState([])
    const [totals, setTotals] = useState([])

    useEffect(() => {
        async function getCarts() {
            const res = await axios.get("https://dummyjson.com/carts/16")
            setCarts(res.data.products);
        }
        getCarts()
    }, [])


    useEffect(() => {
        async function getTotal() {
            const res = await axios.get("https://dummyjson.com/carts/")
            setTotals(res.data.carts[15]);
        }
        getTotal()
    }, [])

    return (
        <div className="cart">
            <h2>Il tuo carrello</h2>
            <h3>Totale: {totals.total}</h3>
            {carts.map((cart, i) => (
                <div key={i} className="prodotto">
                    <h4>{cart.title} :</h4>
                    <p>{cart.price}</p>
                </div>
            ))}
            <div className="prodotto"></div>
            <h3>Totale: {totals.total}</h3>
            <button>Procedi all'ordine</button>
        </div>
    );
}

export default function Homepage() {


    return (
        <div className="container">
            <h1>Continua ad acquistare!</h1>
            <div className="body">
                <Card />
                <Cart />
            </div>
        </div>
    );
}