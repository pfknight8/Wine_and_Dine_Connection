const { Wine } = require('../models')

// Controllers for the wine page

const getAllWines = async (req, res) => {
  try {
    let wines = await Wine.find({})
    return res.status(200).json({ wines })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getWine = async (req, res) => {
  try {
    let { id } = req.params
    let wine = await Wine.find({ _id: id })
    return res.status(200).json({ wine })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const placeWine = async (req, res) => {
  try {
    const wine = await new Wine(req.body)
    await wine.save()
    return res.status(200).json({ wine })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateWine = async (req, res) => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Controllers for the meals page


module.exports = {
  getAllWines,
  getWine,
  placeWine,
  updateWine
}