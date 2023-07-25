import React from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import "./App.css";

class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
    favorites: [],
  };

  componentDidMount() {
    axios.get("/products.json").then((response) => {
      this.setState({ products: response.data });
    });

    const cartItemsFromStorage = localStorage.getItem("cartItems");
    if (cartItemsFromStorage) {
      this.setState({ cartItems: JSON.parse(cartItemsFromStorage) });
    }

    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      this.setState({ favorites: JSON.parse(favoritesFromStorage) });
    }
  }

  handleAddToCart = (sku) => {
    const updatedCart = [...this.state.cartItems, sku];
    this.setState({ cartItems: updatedCart });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  handleAddToFavorites = (sku) => {
    const { favorites } = this.state;
    const updatedFavorites = favorites.includes(sku)
      ? favorites.filter((item) => item !== sku)
      : [...favorites, sku];
    this.setState({ favorites: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  render() {
    const { products, cartItems, favorites } = this.state;

    return (
      <div className="App">
      <Header cartCount={cartItems.length} favoritesCount={favorites.length} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            name={product.name}
            price={product.price}
            imagePath={product.imagePath}
            sku={product.sku}
            color={product.color}
            onAddToCart={this.handleAddToCart}
            onAddToFavorites={this.handleAddToFavorites}
            isFavorite={favorites.includes(product.sku)}
          />
        ))}
      </div>
    </div>
    );
  }
}

export default App;
