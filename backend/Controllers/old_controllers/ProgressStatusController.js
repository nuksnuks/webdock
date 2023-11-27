// controllers/ProgressStatusController.js
const { ProgressStatus } = require('../Models/ProgressStatusModel.');

const ProgressStatusController = {
  getAllProgressStatuses: async (req, res) => {
    try {
      const progressStatuses = await ProgressStatus.findAll();
      res.json(progressStatuses);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProgressStatusById: async (req, res) => {
    const progressStatusId = req.params.id;
    try {
      const progressStatus = await ProgressStatus.findByPk(progressStatusId);
      if (!progressStatus) {
        return res.status(404).send('Progress status not found');
      }
      res.json(progressStatus);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other progress status-related controller methods...
};

module.exports = ProgressStatusController;
