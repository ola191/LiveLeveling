const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  password: String,
  twoFactorEnabled: { type: Boolean, default: false },
  twoFactorCode: String
});

module.exports = mongoose.model('User', userSchema);
