import { Request, Response } from 'express';
import { Post, User } from '../models';
import { postSchema as schema } from '../schemas/postSchema';
import {
  validateSchema,
  findPost,
  validateUpdate,
  handleErrors,
} from '../helpers';

export const createPost = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema, req, res });
    const user = req.user;

    const post = new Post({
      user: req.user.id,
      type: req.body.type,
      text: req.body.text,
      pic: user.team.logo,
      username: user.username,
      team: user.team.name,
      comments: [],
      likes: [],
    });

    if (post) await post.save();
    res.status(200).json(post);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema, req, res });

    validateUpdate({
      req,
      res,
      Model: Post,
      id: req.params.id,
    });

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedPost) res.status(200).json(updatedPost);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Post,
      id: req.params.id,
    });

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send('Post removed');
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({
      type: 'feed',
    }).sort({ date: -1 });
    if (posts) res.status(200).json(posts);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getTeamPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({
      type: 'team',
      team: req.user.team.id,
    }).sort({ createdAt: -1 });
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${req.user.team.name}`);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send('User not found');
    const posts = await Post.find({
      type: 'feed',
      username: user?.username,
    }).sort({ createdAt: -1 });
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${user?.username}`);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getLikedPosts = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const posts = await Post.find({
      type: 'feed',
      likes: user.id,
    }).sort({ createdAt: -1 });

    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No liked posts found for ${user.username}`);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const searchPosts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.params;
    const posts = await Post.find({
      type: 'feed',
      text: { $regex: searchTerm, $options: 'i' },
    })
      .sort({ createdAt: -1 })
      .exec();
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${searchTerm}`);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const searchUserPosts = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { searchTerm } = req.params;
    const posts = await Post.find({
      type: 'feed',
      username: user.username,
      text: { $regex: searchTerm, $options: 'i' },
    })
      .sort({ createdAt: -1 })
      .exec();
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${searchTerm}`);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const post = await findPost(req.params.id);

    const likes = post.likes.findIndex((id) => id === req.user.id);
    if (likes === -1) {
      post.likes.push(req.user.id);
    } else {
      post.likes = post.likes.filter((id) => id !== req.user.id);
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, {
      new: true,
      timestamps: false,
    });
    if (updatedPost) res.status(200).json(updatedPost);
    else res.status(404).send('Something went wrong');
  } catch (error: any) {
    handleErrors(res, error);
  }
};
