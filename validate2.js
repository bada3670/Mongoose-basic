// Other things, as well as data types will be covered.
// To write those, we have to use an object.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const additionalSchema = new mongoose.Schema({
  k1: String,
  k2: Number,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 100,
  },
  email: {
    type: String,
    minLength: 1,
    required: true,
    lowercase: true,
    validate: {
      validator: (p1) => (p1.includes('@') ? true : false),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model('User', userSchema);

(async function () {
  try {
    const user1 = await User.create({
      age: 1,
      email: 'asdf',
    });
    console.log(user1);
  } catch (err) {
    // It will show you all the errors.
    console.error(err.message);
  }
})();
