import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Homepage from './components/homepage';

function App() {

  const [products, setProducts] = useState({})

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products/")
      setProducts(res.data)
    }
    getProducts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />}></Route>
            {Object.keys(products).map((product) => (
              <Route key={product.id} path={`${product.category}`} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
