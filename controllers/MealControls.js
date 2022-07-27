const { Meal } = require('../models')

//Controllers for the meal page
const placeMeal = async (req, res) => {
  try {
    const meal = await new Wine(req.body)
    await meal.save()
    return res.status(200).json({ meal })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllMeals = async (req, res) => {
  try {
    let meals = await Meal.find({})
    return res.status(200).json({ meals })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMeal = async (req, res) => {
  try {
    let { id } = req.params
    let meal = await Meal.find({ _id: id })
    return res.status(200).json({ meal })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const updateMeal = async (req, res) => {
  try {
    let { id } = req.params
    await Meal.findOneAndUpdate({ _id: id }, req.body)
    return res.status(200).json("Done")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMeal = async (req, res) => {
  try {
    const { id } = req.params
    const deletedMeal = await Meal.findByIdAndDelete({ _id: id })
    if (deletedMeal) {
      return res.status(200).send("Meal successfully deleted!")
    } else {
      throw new Error("Meal not found!")
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  placeMeal,
  getAllMeals,
  getMeal,
  updateMeal,
  deleteMeal
}