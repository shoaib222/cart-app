import React, { useState } from 'react';
import Product from "./product";
import Cart from "./cart";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app container">
      <div className="row">
        <div className="col-md-6">
          <Product
            name="Product 1"
            price="$10"
            onAddToCart={() => handleAddToCart({ name: 'Product 1', price: '$10' })}
            isAddedToCart={cartItems.some((item) => item.name === 'Product 1')}
          />
          <br></br>
          <Product
            name="Product 2"
            price="$20"
            onAddToCart={() => handleAddToCart({ name: 'Product 2', price: '$20' })}
            isAddedToCart={cartItems.some((item) => item.name === 'Product 2')}
          />
        </div>
        <div className="col-md-6">
          <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
