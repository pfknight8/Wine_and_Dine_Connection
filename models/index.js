const { model } = require("mongoose")
const WineSchema = require('./wine')
const MealSchema = require('./meal')
const UserSchema = require('./user')

const Wine = model("Wine", WineSchema)
const Meal = model("Meal", MealSchema)
const User = model("User", UserSchema)

module.exports = {
  Wine,
  Meal,
  User
}