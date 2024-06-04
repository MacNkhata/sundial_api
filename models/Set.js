import mongoose, { mongo } from 'mongoose';

const setSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout',
    required: true,
  },
});

const Set = mongoose.model('Set', setSchema);

export default Set;
