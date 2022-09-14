const mongoose = require('mongoose');

// Reference: Official Document > Guides > Connections
// Because of 'buffering', other function calls occur after 'connect' function call.
// So, we don't need to do async handling, such as 'await'.
// If you uncomment the code below, everything will happen after three seconds.
// setTimeout(() => {
//   mongoose.connect('mongodb://localhost:27017/mongoose');
// }, 3000);
mongoose.connect('mongodb://localhost:27017/mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// making and save a user
(async function () {
  const user1 = new User({ name: 'Bada', age: 1 });
  await user1.save();
  console.log(user1);
})();
