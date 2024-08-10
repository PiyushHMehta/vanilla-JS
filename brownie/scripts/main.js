document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderModal = document.getElementById('order-modal');
    const closeBtn = document.querySelector('.close-btn');
    const placeOrderBtn = document.getElementById('place-order-btn');

    checkoutBtn.addEventListener('click', () => {
        if (firebase.auth().currentUser) {
            orderModal.style.display = 'block';
            document.getElementById('user-info').innerText = `Logged in as: ${firebase.auth().currentUser.displayName}`;
        } else {
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((result) => {
                    orderModal.style.display = 'block';
                    document.getElementById('user-info').innerText = `Logged in as: ${result.user.displayName}`;
                })
                .catch((error) => {
                    console.error('Error during sign-in:', error);
                });
        }
    });

    closeBtn.addEventListener('click', () => {
        orderModal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == orderModal) {
            orderModal.style.display = 'none';
        }
    };

    placeOrderBtn.addEventListener('click', () => {
        const numberOfPieces = document.getElementById('pieces').value;

        if (firebase.auth().currentUser && numberOfPieces) {
            const orderData = {
                user: firebase.auth().currentUser.email,
                pieces: numberOfPieces
            };

            db.collection('orders').add(orderData)
                .then(() => {
                    // Send an email using Firebase Functions
                    sendOrderEmail(firebase.auth().currentUser.email, numberOfPieces);
                })
                .catch((error) => {
                    console.error('Error placing order:', error);
                });
        } else {
            alert('Please log in and enter the number of pieces.');
        }
    });
});

// Function to call Firebase Function to send an email
function sendOrderEmail(userEmail, pieces) {
    const sendOrderEmail = firebase.functions().httpsCallable('sendOrderEmail');
    sendOrderEmail({ userEmail, pieces })
        .then((result) => {
            alert('Order placed successfully!');
            document.getElementById('order-modal').style.display = 'none';
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
}
