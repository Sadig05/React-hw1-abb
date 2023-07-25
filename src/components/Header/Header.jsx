import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
class Header extends React.Component {
  static propTypes = {
    cartCount: PropTypes.number.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  render() {
    const { cartCount, favoritesCount } = this.props;

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
}

export default Header;
