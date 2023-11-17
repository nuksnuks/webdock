// /Users/abd/projects/webdock/backend/routes/index.js
const express = require('express');
const router = express.Router();
const UserController = require('..Controllers/');
const middlewares = require('../Middlewares');
const UserController = require('../Controllers/UserController');
const PostController = require('../Controllers/PostController');

// Apply the logger middleware to all routes in this file
router.use(middlewares.loggerMiddleware);

// Apply the logger middleware to all routes in this file
// ... ( middleware code here )

// Define routes
router.get('/users', UserController.getAllUsers);
router.get('/secure-users', middlewares.authenticationMiddleware, UserController.getSecureUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser)


module.exports = router;
