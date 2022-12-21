import { Request, Response } from 'express';
import { User, IUser } from '../models/userModel';
import { generateToken } from '../config/token';
import { comparePassword, hashPassword } from '../config/bcrypt';
import { loginSchema, registerSchema } from '../schemas';
import { validateSchema, handleErrors } from '../helpers';

export const register = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema: registerSchema, req, res });
    const { username, email, password, team } = req.body;
    const userEmailExists = await User.findOne({ email });
    if (userEmailExists) {
      return res.status(400).send('Email already exists');
    }
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).send('Username already exists');
    }

    const hashedPassword = await hashPassword(password);
    const user: IUser = new User({
      username,
      email,
      password: hashedPassword,
      team,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        token: generateToken(user._id),
        following: user.following,
        followers: user.followers,
        profilePicture: user.team.logo,
        favFixtures: user.favFixtures,
      });
      await user.save();
    } else {
      res.status(400).send('Oops! Something went wrong');
    }
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema: loginSchema, req, res });
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await comparePassword(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        token: generateToken(user._id),
        following: user.following,
        followers: user.followers,
        profilePicture: user.team.logo,
        favFixtures: user.favFixtures,
      });
    } else {
      res.status(401).send('Email or Password is incorrect');
    }
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.json({ message: 'Logout' });
  } catch (error: any) {
    handleErrors(res, error);
  }
};
