import { Request, Response } from 'express';
import { Post, User } from '../models';
import { validatePost } from '../validators/postSchema';

export const createPost = async (req: Request, res: Response) => {
  try {
    const { text, type } = req.body;
    const validated = validatePost.safeParse({ text, type });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const post = new Post({
      user: req.user.id,
      type: req.body.type,
      text,
      pic: user.team.logo,
      username: user.username,
      team: user.team.name,
      comments: [],
      likes: [],
    });

    if (post) await post.save();
    res.status(200).json(post);
  } catch (error: any) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { text, type } = req.body;
    const validated = validatePost.safeParse({ text, type });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');

    if (post.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update post');

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedPost) res.status(200).json(updatedPost);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');

    if (post.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete post');

    await post.remove();
    res.status(200).send('Post removed');
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({
      type: 'feed',
    }).sort({ date: -1 });
    if (posts) res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getTeamPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const posts = await Post.find({
      type: 'team',
      team: user.team.id,
    }).sort({ createdAt: -1 });
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${user.team.name}`);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const posts = await Post.find({
      type: 'feed',
      username: user.username,
    }).sort({ createdAt: -1 });
    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No posts found for ${user.username}`);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getLikedPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const posts = await Post.find({
      type: 'feed',
      likes: user.id,
    }).sort({ createdAt: -1 });

    if (posts) res.status(200).json(posts);
    else res.status(404).send(`No liked posts found for ${user.username}`);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
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
    res.status(500).send('Something went wrong');
  }
};

export const searchUserPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

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
    res.status(500).send('Something went wrong');
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');

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
    res.status(500).send('Something went wrong');
  }
};
