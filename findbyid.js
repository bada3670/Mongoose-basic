const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

(async function () {
  try {
    // create
    const user1 = await User.create({
      name: 'Bada1',
      age: 1,
    });
    const user2 = await User.create({
      name: 'Bada2',
      age: 1,
    });
    // find
    const id = user1._id.toString();
    const theUser = await User.findById(id);
    console.log(theUser);
  } catch (err) {
    console.error(err.message);
  }
})();
