const { model } = require("mongoose")
const WineSchema = require('./wine')
const MealSchema = require('./meal')

const Wine = model("Wine", WineSchema)
const Meal = model("Meal", MealSchema)

module.exports = {
  Wine,
  Meal
}