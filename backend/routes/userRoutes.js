const express = require('express');
const { UserController } = require('../Controllers/');
const router = express.Router();




// Define routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.get('/verify', UserController.verifyUser)

// todo: router.post('/users', UserController.createUser);
// todo: router.put('/users/:id', UserController.updateUser);
// todo: router.delete('/users/:id', UserController.deleteUser);

module.exports = router;