import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'; // Import the Modal component from homework1

class ProductCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onAddToFavorites: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool,
  };

  static defaultProps = {
    isFavorite: false,
  };

  state = {
    showModal: false, // State to control the display of the modal
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props.sku);
    this.setState({ showModal: true }); // Show the modal when adding to cart
  };

  handleModalClose = () => {
    this.setState({ showModal: false }); // Close the modal
  };

  handleAddToFavorites = () => {
    this.props.onAddToFavorites(this.props.sku);
  };

  render() {
    const { name, price, imagePath, color, isFavorite } = this.props;
    const { showModal } = this.state;

    return (
      <div className="product-card">
        <img className="product-image" src={imagePath} alt={name} />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <p className="product-color">Color: {color}</p>
        <button
          className="add-to-cart-button"
          // backgroundColor="green" 
          onClick={this.handleAddToCart}
        >
          Add to cart
        </button>
        <span className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={this.handleAddToFavorites}>
          ★
        </span>
        {showModal && ( 
          <Modal
            header="Confirmation"
            closeButton={true}
            onClose={this.handleModalClose}
            text={`You have added ${name} to the cart.`}
            actions={<button  className="add-to-cart-button" onClick={this.handleModalClose}>OK</button>}
          />
        )}
      </div>
    );
  }
}

export default ProductCard;
