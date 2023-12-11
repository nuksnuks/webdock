const { Comment } = require("../models");

const commentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll();
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        return res.status(404).send('Comment not found');
      }
      res.json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  createComment: async (req, res) => {
    try {

      const comment = await Comment.create({
        userID: req.body.userID,
        postID: req.body.postID,
        description: req.body.description
        
          
      });
      res.status(201).json(comment);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Sever Error');
    }
  },
  updateComment: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        return res.status(404).send('Comment not found');
      }

      // Assuming you want to update the description
      comment.description = req.body.description;
      await comment.save();

      res.json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        return res.status(404).send('Comment not found');
      }

      await comment.destroy();
      res.status(204).send(); // No content for successful deletion
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
};



module.exports = commentController