// controllers/FlagStatusController.js
const { FlagStatus } = require('../Models/FlagStatusModel.');

const FlagStatusController = {
  getAllFlagStatuses: async (req, res) => {
    try {
      const flagStatuses = await FlagStatus.findAll();
      res.json(flagStatuses);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getFlagStatusById: async (req, res) => {
    const flagStatusId = req.params.id;
    try {
      const flagStatus = await FlagStatus.findByPk(flagStatusId);
      if (!flagStatus) {
        return res.status(404).send('Flag status not found');
      }
      res.json(flagStatus);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other flag status-related controller methods...
};

module.exports = FlagStatusController;
