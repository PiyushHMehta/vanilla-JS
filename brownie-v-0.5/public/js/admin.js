document.addEventListener('DOMContentLoaded', () => {
    const viewOrdersBtn = document.getElementById('viewOrdersBtn');
    const adminModal = document.getElementById('adminModal');
    const closeBtn = document.querySelector('.close-btn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const correctPassword = 'yourSecurePassword'; // Change this to your secure password

    viewOrdersBtn.addEventListener('click', () => {
        adminModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        adminModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === adminModal) {
            adminModal.style.display = 'none';
        }
    });

    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const passwordInput = document.getElementById('adminPassword').value;

        if (passwordInput === correctPassword) {
            // Redirect to orders page
            window.location.href = 'orders.html';
        } else {
            alert('Incorrect password.');
        }
    });
});
