const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        }
      },
    ])
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });
};