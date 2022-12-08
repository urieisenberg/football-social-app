import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);

router.use('/auth', router);

export { router as authRoutes };
