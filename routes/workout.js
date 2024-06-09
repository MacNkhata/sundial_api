import express from 'express';
import {
  addWorkout,
  getWorkouts,
  getOneWorkout,
  getWorkoutExercises,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workoutController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getWorkouts);
router.get('/:id', auth, getOneWorkout);
router.post('/add-workout', auth, addWorkout);
router.put('/update-workout/:id', auth, updateWorkout);
router.delete('/delete-workout/:id', auth, deleteWorkout);
router.get('/:id/exercises', auth, getWorkoutExercises);

export default router;
