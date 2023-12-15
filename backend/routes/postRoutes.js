const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController');

// Define routes
router.get('/post', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
