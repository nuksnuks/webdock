// controllers/LikeStatusController.js
const { LikeStatus } = require('../Models/LikeStatus.');

const LikeStatusController = {
  getAllLikeStatuses: async (req, res) => {
    try {
      const likeStatuses = await LikeStatus.findAll();
      res.json(likeStatuses);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getLikeStatusById: async (req, res) => {
    const likeStatusId = req.params.id;
    try {
      const likeStatus = await LikeStatus.findByPk(likeStatusId);
      if (!likeStatus) {
        return res.status(404).send('Like status not found');
      }
      res.json(likeStatus);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other like status-related controller methods...
};

module.exports = LikeStatusController;
