const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, trim: true, minlength: 3},
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date ,default: Date.now},
  phone:{ type: Number },
  gender: { type: String,  },
}
);

module.exports = User = mongoose.model('users', userSchema)