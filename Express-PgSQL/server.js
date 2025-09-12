require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/user'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});