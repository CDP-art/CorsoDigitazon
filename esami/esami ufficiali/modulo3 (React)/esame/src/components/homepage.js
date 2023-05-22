import React from "react";
import { useState, useEffect } from "react";

function Card() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //effettuo la chiamata al server esterno per prendere le categorie
        async function getProducts() {
            const res = await fetch("https://dummyjson.com/products/10")
            const json = await res.json()
            let urls = json.images
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
            const res = await fetch("https://dummyjson.com/carts/16")
            const json = await res.json()
            setCarts(json.products);
        }
        getCarts()
    }, [])


    useEffect(() => {
        async function getTotal() {
            const res = await fetch("https://dummyjson.com/carts/")
            const json = await res.json()
            setTotals(json.carts[15]);
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
            <h1>Continua ad aquistare!</h1>
            <div className="body">
                <Card />
                <Cart />
            </div>
        </div>
    );
}