import express from 'express';
import {
  addWorkout,
  getWorkouts,
  getOneWorkout,
  getWorkoutExercises,
} from '../controllers/workoutController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getWorkouts);
router.get('/:id', auth, getOneWorkout);
router.get('/:id/exercises', getWorkoutExercises);
router.post('/add-workout', auth, addWorkout);

export default router;
