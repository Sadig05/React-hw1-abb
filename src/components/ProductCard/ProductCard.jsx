import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'; // Import the Modal component from homework1

function ProductCard({
  name,
  price,
  imagePath,
  sku,
  color,
  onAddToCart,
  onAddToFavorites,
  onRemoveFromCart,
  isFavorite,
  inCart,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(sku);
    setShowModal(true); // Show the modal when adding to cart
  };

  const handleModalClose = () => {
    setShowModal(false); // Close the modal
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(sku);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={imagePath} alt={name} />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-color">Color: {color}</p>
    { !inCart ? (<><button
        className="add-to-cart-button"
        // backgroundColor="green" 
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
        <span
        className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
        onClick={handleAddToFavorites}
      >
        ★
      </span>
      </>
      ) : (
        <button
        className="add-to-cart-button"
        onClick={onRemoveFromCart}
      >
        &#10005;
      </button>
      ) }
    
      {showModal && (
        <Modal
          header="Confirmation"
          closeButton={true}
          onClose={handleModalClose}
          text={`You have added ${name} to the cart.`}
          actions={
            <button className="add-to-cart-button" onClick={handleModalClose}>
              OK
            </button>
          }
        />
      )}
    </div>
  );
}

// ProductCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   sku: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   onAddToCart: PropTypes.func.isRequired,
//   onAddToFavorites: PropTypes.func.isRequired,
//   isFavorite: PropTypes.bool,
//   inCart: PropTypes.bool,

// };

ProductCard.defaultProps = {
  isFavorite: false,
};

export default ProductCard;
