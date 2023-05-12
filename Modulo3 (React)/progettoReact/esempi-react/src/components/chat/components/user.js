import React from "react";
import { useState } from "react"

export default function User({ newMessage }) {

    let [user, setUser] = useState("")
    let [mess, setMess] = useState("")



    return (
        <div className="user">
            <input
                type="text"
                placeholder="Name"
                value={user}
                onChange={(e) => setUser(e.target.value)}>

            </input>
            <input
                type="text"
                placeholder="Message"
                value={mess}
                onChange={(e) => setMess(e.target.value)}>

            </input>
            <button onClick={() => newMessage(user, mess)}>Send</button>
        </div>
    );
}