const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');


// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // encrypt password
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'User registered', userId: result.insertId });
    });
  } catch {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';

  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: 'Username not found' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  });
});


// Get user profile
router.get('/:id', (req, res) => {
  const sql = 'SELECT id, username, email FROM users WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

router.post('/logout', (req, res) => {
  // Clear session or token (depends on auth setup)
  req.session?.destroy?.();
  res.status(200).json({ message: 'Logged out successfully' });
});

// Update user profile info
router.put('/:id', (req, res) => { 
  const { username, bio } = req.body;
  const sql = 'UPDATE users SET username = ?, bio = ? WHERE id = ?';
  db.query(sql, [username, bio, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Profile updated' });
  });
});

// Get list of a user's friends
router.get('/:id/friends', (req, res) => {
  const sql = `
    SELECT u.id, u.username FROM users u
    JOIN friendships f ON (f.friend_id = u.id)
    WHERE f.user_id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Send friend request
router.post('/:id/friends', (req, res) => {
  const { friend_id } = req.body;
  const sql = 'INSERT INTO friendships (user_id, friend_id) VALUES (?, ?)';
  db.query(sql, [req.params.id, friend_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Friend request sent' });
  });
});

// Remove a friend
router.delete('/:id/friends/:friendId', (req, res) => {
  const sql = 'DELETE FROM friendships WHERE user_id = ? AND friend_id = ?';
  db.query(sql, [req.params.id, req.params.friendId], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Friend removed' });
  });
});

// Search users by name
router.get('/search', (req, res) => {
  const { q } = req.query;
  const sql = 'SELECT id, username FROM users WHERE username LIKE ?';
  db.query(sql, [`%${q}%`], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});



module.exports = router;

