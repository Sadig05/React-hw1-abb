import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (sku) => {
    setFavorites([...favorites, sku]);
  };

  const handleRemoveFromFavorites = (sku) => {
    const updatedFavorites = favorites.filter((item) => item !== sku);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="product-list">
        {favorites.map((sku) => (
          <ProductCard
            key={sku}
            sku={sku}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            addToFavoritesButton={false}
          />
        ))}
      </div>
    </div>
  );
}
