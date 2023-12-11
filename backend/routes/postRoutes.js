const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController');

// Define routes
router.get('/post', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.createPost);
router.delete('/posts/:id', postController.deletePost);
router.put('/post/:id', postController.updatePost);

//todo: router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
