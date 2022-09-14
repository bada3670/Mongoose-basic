// 'immutablity' will be covered.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // here
    immutable: true,
  },
  age: Number,
});

const User = mongoose.model('User', userSchema);

(async function () {
  try {
    // create the data
    const user1 = await User.create({
      name: 'Bada',
      age: 1,
    });
    // The name will not be changed.
    user1.name = 'Bada1';
    user1.age = 2;
    await user1.save();
    console.log(user1);
  } catch (err) {
    console.error(err.message);
  }
})();
