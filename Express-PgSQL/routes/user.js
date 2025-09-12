const router = require('express').Router();
const pool = require('../config/db');
const auth = require('../middleware/auth');

// Get user profile
router.get('/', auth, async (req, res) => {
    try {
        const user = await pool.query(
            'SELECT user_id, user_name, user_email FROM users WHERE user_id = $1',
            [req.user]
        );
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
