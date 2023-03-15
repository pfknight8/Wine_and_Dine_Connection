const { Schema } = require('mongoose')

const WineSchema = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    varietal: { type: String, required: true },
    category: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    sweetness: { type: String, required: true },
    price_range: { type: String, required: true },
    image: {type: String, required: false },
    user_posted: {type: Schema.Types.ObjectId, ref: "User"}
  },
  { timestamps: true }
)

module.exports = WineSchema