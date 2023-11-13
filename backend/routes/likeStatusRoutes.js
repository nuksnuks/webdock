const express = require('express');
const router = express.Router();
const LikeStatusController = require('../controllers/LikeStatusController.');

// Define routes
router.get('/like-statuses', LikeStatusController.getAllLikeStatuses);
router.get('/like-statuses/:id', LikeStatusController.getLikeStatusById);
router.post('/like-statuses', LikeStatusController.createLikeStatus);
router.put('/like-statuses/:id', LikeStatusController.updateLikeStatus);
router.delete('/like-statuses/:id', LikeStatusController.deleteLikeStatus);

module.exports = router;
