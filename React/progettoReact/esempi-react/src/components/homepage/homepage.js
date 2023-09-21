import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="generalContainer">
            <header className="title">
                <h1>ESEMPI REACT</h1>
            </header>
            <main className="mainContainer">
                <div className="sideBar">
                    <nav>
                        <ul>
                            <li><Link to="counter">Counter</Link></li>
                            <li><Link to="simplertodolist">Simple Todo List</Link></li>
                            <li><Link to="todolist">Todo List</Link></li>
                            <li><Link to="inputlist">Input List</Link></li>
                            <li><Link to="hooks">Hooks</Link></li>
                            <li><Link to="hooks2">Hooks2</Link></li>
                            <li><Link to="whyusestate">Use State</Link></li>
                            <li><Link to="usestateuseeffectwhy">useState - useEffect?</Link></li>
                            <li><Link to="tomanyrerenders">To many re-renders</Link></li>
                            <li><Link to="simplechat">Simple Chat</Link></li>
                            <li><Link to="chat">Chat</Link></li>
                            <li><Link to="addelements">Add Elements</Link></li>
                            <li><Link to="redinput">Red Input</Link></li>
                            <li><Link to="fetch">Fetch</Link></li>
                            <li><Link to="comportamentofetch">Comportamento Fetch</Link></li>
                            <li><Link to="columnlistproducts">Column List Products</Link></li>
                            <li><Link to="creazybutton">Creazy Button</Link></li>
                            <li><Link to="rgb">Red Green Blue</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="body"> <Outlet /></div>
            </main>
        </div>
    );
}