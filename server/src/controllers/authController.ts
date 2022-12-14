import { Request, Response, NextFunction } from 'express';
import { User, IUser } from '../models/userModel';
import { generateToken, verifyToken } from '../config/token';
import { comparePassword, hashPassword } from '../config/bcrypt';
import { validateLogin, validateRegister } from '../validators';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, team } = req.body;
    const validated = validateRegister.safeParse({
      username,
      email,
      password,
      team,
    });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }
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
        follows: user.follows,
        followed: user.followed,
        profilePicture: user.team.logo,
        favFixtures: user.favFixtures,
      });
      await user.save();
    } else {
      res.status(400).send('Oops! Something went wrong');
    }
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const validated = validateLogin.safeParse({ email, password });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }
    const user = await User.findOne({ email });
    if (user && (await comparePassword(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        token: generateToken(user._id),
        follows: user.follows,
        followed: user.followed,
        profilePicture: user.team.logo,
        favFixtures: user.favFixtures,
      });
    } else {
      res.status(401).send('Email or Password is incorrect');
    }
  } catch (error: any) {
    res.status(500).send('Email or Password is incorrect');
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.json({ message: 'Logout' });
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
