import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Body from "./components/body";

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products?skip&limit=100")
      const productsArray = res.data.products
      // console.log(productsArray);
      setProducts(productsArray)
    }
    getProducts()
  }, [])

  // console.log(products);

  return (
    <div className="App">
      <div className="components">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Homepage />}></Route>
              {products.map((product, id) => (
                <Route key={id} path={`${product.category}`} element={<Body category={`${product.category}`} />}></Route>
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
