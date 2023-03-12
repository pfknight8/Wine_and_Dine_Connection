const { Schema, default: mongoose } = require('mongoose')
const bcrypt = require("bcrypt")

const UserSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        role: "Role"
      }
    ],
    password: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = UserSchema