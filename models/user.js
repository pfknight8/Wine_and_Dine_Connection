const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String, enum: ["standard", "admin", "owner"], default: "standard"},
    password: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = UserSchema