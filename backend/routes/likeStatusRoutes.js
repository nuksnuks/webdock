const express = require('express');
const router = express.Router();
const LikeController = require('../controllers/LikeController.');

// Define routes
router.get('/like', LikeController.getAllLikes);
router.get('/like/:id', LikeController.getLikesById);

// todo: router.post('/like', LikeController.createLike);
// todo: router.put('/like/:id', LikeController.updateLike);
// todo: router.delete('/like/:id', LikeController.deleteLike);

module.exports = router;
