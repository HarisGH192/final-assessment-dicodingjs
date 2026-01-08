// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  if (!customerName || !Array.isArray(items)) return null;
  const id = generateUniqueId();
  const totalPrice = items.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return sum + price;
  }, 0);
  const order = {
    id,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(order);
  return order;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (!order) return false;
  order.status = status;
  return true;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((o) => o.status === 'Selesai')
    .reduce((sum, o) => sum + (typeof o.totalPrice === 'number' ? o.totalPrice : 0), 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return false;
  orders.splice(idx, 1);
  return true;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
