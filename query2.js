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
    const user3 = await User.create({
      name: 'Bada3',
      age: 1,
    });
    // find
    // We cannot write 'limit' right after 'User'.
    // 'where' clauses should come first.
    const theUsers = await User.where('age').gt(0).limit(2).select('name');
    console.log(theUsers);
  } catch (err) {
    console.error(err.message);
  }
})();
