const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController');

// Define routes
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);

router.get('/post', postController.getAllPosts)
router.post('/post', postController.createPost);
//todo: router.put('/posts/:id', PostController.updatePost);
//todo: router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
