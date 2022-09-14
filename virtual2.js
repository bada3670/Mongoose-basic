// to make the result object have the virtual property

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

userSchema.virtual('id').get(function () {
  return this._id.toString();
});

userSchema.set('toObject', { virtuals: true });

const User = mongoose.model('User', userSchema);

(async function () {
  try {
    // create
    const user1 = await User.create({
      name: 'Bada',
      age: 1,
    });
    // find
    const theUser = await User.findOne();
    // Now, the object has 'id'.
    console.log(theUser);
  } catch (err) {
    console.error(err.message);
  }
})();
