const { Wine } = require('../models')

const getWine = async (req, res) => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getWine
}