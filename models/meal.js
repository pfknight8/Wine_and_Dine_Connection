const { Schema } = require('mongoose')

const MealSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    wine_pairs: {
      sweetness: [{ type: String, required: false }],
      varietals: [{ type: String, required: false }],
    },
    user_posted: {type: Schema.Types.ObjectId, ref: "User"}
  },
  { timestamps: true }
)

module.exports = MealSchema