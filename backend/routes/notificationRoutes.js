const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController.');

// Define routes
router.get('/notifications', notificationController.getAllNotifications);
router.get('/notifications/:id', notificationController.getNotificationById);

//todo: router.post('/notifications', NotificationController.createNotification);
//todo: router.put('/notifications/:id', NotificationController.updateNotification);
//todo: router.delete('/notifications/:id', NotificationController.deleteNotification);

module.exports = router;
