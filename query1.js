// custom query

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
    const theUsers = await User.where('name').equals('Bada1').where('age').gt(0).lt(100);
    // Because queries can return many objects, the return values are in an array.
    console.log(theUsers);
  } catch (err) {
    console.error(err.message);
  }
})();
