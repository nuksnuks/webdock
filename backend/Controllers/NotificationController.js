// controllers/NotificationController.js
const { Notification } = require('../models/Notificationmodel.');

const NotificationController = {
  getAllNotifications: async (req, res) => {
    try {
      const notifications = await Notification.findAll();
      res.json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getNotificationById: async (req, res) => {
    const notificationId = req.params.id;
    try {
      const notification = await Notification.findByPk(notificationId);
      if (!notification) {
        return res.status(404).send('Notification not found');
      }
      res.json(notification);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other notification-related controller methods...
};

module.exports = NotificationController;
