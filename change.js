const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

(async function () {
  const user1 = await User.create({ name: 'Bada', age: 1 });
  // Although the data is saved, we can change the data and save the changed data.
  user1.name = 'Bada1';
  await user1.save();
  console.log(user1);
})();
