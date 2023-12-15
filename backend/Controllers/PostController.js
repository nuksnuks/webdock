const { Sequelize } = require('sequelize');
const { Post } = require("../models");
const { Op } = require('sequelize');

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
      console.log('Requested Post ID:', req.params.id);
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
          "To": "nicole.lefevre98@hotmail.com",
          "Subject": "Webdock New Feature Request",
          "TextBody": req.body.description })
      .then(() => res.status(200).json({ message: 'Email sent successfully' }))
      .catch(err => console.error(err));
    } catch (error) {
      console.error("email is not emailing")
    }
  
  },

  // Add post-upddate controller...
  updatePost: async (req, res) => {
    try {
      const postId = req.params.id;

      // Check if the post exists
      const post = await Post.findByPk(postId);

      if (!post) {
        return res.status(404).send('Post not found');
      }

      // Update post data based on the request body
      post.status = req.body.status || post.status;

      // Save the updated post data
      await post.save();

      res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;

      // Attempt to delete the post
      const deletedRowCount = await Post.destroy({
        where: { postID: postId },
      });

      // Check if the post was found and deleted
      if (deletedRowCount === 0) {
        return res.status(404).send('Post not found');
      }

      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },


  getPostByQuery: async (req, res) => {
    try {
      const { query } = req.query;
      console.log('Search Query:', query);

      if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
      }

      const posts = await Post.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${query}%` } }, // Partial title match
            { description: { [Op.like]: `%${query}%` } }, // Partial description match
            { tag: { [Op.like]: `%${query}%` } }, // Partial tag match
          ],
        },
      });

      console.log('Found Posts:', posts);

      if (posts.length === 0) {
        return res.status(404).json({ error: 'No matching posts found' });
      }
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },


  likePost: async (req, res) => {
    const postId = req.params.id;

    try {
      // Find the post by ID
      const post = await Post.findByPk(postId);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Check if the user has already liked the post
      if (post.likedPost) {
        // User has already liked the post, so remove the like
        post.likedPost = false;
        post.postLikeAmount -= 1;
      } else {
        // User has not liked the post, so add a like
        post.likedPost = true;
        post.postLikeAmount += 1;
      }

      // Save the updated post
      await post.save();

      res.status(200).json({ message: 'Post liked/unliked successfully', liked: post.likedPost, likeCount: post.postLikeAmount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // method for disliking a post 
  dislikePost: async (req, res) => {
    const postId = req.params.id;

    try {
      // Find the post by ID
      const post = await Post.findByPk(postId);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Check if the user has already disliked the post (you can use a separate field for disliking)
      if (post.dislikedPost) {
        // User has already disliked the post, so remove the dislike
        post.dislikedPost = false;
        post.postDislikeAmount -= 1;
      } else {
        // User has not disliked the post, so add a dislike
        post.dislikedPost = true;
        post.postDislikeAmount += 1;
      }

      // Save the updated post
      await post.save();

      res.status(200).json({ message: 'Post disliked/undisliked successfully', disliked: post.dislikedPost, dislikeCount: post.postDislikeAmount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  


  
};


module.exports = postController; 