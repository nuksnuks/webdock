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
        description: req.body.description,
        userID: req.body.userID,
        postID: req.body.postID,
        likedComment: 0,
        commentLikedAmount:0

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
  },

  likeComment: async (req, res) => {
    const commentId = req.params.id;

    try {
      // Find the comment by ID
      const comment = await Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      // Check if the user has already liked the comment
      if (comment.likedComment) {
        // User has already liked the comment, so remove the like
        comment.likedComment = false;
        comment.commentLikeAmount -= 1;
      } else {
        // User has not liked the comment, so add a like
        comment.likedComment = true;
        comment.commentLikeAmount += 1;
      }

      // Save the updated comment
      await comment.save();

      res.status(200).json({
        message: 'Comment liked/unliked successfully',
        liked: comment.likedComment,
        likeCount: comment.commentLikeAmount,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
};



module.exports = commentController