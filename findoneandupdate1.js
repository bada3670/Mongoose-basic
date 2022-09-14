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
    // update
    const a = await User.findOneAndUpdate({ name: 'Bada1' }, { $set: { age: '2' } });
    console.log(a);
    // In 'a', the age is still 1.
    // However, if you look at the real data, the age is changed.
  } catch (err) {
    console.error(err.message);
  }
})();
