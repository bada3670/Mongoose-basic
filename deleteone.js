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
    // delete
    const a = await User.deleteOne({ name: 'Bada1' });
    console.log(a); // { acknowledged: true, deletedCount: 1 }
  } catch (err) {
    console.error(err.message);
  }
})();
