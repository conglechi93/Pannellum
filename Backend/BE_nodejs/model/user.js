var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre('save', async function (next) {
  try {
    if (this.isNew || this.isModified(this.password)) {
      var salt = await bcrypt.genSalt(+process.env.SALT_ROUND_NUMBER);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', UserSchema);
