const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  membershipStatus: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
