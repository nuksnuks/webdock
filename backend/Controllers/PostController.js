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
        likedPost: 0,
        description: req.body.description,
        tag: req.body.tags,
        image: req.body.image
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    try {
      const postmark = require("postmark");
      const client = new postmark.ServerClient(process.env.EMAIL_KEY);
     //const { message } = req.body;
      client.sendEmail({ 
          "From": "uclfeedback@webdock.io",
          "To": "team7@outlook.dk",
          "Subject": "Webdock New Feature Request",
          "TextBody": req.body.description })
      .then(() => res.status(200).json({ message: 'Email sent successfully' }))
      .catch(err => console.error(err));
    } catch (error) {
      console.error("email is not emailing")
    }
  // Add other post-related controller methods...
  },

likePost: async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post by ID
    const post = await Post.findByPk(postId);

    if (!post) {
      console.log('Post not found');
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has already liked the post
    if (post.likedPost) {
      console.log('Removing like');
      // User has already liked the post, so remove the like
      post.likedPost = false;
      post.postLikeAmount -= 1;
    } else {
      console.log('Adding like');
      // User has not liked the post, so add a like
      post.likedPost = true;
      post.postLikeAmount += 1;
    }

    // Save the updated post
    await post.save();

    console.log('Post updated successfully:', post.toJSON());
    res.status(200).json({ message: 'Post liked/unliked successfully', liked: post.likedPost, likeCount: post.postLikeAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},


 
    updateLike: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findOne({ where: { id } });
      if (!post) {
        return res.status(404).send('Post not found');
      }
      const updatedPost = await post.update({
        likedPost: true,
        postLikeAmount: Sequelize.literal('postLikeAmount + 1')
      });
      return res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal server error');
    }
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
