const Notification = require("../models/notificationModel");

const notificationController = {
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
    try {
      const notification = await Notification.findByPk(req.params.id);
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

module.exports = notificationController;
