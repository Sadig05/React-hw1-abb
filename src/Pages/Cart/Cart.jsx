import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard/ProductCard";
import Modal from "../../components/Modal/Modal";

export function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) );
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    // setCartItems(items);
  console.log(cartItems, " cartItems");
    axios.get("/products.json").then((response) => {
      const tempData = response.data;
      let temp = []
      if(cartItems){
        temp = cartItems?.map(sku => tempData.find(item => sku === item.sku));
      }
      setProducts(temp);
    });
  }, [cartItems]);
  

  // Filter products based on the SKUs in the cartItems
  const filteredProducts = products?.filter(product => {
    return cartItems.some(cartItem => cartItem.sku === product.sku);
  });

  const handleRemoveFromCart = (product) => {
    console.log("prom", product);
    setItemToRemove(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  const confirmRemoveFromCart = () => {
    const updatedCart = cartItems.filter((product) => product !== itemToRemove.sku);
    console.log(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setShowModal(false);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="product-list">
        {products.map((product, index) => {
         
          return(
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imagePath={product.imagePath}
            sku={product.sku}
            color={product.color}
            onRemoveFromCart={() => handleRemoveFromCart(product)}
            addToCartButton={false}
            inCart={true}
          />
        )
        }
        )}
      </div>
      {showModal && (
        <Modal
          header="Remove from Cart"
          closeButton={true}
          onClose={handleModalClose}
          text="Are you sure you want to remove this item from your cart?"
          actions={
            <>
              <button className="add-to-cart-button" onClick={confirmRemoveFromCart}>
                Remove
              </button>
              <button className="add-to-cart-button" onClick={handleModalClose}>
                Cancel
              </button>
            </>
          }
        />
      )}
    </div>
  );
}
