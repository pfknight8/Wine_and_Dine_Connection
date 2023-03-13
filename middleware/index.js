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
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET);
    if (payload) {
      return next();
    } else {
      return res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// This function is here to be used for adding authentication over protected routes. Will be adding this into routes, such as "router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreatePost)"
const stripToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  verifyToken,
  stripToken
}