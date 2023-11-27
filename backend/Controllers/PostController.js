const Post = require("../Models/postModel");

const PostController = {
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
    const postID = req.params.id;
    try {
      const post = await Post.findByPk(postID);
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
      const { category, title, description, tags, picture } = req.body;

      const post = await Post.create({
        category, 
        title, 
        description, 
        tags, 
        picture
      });
    }catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  // Add other post-related controller methods...
  }
};  

module.exports = PostController;
