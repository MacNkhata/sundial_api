import express from 'express';
import auth from '../middleware/auth.js';
import { getUsers, getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', auth, getUsers);

router.get('/:id', auth, getUser);

export default router;
