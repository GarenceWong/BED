const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../dbConfig');

async function register(req, res) {
  const { username, password, role } = req.body;

  try {
    const request = pool.request();

    const result = await request
      .input('username', sql.VarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (result.recordset.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await request
      .input('username', sql.VarChar, username)
      .input('passwordHash', sql.VarChar, hashedPassword)
      .input('role', sql.VarChar, role)
      .query(
        'INSERT INTO Users (username, passwordHash, role) VALUES (@username, @passwordHash, @role)'
      );

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const request = pool.request();

    const result = await request
      .input('username', sql.VarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.recordset[0];

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = { id: user.user_id, role: user.role };
    const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { register, login };


