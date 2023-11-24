// /Users/abd/projects/webdock/backend/routes/index.js
const express = require('express');
const router = express.Router();
const UserController = require('..Controllers/');
const middlewares = require('../Middlewares');

// middleware.authenticate er stadig tom
router.use(middlewares.loggerMiddleware);

// Define routes
router.get('/users', UserController.getAllUsers);

// middleware.authenticate er stadig tom
router.get('/secure-users', middlewares.authenticationMiddleware, UserController.getSecureUsers);

router.get('/users/:id', UserController.getUserById);

//todo: router.post('/users', UserController.createUser);
//todo: router.put('/users/:id', UserController.updateUser);
//todo: router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
