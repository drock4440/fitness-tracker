const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: [true, "type of workout"],
      },
      name: {
        type: String,
        required: [true, "Name of an exercise"],
      },
      duration: {
        type: Number,
        required: [true, "Duration of activity"],
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
