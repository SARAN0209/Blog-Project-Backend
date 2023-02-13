const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    trim: true,
  },
  tags: [String],
  imageFile: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: { type: Date, default: new Date() },
  likeCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("blog", signupSchema);
