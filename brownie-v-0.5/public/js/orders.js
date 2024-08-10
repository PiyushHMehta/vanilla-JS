document.addEventListener('DOMContentLoaded', () => {
    const ordersTableBody = document.getElementById('ordersTableBody');

    async function fetchOrders() {
        try {
            const response = await fetch('http://localhost:3000/orders');
            if (response.ok) {
                const orders = await response.json();
                displayOrders(orders);
            } else {
                console.error('Failed to fetch orders:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }

    function displayOrders(orders) {
        ordersTableBody.innerHTML = '';
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.name}</td>
                <td>${order.contact}</td>
                <td>${order.pieces}</td>
                <td>${formatDate(order.createdAt)}</td> <!-- Display formatted date/time -->
                <td><input type="checkbox" data-id="${order._id}" ${isChecked(order._id) ? 'checked' : ''} /></td>
            `;
            ordersTableBody.appendChild(row);

            // Save checkbox state to local storage
            const checkbox = row.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (event) => {
                localStorage.setItem(order._id, event.target.checked);
            });
        });
    }

    function formatDate(dateString) {
        const now = new Date();
        const orderDate = new Date(dateString);
        const diffMs = now - orderDate;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHrs = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffDays > 0) {
            return `${diffDays} days ago`;
        } else if (diffHrs > 0) {
            return `${diffHrs} hours ago`;
        } else if (diffMins > 0) {
            return `${diffMins} minutes ago`;
        } else {
            return 'Just now';
        }
    }

    function isChecked(orderId) {
        return localStorage.getItem(orderId) === 'true';
    }

    fetchOrders();
});
