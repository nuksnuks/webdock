const Likes = require("../models/likeModel");

const likeController = {
  getAllLikes: async (req, res) => {
    try {
      const likes = await Likes.findAll();
      res.json(likes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getLikesById: async (req, res) => {
    try {
      const likes = await Likes.findByPk(req.params.id);
      if (!likes) {
        return res.status(404).send('Like status not found');
      }
      res.json(likes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

};

module.exports = likeController;
