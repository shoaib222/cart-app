import React, { useState } from 'react';

const Product = ({ name, price, onAddToCart, isAddedToCart, rating, onRatingChange }) => {
  return (
    <div className="product-card card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
        <div className="rating">
          <label>Rating: </label>
          <input type="number" min="0" max="5" value={rating} onChange={onRatingChange} />
        </div>
        <button
          className="btn btn-primary"
          disabled={isAddedToCart}
          onClick={onAddToCart}
        >
          {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
