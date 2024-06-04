import express from 'express';
import { addWorkout } from '../controllers/workoutController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-workout', auth, addWorkout);

export default router;
