import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js';
import Set from '../models/Set.js';

export const addWorkout = async (req, res) => {
  const { workoutData, exercisesData, setsData } = req.body;

  try {
    const workout = new Workout(workoutData);
    await workout.save();

    const exercises = await Promise.all(
      exercisesData.map(async (exercise) => {
        exercise.workout = workout.id;
        const newExercise = new Exercise(exercise);
        return await newExercise.save();
      })
    );

    const sets = await Promise.all(
      setsData.map(async (set) => {
        set.workout = workout._id;
        const newSet = new Set(set);
        return await newSet.save();
      })
    );

    res.status(201).send({ workout, exercises, sets });
  } catch (error) {
    res.status(400).send(error);
  }
};
