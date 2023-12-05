const Comment = require("../Models/commentModel");

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

      const post = await Comment.create({
        description: req.body.description
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Sever Error');
    }
  }
  // Add other comment-related controller methods...
};

module.exports = CommentController