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
import { addSets, deleteSet, updateSet } from '../controllers/setController.js';

const router = express.Router();

// Exercise Routes
router.get('/', auth, getWorkouts);
router.get('/:id', auth, getOneWorkout);
router.post('/add-workout', auth, addWorkout);
router.put('/update-workout/:id', auth, updateWorkout);
router.delete('/delete-workout/:id', auth, deleteWorkout);

// Exercise Routes
router.get('/:id/exercises', auth, getWorkoutExercises);
router.post('/:id/add-exercise', auth, addExercise);
router.put('/update-exercise/:id', auth, updateExercise);
router.delete('/delete-exercise/:id', auth, deleteExercise);

// Exercise Routes
router.post('/:id/sets', auth, addSets);
router.put('/update-set/:id', auth, updateSet);
router.delete('/delete-set/:id', auth, deleteSet);
export default router;
