import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js';
import Set from '../models/Set.js';

// Add Set to Workout
export const addSets = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send('Workout not found');
    }
    const set = new Set({ ...req.body, workout: req.params.id });
    await set.save();
    res.status(201).send(set);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update Set
export const updateSet = async (req, res) => {
  try {
    const set = await Set.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!set) {
      return res.status(404).send('Set not found');
    }
    res.status(200).send(set);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Set
export const deleteSet = async (req, res) => {
  try {
    const set = await Set.findOneAndDelete({
      _id: req.params.id,
    });
    if (!set) {
      return res.status(404).send('Set not found');
    }
    res.status(200).send('Set deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};
