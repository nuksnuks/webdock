const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.');

// Define routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);

// todo: router.post('/users', UserController.createUser);
// todo: router.put('/users/:id', UserController.updateUser);
// todo: router.delete('/users/:id', UserController.deleteUser);
router.get('/user-dashboard', authenticationMiddleware, UserController.getUserDashboard);
router.get('/admin-dashboard', authenticationMiddleware, adminMiddleware, UserController.getAdminDashboard);
module.exports = router;