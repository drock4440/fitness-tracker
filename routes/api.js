const express = require('express');
const router = express.Router();
const Workout = require("../models/workouts.js");

router.put('/api/workouts/:id', async (req, res) => {
  try {
    const newExercise = await Workout.findByIdAndUpdate(req.params.id,
      {
        $push: {
          exercises: req.body
        }
      },
      { new: true })
    res.json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (err) {
    res.json(err);
  }
});

router.get('/api/workouts', async (req, res) => {
  try {
    const totalDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      },
    ]);
    res.json(totalDuration);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/api/workouts/range', async (req, res) => {
  try {
    const totalDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ]).sort({ _id: 1 }).limit(7)
    res.json(totalDuration);
    console.log(totalDuration);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;