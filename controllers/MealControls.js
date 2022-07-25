const { Meal } = require('../models')

//Controllers for the meal page
const getAllMeals = async (req, res) => {
  try {
    let meals = await Meal.find({})
    return res.status(200).json({ meals })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMeals
}