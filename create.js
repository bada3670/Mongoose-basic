const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

(async function () {
  // const user1 = new User({ name: 'Bada', age: 1 });
  // await user1.save();
  // The codes above can be changed into this.
  const user1 = await User.create({ name: 'Bada', age: 1 });
  console.log(user1);
})();
