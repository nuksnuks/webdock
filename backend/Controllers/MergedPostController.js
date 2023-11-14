// controllers/MergedPostController.js
const { MergedPost } = require('../Models/MergedPostModel.');

const MergedPostController = {
  getAllMergedPosts: async (req, res) => {
    try {
      const mergedPosts = await MergedPost.findAll();
      res.json(mergedPosts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getMergedPostById: async (req, res) => {
    const mergedPostId = req.params.id;
    try {
      const mergedPost = await MergedPost.findByPk(mergedPostId);
      if (!mergedPost) {
        return res.status(404).send('Merged post not found');
      }
      res.json(mergedPost);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other merged post-related controller methods...
};

module.exports = MergedPostController;
