import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Header from "./components/header/Header";
import Product from "./components/product/ProductSection";
import Banner from "./components/banner/Banner";
import Shop from "./screens/shop/Shop";
import ProductDetail from "./screens/productDetail/ProductDetail";
import Cart from "./screens/cart/Cart";
import ShopCategory from "./screens/shopCategory/ShopCategory";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category/:category" element={<ShopCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
