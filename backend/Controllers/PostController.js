const { Sequelize } = require('sequelize');
const { Post } = require("../models");

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
        userID: req.body.id,
        status: 'Under Review',
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tags,
        image: req.body.image
      });
      
      const client = new postmark.ServerClient(process.env.EMAIL_KEY);
      const postmark = require("postmark");
      const { message } = req.body;
      client.sendEmail({
          "From": "uclfeedback@webdock.io",
          "To": "nicole.lefevre98@hotmail.com",
          "Subject": "Webdock New Feature Request",
          "TextBody": message })
      .then(() => res.status(200).json({ message: 'Email sent successfully' }))
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  // Add other post-related controller methods...
  },
  updatePost: async (req, res) => {
    try {
      const post = await Post.update({
        status: req.body.status
      });
      
    } catch (error) {
      
    }
  }
};  

module.exports = postController;
