const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    confirmpassword: {
      type: String,
      trim: true,
    },

    id: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", signupSchema);
