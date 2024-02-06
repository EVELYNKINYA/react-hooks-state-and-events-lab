import React, { useState } from 'react';

function Item() {
  // State variable to track whether the item is in the cart
  const [isInCart, setInCart] = useState(false);

  // Event handler for toggling item in and out of the cart
  const toggleCartStatus = () => {
    setInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {/* Item details */}
      <h3>Item Name</h3>
      <p>Item Description</p>

      {/* Button to add/remove from the cart */}
      <button onClick={toggleCartStatus}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
