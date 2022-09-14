// Virtual properties are not reflected to the real data.
// But we can use them here.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// It is applied to a schema, not a model.
// From now on, I will add 'id' property
// and put the value of _id.toString() into it.
// Because we have to use 'this',
// the function form should be a regular (not arrow) function.
userSchema.virtual('id').get(function () {
  return this._id.toString();
});

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
    // In the object, there isn't 'id'.
    console.log(theUser);
    // But, we can access it.
    console.log(theUser.id);
  } catch (err) {
    console.error(err.message);
  }
})();

// Of course in the real data, there is not 'id'.
