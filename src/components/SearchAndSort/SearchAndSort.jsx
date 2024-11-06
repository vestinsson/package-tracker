// src/components/SearchAndSort/SearchAndSort.jsx
import React from 'react';
import './SearchAndSort.css';

const SearchAndSort = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search by customer name or order ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <select 
        value={sortBy} 
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-select"
      >
        <option value="eta">Sort by ETA</option>
        <option value="status">Sort by Status</option>
        <option value="customer">Sort by Customer Name</option>
      </select>
    </div>
  );
};

export default SearchAndSort;
