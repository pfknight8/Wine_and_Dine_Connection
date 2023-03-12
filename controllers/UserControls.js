const middleware = require("../middleware")
const { User } = require('../models')

const getUser = async (req, res) => {
  try {
    let { id } = req.params
    let user = await User.find({ _id: id })
    return res.status(200).json({user})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    let hashedPwrd = await middleware.hashPassword(req.body.password);
    let newUser = await new User({...req.body, password: hashedPwrd});
    await newUser.save();
    return res.status(200).json({newUser});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const loginUser = async (req, res) => {
  try {
    let user = await User.findOne({username: req.body.username});
    if (user) {
      let compareUser = await middleware.verifyPassword(req.body.password, user.password);
      // Logic for jwt.
      return res.status(200).json({user});
    } else {
      return res.status(404).send("Username not found!");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getUser,
  createUser,
  loginUser,
}