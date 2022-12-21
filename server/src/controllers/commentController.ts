import { Request, Response } from 'express';
import { Comment } from '../models';
import { commentSchema as schema } from '../schemas';
import {
  findComment,
  findPost,
  validateSchema,
  validateUpdate,
  handleErrors,
} from '../helpers';

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
    handleErrors(res, error);
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await findComment(req.params.commentId);

    validateUpdate({
      req,
      res,
      Model: Comment,
      id: req.params.commentId,
    });

    validateSchema({ schema, req, res });

    comment.comment = req.body.updatedComment;
    if (comment) res.status(200).json(comment);
    await comment.save();
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const post = await findPost(req.params.postId);

    validateUpdate({
      req,
      res,
      Model: Comment,
      id: req.params.commentId,
    });

    await Comment.findByIdAndDelete(req.params.commentId);
    post.comments = post.comments.filter(
      (comment: any) => comment._id.toString() !== req.params.commentId
    );
    await post.save({
      timestamps: false,
    });
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error: any) {
    handleErrors(res, error);
  }
};
