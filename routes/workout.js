import express from 'express';
import { addWorkout } from 'workoutController.js';

const router = express.Router();

router.post('addExercise', addWorkout);
