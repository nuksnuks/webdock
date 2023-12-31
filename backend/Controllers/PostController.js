const { Sequelize } = require('sequelize');
const { Post } = require("../models");
const { Op } = require('sequelize');
const https = require('https');

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
  
      const postmark = require("postmark");
      const client = new postmark.ServerClient(process.env.EMAIL_KEY);
      await client.sendEmail({ 
        "From": "uclfeedback@webdock.io",
        "To": "team7@outlook.dk",
        "Subject": "Webdock New Feature Request",
        "TextBody": req.body.description 
      });
  
      const data = JSON.stringify({
        userID: req.body.id,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
      });
  
      const options = { // jeg har her indsat detaljerne for http requesten
        hostname: 'webdock.io',
        port: 443,
        path: '/en/platform_data/feature_requests/new',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      };
  
      const request = https.request(options, response => { //Http funktion, hvor det andet argument er et callback som kommer når et response er der
        let data = '';
  
        response.on('data', chunk => { //eventlistener response på data, når en chunk af resonse body er modtaget.
          data += chunk;
        });
  
        response.on('end', () => { // end burde gerne være her at hele responset er modtaget, hvorefter jeg har console logget status code og body
          console.log('Response status code:', response.statusCode);
          console.log('Response body:', data);

          if (response.statusCode === 200) {
            res.status(200).json(JSON.parse(data));
          } else {
            console.error('Error posting data to endpoint');
            res.status(500).send('Error posting data to endpoint');
          }
        });
      });
  
      request.on('error', error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  
      request.write(data); //skriver hvad der var i dataen
      request.end(); //indikerer at den request er slut 
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

//Post Update controller
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
  
      // Return the search results
      res.json({ searchResults: posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.destroy({
        where: {
          postID: req.params.id
        }
      });
      
      if (post) {
        res.json({ message: 'Post deleted successfully', deletedCount: post });
      } else {
        res.json({ message: 'Post not found' });
      }
    } catch (error) {
      console.log(error); 
      res.json({ message: 'An error occurred', error: error.message });  // hvad går gaaaaaaalt her
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