// controllers/CommentController.js
const { Comment } = require('../Models/CommentModel.');

const CommentController = {
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
    const commentId = req.params.id;
    try {
      const comment = await Comment.findByPk(commentId);
      if (!comment) {
        return res.status(404).send('Comment not found');
      }
      res.json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other comment-related controller methods...
};

module.exports = CommentController;