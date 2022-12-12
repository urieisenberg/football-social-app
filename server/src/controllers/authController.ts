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
      return res.status(400).json({ message: 'Email already exists' });
    }
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: 'Username already exists' });
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
      });
      await user.save();
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Something went wrong' });
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
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        token: generateToken(user._id),
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.json({ message: 'Logout' });
  } catch (error: any) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
