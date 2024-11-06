
// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchAndSort from './components/SearchAndSort/SearchAndSort';
import OrderCard from './components/OrderCard/OrderCard';
import useOrders from './hooks/useOrders';
import { filterOrders, sortOrders } from './utils/orderUtils';
import './App.css';

const App = () => {
  const { orders, loading, error } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('eta');

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const filteredOrders = filterOrders(orders || [], searchTerm);
  const sortedOrders = sortOrders(filteredOrders, sortBy);

  return (
    <div className="app">
      <Header />
      
      <SearchAndSort 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="orders-container">
        {sortedOrders.length > 0 ? (
          sortedOrders.map(order => (
            <OrderCard key={order?.id || Math.random()} order={order} />
          ))
        ) : (
          <div className="no-results">No orders found</div>
        )}
      </div>
    </div>
  );
};

export default App;
