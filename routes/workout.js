import express from 'express';
import auth from '../middleware/auth.js';
import {
  addWorkout,
  getWorkouts,
  getOneWorkout,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workoutController.js';
import {
  addExercise,
  deleteExercise,
  getWorkoutExercises,
  updateExercise,
} from '../controllers/exerciseController.js';

const router = express.Router();

router.get('/', auth, getWorkouts);
router.get('/:id', auth, getOneWorkout);
router.post('/add-workout', auth, addWorkout);
router.put('/update-workout/:id', auth, updateWorkout);
router.delete('/delete-workout/:id', auth, deleteWorkout);
router.get('/:id/exercises', auth, getWorkoutExercises);
router.post('/:id/add-exercise', auth, addExercise);
router.put('/update-exercise/:id', auth, updateExercise);
router.delete('/delete-exercise/:id', auth, deleteExercise);

export default router;
