import "./css/App.css"
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios";
import Home from "./components/home";
import Body from "./components/body";
import Homepage from "./components/homepage";

export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    //effettuo la chiamata al server esterno per la navbar
    async function getId() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const data = await res.data
      const cutJson = data.slice(0, 3)
      setPosts(cutJson)
    }
    getId()
  }, [])

  return (
    <>
      <div className="App">
        <h1>Forum</h1>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Homepage />}></Route>
                {posts.map(post => (
                  <Route key={post.id} path={`post/${post.id}`} element={<Body post={post.id} />} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

