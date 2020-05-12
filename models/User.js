const { Schema, model } = require('mongoose');
const { isEmail, islength } = require('validator');

const UserSchema = new.Schema({
  email: {  
    type: String,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, "You must provide email address"]
  },
  password: {
    type: String,
    require: [true, "You must providee a password"],
    validate: [ (value) => islength(value, { min:6 }),'Your password must be at least 6 character long']
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', UserSchema);