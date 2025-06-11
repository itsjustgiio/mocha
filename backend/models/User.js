const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wordsLearned: {
    type: Number,
    default: 0,
  },
  streak: {
    type: Number,
    default: 0, // number of consecutive days
  },
  lastActive: {
    type: Date,
    default: null, // used to track when they last logged in or did activity
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);