import React from "react";


export default function Text({ messages }) {

    return (
        <div className="messages">
            {messages.length === 0 ? (
                <span>no messages...</span>
            ) : (
                <ul>
                    {messages.map((e, i) => (
                        <li key={i} style={{
                            listStyleType: "none",
                            marginBottom: "10px",
                            border: "1px solid",
                            borderRadius: "5px",
                            padding: "10px"
                        }}>
                            <span>{e.user} :</span>
                            {e.text}
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    );
}

//ci sarà un .map perchè cicla in quello che gli viene passato e si dovrà aggiornare lo stato che a sua volta diventa il punto di partenza. 