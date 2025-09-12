const router = require('express').Router();
const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        if (user.rows.length > 0) {
            return res.status(401).json('User already exists!');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // Save user to database
        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING * ',
            [name, email, bcryptPassword]
        );

        // Generate JWT token
        const token = jwt.sign({ user: newUser.rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(401).json('Invalid Credentials');
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        if (!validPassword) {
            return res.status(401).json('Invalid Credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ user: user.rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
