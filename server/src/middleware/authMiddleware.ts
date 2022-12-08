import { verifyToken } from '../config/token';
import User from '../models/userModel';

export const protect = async (req: any, res: any, next: any) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded: any = await verifyToken(token);
      req.user = await User.findById(decoded.id).select('-password');
      return next();
    } catch (error: any) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};


