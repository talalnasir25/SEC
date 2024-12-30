// Navigation and view management
function navigateTo(section) {
    // Hide all sections
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    // Show selected section
    document.getElementById(section).classList.remove('hidden');
}

// Form handling
document.getElementById('createOrderForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
        customerName: document.getElementById('customerName').value,
        orderId: document.getElementById('orderId').value,
        productName: document.getElementById('productName').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        orderDate: document.getElementById('orderDate').value
    };
    saveOrder(formData);
});

document.getElementById('modifyOrderForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
        orderId: document.getElementById('searchOrderId').value,
    };
    updateOrder(formData);
});

// Order management functions
function saveOrder(formData) {
    console.log('Saving order:', formData);
    alert('Order saved successfully!');
    navigateTo('orderManagement');
}

function searchOrder() {
    const orderId = document.getElementById('searchOrderId').value;
    const mockOrder = {
        customerName: 'Mustafa Qureshi',
        orderId: '123456',
        productName: 'Coffee Beans',
        quantity: 2,
        price: 20,
        deliveryAddress: '18/4',
        orderDate: '2024-10-15'
    };
    fillModifyForm(mockOrder);
}

function fillModifyForm(order) {
    Object.keys(order).forEach(key => {
        const input = document.getElementById(key);
        if (input) input.value = order[key];
    });
}

function updateOrder(formData) {
    console.log('Updating order:', formData);
    alert('Order updated successfully!');
    navigateTo('orderManagement');
}

function deleteOrder() {
    const orderId = document.getElementById('cancelOrderId').value;
    if (!orderId) {
        alert('Please enter an Order ID');
        return;
    }

    if (confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
        console.log('Deleting order:', orderId);
        alert('Order deleted successfully!');
        navigateTo('orderManagement');
    }
}

function editOrder() {
    const orderId = document.getElementById('statusOrderId').textContent;
    navigateTo('modifyOrder');
    document.getElementById('searchOrderId').value = orderId;
    searchOrder();
}

document.addEventListener('DOMContentLoaded', function () {
    // Show the order management section by default
    navigateTo('orderManagement');

    // Set up mock order status data
    const statusOrder = {
        customerName: 'Mustafa Qureshi',
        orderId: '123456',
        productName: 'Coffee Beans',
        quantity: '2',
        price: '20',
        deliveryAddress: '18/4',
        orderDate: '10/15/2024'
    };

    // Fill order status section
    document.getElementById('statusCustomerName').textContent = statusOrder.customerName;
    document.getElementById('statusOrderId').textContent = statusOrder.orderId;
    document.getElementById('statusProductName').textContent = statusOrder.productName;
    document.getElementById('statusQuantity').textContent = statusOrder.quantity;
    document.getElementById('statusPrice').textContent = statusOrder.price;
    document.getElementById('statusDeliveryAddress').textContent = statusOrder.deliveryAddress;
    document.getElementById('statusOrderDate').textContent = statusOrder.orderDate;
});