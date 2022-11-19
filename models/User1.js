const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    otp: {
      type: String,
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("User2", UserSchema);