import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import {useState} from "react"
function App() {
  const [products,setProducts]=useState([]);
  //장바구니 표시
  const [cart,setCart] =useState([]);;
  //단위 영역
  const convertPrice =(price)=>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <BrowserRouter>
      <TopNavigationBar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home  products={products} 
        setProducts={setProducts} convertPrice ={convertPrice}/>} />
        <Route path="/product/:id" element={<Product 
        convertPrice={convertPrice} cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Basket  cart={cart} 
        setCart={setCart}convertPrice={convertPrice}/>} />
        <Route path="*" element="<div>404</div>" />
        <Route path="*/*" element="<div>404</div>" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
