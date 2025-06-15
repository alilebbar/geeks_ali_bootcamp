const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const userController = {
  async register(req, res) {
    const { email, username, first_name, last_name, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userModel.registerUser(
        { email, username, first_name, last_name },
        { username, password: hashedPassword }
      );
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(username);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

      res.status(200).json({ message: 'Login successful', username });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await userModel.getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async updateUser(req, res) {
    const { id } = req.params;
    const { email, username, first_name, last_name } = req.body;

    try {
      const updated = await userModel.updateUser(id, {
        email,
        username,
        first_name,
        last_name,
      });
      res.status(200).json({ message: 'User updated successfully', updated });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
