const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/CommentController');

// Define routes
router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getCommentById);

router.post('/comments', commentController.createComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);
router.post('/comments/:id/like', commentController.likeComment);
module.exports = router;
