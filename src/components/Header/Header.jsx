import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

function Header({ cartCount, favoritesCount }) {
  return (
    <div className="header">
      <div className="cart-icon">
        <span role="img" aria-label="Shopping Cart">
          🛒
        </span>
        <span className="cart-count">{cartCount}</span>
      </div>
      <div className="favorites-icon">
        <span role="img" aria-label="Favorites">
          ★
        </span>
        <span className="favorites-count">{favoritesCount}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  favoritesCount: PropTypes.number.isRequired,
};

export default Header;
