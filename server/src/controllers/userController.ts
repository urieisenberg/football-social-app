import { Request, Response } from 'express';
import { User } from '../models';
import { userUpdateSchema as schema } from '../schemas';
import {
  findUser,
  validateSchema,
  validateUpdate,
  handleErrors,
} from '../helpers';

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      '-password'
    );
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    await user.remove();
    res.status(200).send('User deleted');
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    validateSchema({ schema, req, res });
    const { username, email, password } = req.body;
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password;
    await user.save();
    res.status(200).json(user);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const followUser = async (req: Request, res: Response) => {
  try {
    if (req.user.id === req.params.id)
      return res.status(400).send('You cannot follow yourself');
    const currentUser = await findUser(req.user.id);
    const userToFollow = await findUser(req.params.id);
    if (currentUser.following.includes(req.params.id))
      return res.status(400).send('You already follow this user');
    await User.findOneAndUpdate(
      { _id: currentUser._id },
      { $push: { following: req.params.id } }
    );
    await User.findOneAndUpdate(
      { _id: userToFollow._id },
      { $push: { followers: req.user.id } }
    );
    res.status(200).json(req.params.id);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    if (req.user.id === req.params.id)
      return res.status(400).send('You cannot unfollow yourself');
    const currentUser = await findUser(req.user.id);
    const userToUnfollow = await findUser(req.params.id);
    if (!currentUser.following.includes(req.params.id))
      return res.status(400).send('You do not follow this user');
    await User.findOneAndUpdate(
      { _id: currentUser._id },
      { $pull: { following: req.params.id } }
    );
    await User.findOneAndUpdate(
      { _id: userToUnfollow._id },
      { $pull: { followers: req.user.id } }
    );
    res.status(200).json(req.params.id);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.params.id);
    const followers = await Promise.all(
      user.followers.map((follower) => {
        return findUser(follower);
      })
    );
    let followersList: {
      _id: string;
      username: string;
      followers: string[];
      following: string[];
      team: string;
      pic: string;
    }[] = [];
    followers.map((follower) => {
      const { _id, username, followers, following, team } = follower;
      followersList.push({
        _id,
        username,
        followers,
        following,
        team: team.name,
        pic: team.logo,
      });
    });
    res.status(200).json(followersList);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getFollowing = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.params.id);
    const following = await Promise.all(
      user.following.map((follow) => {
        return findUser(follow);
      })
    );
    let followingList: {
      _id: string;
      username: string;
      followers: string[];
      following: string[];
      team: string;
      pic: string;
    }[] = [];
    following.map((follow) => {
      const { _id, username, followers, following, team } = follow;
      followingList.push({
        _id,
        username,
        followers,
        following,
        team: team.name,
        pic: team.logo,
      });
    });
    res.status(200).json(followingList);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const saveFavFixtures = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.params.id);
    if (user.favFixtures.some((f) => f?.id === req.body.id)) {
      return res.status(400).send('You already have this fixture saved');
    }
    user.favFixtures.push(req.body);
    await user.save();
    res.status(200).json(user.favFixtures);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteFavFixture = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.params.id);
    if (!user.favFixtures.some((f) => f?.id === req.body?.id)) {
      return res.status(400).send('You do not have this fixture saved');
    }
    user.favFixtures = user.favFixtures.filter((f) => f?.id !== req.body?.id);
    await user.save();
    res.status(200).json(user.favFixtures);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getFavFixtures = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.params.id);
    res.status(200).json(user.favFixtures);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

// const followUser = async (req: Request, res: Response) => {
//   try {
//     if (req.user.id === req.params.id)
//       return res.status(400).send('You cannot follow yourself');
//     const userToFollow = await User.findById(req.params.id);
//     const currentUser = await User.findById(req.user.id);
//     if (!currentUser || !userToFollow)
//       return res.status(404).send('User not found');
//     if (currentUser.following.includes(req.params.id))
//       return res.status(400).send('You already follow this user');
//     currentUser.following.push(req.params.id);
//     userToFollow.followers.push(req.user.id);
//     await currentUser.save();
//     await userToFollow.save();
//     res.status(200).json(req.params.id);
//   } catch (error: any) {
//     res.status(500).send('Something went wrong');
//   }
// };

// const unfollowUser = async (req: Request, res: Response) => {
//   try {
//     if (req.user.id === req.params.id)
//       return res.status(400).send('You cannot unfollow yourself');
//     const userToUnfollow = await User.findById(req.params.id);
//     const currentUser = await User.findById(req.user.id);
//     if (!currentUser || !userToUnfollow)
//       return res.status(404).send('User not found');
//     if (!currentUser.following.includes(req.params.id))
//       return res.status(400).send('You do not follow this user');
//     currentUser.following = currentUser.following.filter(
//       (id) => id !== req.params.id
//     );
//     userToUnfollow.followers = userToUnfollow.followers.filter(
//       (id) => id !== req.user.id
//     );
//     await currentUser.save();
//     await userToUnfollow.save();
//     res.status(200).json(req.params.id);
//   } catch (error: any) {
//     res.status(500).send('Something went wrong');
//   }
// };
