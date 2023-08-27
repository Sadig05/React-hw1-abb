import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import Routes, Route, and useLocation
import axios from "axios";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import "./App.css";
import { Cart, Favorites } from './Pages'
import Menu from "./components/Menu/Menu";
import useLocalStorage from "./utils/useLocalStorage";


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("cartItems"); 
  const [favorites, setFavorites] = useLocalStorage("favorites"); 

  useEffect(() => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = (sku) => {
    const updatedCart = [...cartItems, sku];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleAddToFavorites = (sku) => {
    const updatedFavorites = favorites.includes(sku)
      ? favorites.filter((item) => item !== sku)
      : [...favorites, sku];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <Menu />
      <Header cartCount={cartItems.length} favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<div className="product-list" >
          {products.map((product) => (
            <ProductCard
              key={product.sku}
              name={product.name}
              price={product.price}
              imagePath={product.imagePath}
              sku={product.sku}
              color={product.color}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToFavorites}
              isFavorite={favorites.includes(product.sku)}
            />
          ))}
        </div>} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
