const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Vores routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser)
router.post('/login-sso', userController.loginUserWithSSO);
router.put('/users/:id', userController.updateUser);


// todo: router.post('/users', UserController.createUser);
// todo: router.delete('/users/:id', UserController.deleteUser);
// router.get('/user-dashboard', authenticationMiddleware, userController.getUserDashboard);
// router.get('/admin-dashboard', authenticationMiddleware, adminMiddleware, UserController.getAdminDashboard);
module.exports = router;