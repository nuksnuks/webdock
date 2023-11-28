const Post = require("../Models/postModel");

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).send('Post not found');
      }
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  createPost: async (req, res) => {
    try {

      const post = await Post.create({
        status: 'Under Review',
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tags,
        image: req.body.image
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  // Add other post-related controller methods...
  }
};  

module.exports = postController ;
