const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController.');

// Define routes
router.get('/notifications', NotificationController.getAllNotifications);
router.get('/notifications/:id', NotificationController.getNotificationById);

//todo: router.post('/notifications', NotificationController.createNotification);
//todo: router.put('/notifications/:id', NotificationController.updateNotification);
//todo: router.delete('/notifications/:id', NotificationController.deleteNotification);

module.exports = router;
