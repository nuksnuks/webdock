const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController.');

// Define routes
router.get('/comments', CommentController.getAllComments);
router.get('/comments/:id', CommentController.getCommentById);
router.post('/comments', CommentController.createComment);
router.put('/comments/:id', CommentController.updateComment);
router.delete('/comments/:id', CommentController.deleteComment);

module.exports = router;
