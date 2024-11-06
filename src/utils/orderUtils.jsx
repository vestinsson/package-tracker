// src/utils/orderUtils.jsx
export const filterOrders = (orders, searchTerm) => {
  if (!orders) return [];
  
  return orders.filter(order => {
    const customerName = order?.customer_name?.toLowerCase() || '';
    const orderId = order?.id?.toString() || '';
    const searchTermLower = searchTerm?.toLowerCase() || '';
    
    return customerName.includes(searchTermLower) || 
           orderId.includes(searchTermLower);
  });
};

export const sortOrders = (orders, sortBy) => {
  if (!orders) return [];
  
  return [...orders].sort((a, b) => {
    switch (sortBy) {
      case 'eta':
        return new Date(a?.eta || 0) - new Date(b?.eta || 0);
      case 'status':
        return (a?.status || '').localeCompare(b?.status || '');
      case 'customer':
        return (a?.customer_name || '').localeCompare(b?.customer_name || '');
      default:
        return 0;
    }
  });
};
