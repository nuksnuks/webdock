// /Users/abd/projects/webdock/backend/routes/index.js
const express = require('express');
const router = express.Router();
const UserController = require('..Controllers/');
const middlewares = require('../Middlewares');

// Apply the logger middleware to all routes in this file
router.use(middlewares.loggerMiddleware);

// Define routes
router.get('/users', UserController.getAllUsers);

// Apply the authentication middleware only to the routes that need it
router.get('/secure-users', middlewares.authenticationMiddleware, UserController.getSecureUsers);

router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
