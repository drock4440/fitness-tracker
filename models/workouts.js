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
        required: [true, "You must enter what type of workout this is"],
      },
      name: {
        type: String,
        required: [true, "You must enter an exercise"],
      },
      duration: {
        type: Number,
        required: [true, "How long did you do this activity?"],
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
