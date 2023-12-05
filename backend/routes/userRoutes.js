const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.');

// Define routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);

// todo: router.post('/users', UserController.createUser);
// todo: router.put('/users/:id', UserController.updateUser);
// todo: router.delete('/users/:id', UserController.deleteUser);
router.get('/user-dashboard', authenticationMiddleware, userController.getUserDashboard);
router.get('/admin-dashboard', authenticationMiddleware, adminMiddleware, UserController.getAdminDashboard);
module.exports = router;