const { Wine } = require('../models')

// Controllers for the wine page
const placeWine = async (req, res) => {
  try {
    const wine = await new Wine(req.body)
    await wine.save()
    return res.status(200).json({ wine })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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


const updateWine = async (req, res) => {
  try {
    let { id } = req.params
    await Wine.findOneAndUpdate({ _id: id }, req.body)
    return res.status(200).json("Done")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteWine = async (req, res) => {
  try {
    const { id } = req.params
    const deletedWine = await Wine.findByIdAndDelete({ _id: id })
    if (deletedWine) {
      return res.status(200).send("Wine successfully deleted!")
    } else {
      throw new Error("Wine not found!")
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  placeWine,
  getAllWines,
  getWine,
  deleteWine,
  updateWine
}