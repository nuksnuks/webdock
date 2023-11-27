const Likes = require("../Models/likeModel");

const LikeController = {
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
    const likeID = req.params.id;
    try {
      const likes = await Likes.findByPk(likeID);
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

module.exports = LikeController;