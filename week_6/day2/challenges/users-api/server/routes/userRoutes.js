const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /register : Créer un nouvel utilisateur
router.post('/register', userController.register);

// POST /login : Connexion
router.post('/login', userController.login);

// GET /users : Récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

// GET /users/:id : Récupérer un utilisateur par ID
router.get('/users/:id', userController.getUserById);

// PUT /users/:id : Modifier un utilisateur
router.put('/users/:id', userController.updateUser);

module.exports = router;
