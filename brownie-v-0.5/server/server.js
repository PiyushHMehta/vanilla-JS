const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB connection
mongoose.connect('mongodb+srv://jainpiyush1450:AALXfINWSWH96Nbt@cluster0.d68ltfm.mongodb.net/');

// Define the Order model directly in this file
const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    pieces: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', orderSchema);

// Route to serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to handle creating new orders
app.post('/api/orders', async (req, res) => {
    const { name, contact, pieces } = req.body;

    if (!name || !contact || isNaN(pieces) || pieces <= 0) {
        return res.status(400).json({ message: 'Invalid input data.' });
    }

    try {
        const newOrder = new Order({ name, contact, pieces });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Route to fetch all orders (for owner view)
// Route to fetch top 10 recent orders (for owner view)
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find()
            .sort({ _id: -1 }) // Sort by _id in descending order (newest first)
            .limit(10); // Limit to top 10 orders
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// mongodb+srv://jainpiyush1450:AALXfINWSWH96Nbt@cluster0.d68ltfm.mongodb.net/


