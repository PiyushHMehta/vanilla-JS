document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderModal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.close-btn');
    const orderBtn = document.getElementById('orderBtn');

    checkoutBtn.addEventListener('click', () => {
        orderModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        orderModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });

    orderBtn.addEventListener('click', async () => {
        const customerName = document.getElementById('customerName').value;
        const customerContact = document.getElementById('customerContact').value;
        const numberOfPieces = parseInt(document.getElementById('numberOfPieces').value, 10);

        if (!customerName || !customerContact || isNaN(numberOfPieces) || numberOfPieces <= 0) {
            Toastify({
                text: "Please fill in all fields correctly.",
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                duration: 3000
            }).showToast();
            return;
        }

        const orderData = {
            name: customerName,
            contact: customerContact,
            pieces: numberOfPieces
        };

        try {
            const response = await fetch('http://localhost:3000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                Toastify({
                    text: "Order placed successfully!",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    duration: 3000
                }).showToast();
                orderModal.style.display = 'none';
            } else {
                Toastify({
                    text: "Failed to place order.",
                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                    duration: 3000
                }).showToast();
            }
        } catch (error) {
            console.error('Error:', error);
            Toastify({
                text: "An error occurred while placing the order.",
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                duration: 3000
            }).showToast();
        }
    });
});
