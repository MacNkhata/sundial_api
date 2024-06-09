import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js';
import Set from '../models/Set.js';

// Get Exercises associated with a workout
export const getWorkoutExercises = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    const exercises = await Exercise.find({ workout: req.params.id });

    if (!exercises.length) {
      return res.status(404).send('No exercises were found for this workout');
    }

    res.status(200).send({ workout, exercises });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addExercise = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send('Workout not found');
    }
    const exercise = new Exercise({
      ...req.body,
      workout: req.params.id,
    });
    await exercise.save();

    const exercises = await Exercise.find({ workout: req.params.id });
    const totalExerciseDuration = exercises.reduce(
      (sum, exercise) => sum + exercise.duration,
      0
    );

    const sets = await Set.find({ workout: req.params.id });
    const totalSetCount = sets.reduce((sum, set) => sum + set.count, 0);
    const totalDuration = totalExerciseDuration * totalSetCount;

    workout.duration = totalDuration;
    await workout.save();

    res.status(201).send(exercise);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!exercise) {
      return res.status(404).send('Exercise not found');
    }

    res.status(200).send(exercise);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOneAndDelete({ _id: req.params.id });
    if (!exercise) {
      return res.status(404).send('Exercise not found.');
    }
    res.status(200).send('Exercise deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};
