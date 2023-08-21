import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../css/App.css"
import axios from "axios";

export default function Body({ post }) {

    const [title, setTitle] = useState([])
    const [comments, setComments] = useState([])

    //Asincrona per titolo 
    useEffect(() => {
        async function getTitle() {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`)
            setTitle(res.data)
        }
        getTitle()
    }, [post])


    //Asincrona per commento 
    useEffect(() => {
        async function getComments() {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
            setComments(res.data)

        }
        getComments()
    }, [post])

    return (
        <div className="body">
            <h2>{title.title}</h2>
            <div className="commentsList">
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}