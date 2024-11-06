
// src/hooks/useOrders.jsx
import { useState, useEffect } from 'react';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      // Filtrera bort ogiltiga orders
      const validOrders = data.filter(order => order && typeof order === 'object');
      setOrders(validOrders);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching orders. Please try again later.');
      setLoading(false);
    }
  };

  return { orders, loading, error };
};

export default useOrders;

/*// src/hooks/useOrders.js
import { useState, useEffect } from 'react';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching orders. Please try again later.');
      setLoading(false);
    }
  };

  return { orders, loading, error };
};

export default useOrders;
*/