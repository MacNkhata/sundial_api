import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js';
import Set from '../models/Set.js';

// Create a workout Routine
export const addWorkout = async (req, res) => {
  const { workoutData, exercisesData, setsData } = req.body;

  try {
    const totalExerciseDuration = exercisesData.reduce(
      (sum, exercise) => sum + exercise.duration,
      0
    );
    const totalSetCount = setsData.reduce((sum, set) => sum + set.count, 0);
    const totalDuration = totalExerciseDuration * totalSetCount;

    const workout = new Workout({
      ...workoutData,
      duration: totalDuration,
      user: req.user._id,
    });
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

// Get all workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id });
    res.status(200).send(workouts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get one workout
export const getOneWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send('Workout not found');
    }
    res.status(200).send(workout);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a workout
export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!workout) {
      return res.status(404).send('Workout not found.');
    }
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a workout
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send('Workout not found');
    }
    res.status(200).send('Workout deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};
