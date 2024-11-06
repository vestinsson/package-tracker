// src/components/OrderCard/OrderCard.jsx
import React from 'react';
import './OrderCard.css';

export const getStatusColor = (status) => {
  switch ((status || '').toLowerCase()) {
    case 'delivered':
      return '#4CAF50';
    case 'in transit':
      return '#2196F3';
    case 'pending':
      return '#FFC107';
    default:
      return '#9E9E9E';
  }
};

const OrderCard = ({ order }) => {
  if (!order) return null;

  return (
    <div className="order-card">
      <div className="order-header">
        <h3>Order #{order.id || 'N/A'}</h3>
        <span 
          className="status-badge"
          style={{ backgroundColor: getStatusColor(order.status) }}
        >
          {order.status || 'Unknown'}
        </span>
      </div>
      <div className="order-details">
        <p><strong>Customer:</strong> {order.customer_name || 'N/A'}</p>
        <p><strong>ETA:</strong> {order.eta ? new Date(order.eta).toLocaleDateString() : 'N/A'}</p>
        <p><strong>Pickup Location:</strong> {order.pickup_location || 'N/A'}</p>
        <p><strong>Destination:</strong> {order.destination || 'N/A'}</p>
      </div>
    </div>
  );
};

export default OrderCard;

/*// src/components/OrderCard/OrderCard.js
import React from 'react';
import './OrderCard.css';

export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return '#4CAF50';
    case 'in transit':
      return '#2196F3';
    case 'pending':
      return '#FFC107';
    default:
      return '#9E9E9E';
  }
};

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <h3>Order #{order.id}</h3>
        <span 
          className="status-badge"
          style={{ backgroundColor: getStatusColor(order.status) }}
        >
          {order.status}
        </span>
      </div>
      <div className="order-details">
        <p><strong>Customer:</strong> {order.customer_name}</p>
        <p><strong>ETA:</strong> {new Date(order.eta).toLocaleDateString()}</p>
        <p><strong>Pickup Location:</strong> {order.pickup_location}</p>
        <p><strong>Destination:</strong> {order.destination}</p>
      </div>
    </div>
  );
};

export default OrderCard; */