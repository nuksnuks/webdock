const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController.');

// Define routes
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);

//todo: router.post('/posts', PostController.createPost);
//todo: router.put('/posts/:id', PostController.updatePost);
//todo: router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
