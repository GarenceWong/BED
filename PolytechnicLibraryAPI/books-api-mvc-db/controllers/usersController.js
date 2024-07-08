const bcrypt = require('bcryptjs');
const User = require('../models/user'); 

async function registerUser(req, res) {
  const { username, password, role } = req.body;

  try {
    // Check for existing username
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in database
    await User.create({ username, password: hashedPassword, role });

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { registerUser };







