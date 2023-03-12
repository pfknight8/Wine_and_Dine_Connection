const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = `${process.env.APP_SECRET}`

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
}

const verifyPassword = async (password, storedPassword) => {
  let verified = await bcrypt.compare(password, storedPassword);
  return verified;
}

const createToken = async (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
}

const verifyToken = async (req, res, next) => {
  //
  return 0;
}

const stripToken = async (req, res, next) => {
  //
  return 0;
}

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  verifyToken,
  stripToken
}