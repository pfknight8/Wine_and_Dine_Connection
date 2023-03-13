const middleware = require("../middleware")
const { User } = require('../models')

const getUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await User.find({ _id: id });
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).send(error.message);
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
      let compareUserPwrd = await middleware.verifyPassword(req.body.password, user.password);
      // Logic for jwt.
      if (compareUserPwrd) {
        let payload = user.toJSON();
        let token = middleware.createToken(payload);
        return res.status(200).send({payload, token});
      } else {
        return res.status(403).send("Incorrect password.");
      }
    } else {
      return res.status(404).send("Username not found!");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let password = req.body.password;
    const user = await User.findOne({ _id: id });
    if (user) {
      //
      let compareUserPwrd = await middleware.verifyPassword(password, user.password);
      if (compareUserPwrd) {
        let deletUser = await User.findByIdAndDelete({ _id: id });
        if (deletUser) {
          return res.status(200).send({ message: 'Account has been deleted!' });
        } else {
          return res.status(400).send({ message: 'Unable to delete account!' });
        }
      } else {
        return res.status(403).send({ message: 'Unable to delete account, incorrect password!' });
      }
    } else {
      return res.status(404).send({ message: 'Username not found!' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Unable to delete account!' });
  }
}

module.exports = {
  getUser,
  createUser,
  loginUser,
  deleteUser
}