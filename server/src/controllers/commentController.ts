import { Request, Response } from 'express';
import { User, Post, Comment } from '../models';
import { validateComment } from '../validators';

export const createComment = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send('Post not found');

    const { comment } = req.body;
    const validated = validateComment.safeParse({ comment });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    const newComment = new Comment({
      user: req.user.id,
      post: req.params.postId,
      comment,
      pic: user.team.logo,
      username: user.username,
    });
    if (newComment) post.comments.push(newComment);     
    await post.save();
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');

    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).send('Comment not found');

    if (comment.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update comment');

    const { updatedComment } = req.body;
    const validated = validateComment.safeParse({ updatedComment });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    comment.comment = updatedComment;
    if (comment) res.status(200).json(comment);
    await comment.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send('Post not found');

    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).send('Comment not found');

    if (comment.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete comment');

    await Comment.findByIdAndDelete(req.params.commentId);
    post.comments = post.comments.filter(
      (comment: any) => comment._id.toString() !== req.params.commentId
    );
    await post.save();
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};



