const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController');

// Define routes
router.get('/post/search', postController.getPostByQuery);
router.get('/post', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.createPost);
router.delete('/post/:id', postController.deletePost);
router.put('/post/:id', postController.updatePost);
router.post('/post/:id/like', postController.likePost);
router.post('/post/:id/dislike', postController.dislikePost);

//todo: router.delete('/posts/:id', PostController.deletePost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
