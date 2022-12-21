import { Request, Response } from 'express';
import { User, Post, Comment } from '../models';
import { commentSchema as schema } from '../schemas';
import { findComment, findPost, validateSchema } from '../helpers';

export const createComment = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const post = await findPost(req.params.postId);

    validateSchema({ schema, req, res });

    const newComment = new Comment({
      user: req.user.id,
      post: req.params.postId,
      comment: req.body.comment,
      pic: user.team.logo,
      username: user.username,
    });
    if (newComment) post.comments.push(newComment);
    await post.save({
      timestamps: false,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const post = await findPost(req.params.postId);
    const comment = await findComment(req.params.commentId);

    if (comment.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update comment');

    validateSchema({ schema, req, res });

    comment.comment = req.body.updatedComment;
    if (comment) res.status(200).json(comment);
    await comment.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const post = await findPost(req.params.postId);
    const comment = await findComment(req.params.commentId);

    if (comment.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete comment');

    await Comment.findByIdAndDelete(req.params.commentId);
    post.comments = post.comments.filter(
      (comment: any) => comment._id.toString() !== req.params.commentId
    );
    await post.save({
      timestamps: false,
    });
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
