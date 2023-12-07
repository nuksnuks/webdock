const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/CommentController');

// Define routes
router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getCommentById);

router.post('/comments', commentController.createComment);
//todo: router.put('/comments/:id', CommentController.updateComment);
//todo: router.delete('/comments/:id', CommentController.deleteComment);

module.exports = router;
