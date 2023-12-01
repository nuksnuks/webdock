
const express = require('express');
const router = express.Router();

// const middlewares = require('../Middlewares');
const { userController, postController} = require('../controllers');

// middleware.authenticate er stadig tom
// router.use(middlewares.loggerMiddleware);

// Define routes
router.get('/post', postController.getAllPosts);
router.post('/post', postController.createPost);

// middleware.authenticate er stadig tom
// router.get('/secure-users', middlewares.authenticationMiddleware, UserController.getSecureUsers);

router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);

// SSO Login Route
router.post('/login-sso', UserController.loginUserWithSSO);

//todo: router.post('/users', UserController.createUser);
//todo: router.put('/users/:id', UserController.updateUser);
//todo: router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
