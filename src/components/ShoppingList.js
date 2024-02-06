import React, { useState } from 'react';

function ShoppingList({ items }) {
  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Event handler for updating selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Dropdown to select category */}
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All Categories</option>
        {/* Add options for each category */}
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more options as needed */}
      </select>

      {/* Display filtered items */}
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {/* Render item details */}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

