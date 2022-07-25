const { Schema } = require('mongoose')

const MealSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = MealSchema