import React from "react";
import Card from "./card";
import Cart from "./cart";

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