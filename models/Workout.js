const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema object
const workouts = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is Required"
      },
      name: {
        type: String,
        trim: true,
        required: "Name is Required"
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ]
});

//link schema
const Workout = mongoose.model("Workout", workouts);

//export schema
module.exports = Workout;