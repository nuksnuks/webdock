// /Users/abd/projects/webdock/backend/routes/index.js
const express = require('express');
const router = express.Router();

// const middlewares = require('../Middlewares');
const { PostController, UserController } = require('../Controllers');

// middleware.authenticate er stadig tom
// router.use(middlewares.loggerMiddleware);

// Define routes
router.get('/post', PostController.getAllPosts);
router.post('/post', PostController.createPost);

// middleware.authenticate er stadig tom
// router.get('/secure-users', middlewares.authenticationMiddleware, UserController.getSecureUsers);

router.get('/users/:id', UserController.getUserById);
router.get('/users', UserController.getAllUsers);

//todo: router.post('/users', UserController.createUser);
//todo: router.put('/users/:id', UserController.updateUser);
//todo: router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
