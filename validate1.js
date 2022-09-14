// Only data types will be covered.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const additionalSchema = new mongoose.Schema({
  k1: String,
  k2: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  premium: Boolean,
  createdAt: Date,
  // array: any types
  products: [],
  // array: only string
  productsName: [String],
  // object
  address: {
    state: String,
    city: String,
  },
  // another schema
  // Unlike designating an object, new '_id' is made.
  additional: additionalSchema,
});

const User = mongoose.model('User', userSchema);

(async function () {
  const user1 = await User.create({
    name: 'Bada',
    age: 1,
    premium: true,
    createdAt: new Date(),
    products: ['computer', 12345],
    productsName: ['computer'],
    address: {
      state: 'Texas',
      city: 'Austin',
    },
    additional: { k1: 'hi', k2: 2 },
  });
  const user2 = await User.create({
    // If we write a number in 'String' section,
    // it is automatically changed into string.
    // example: 10 -> '10'
    name: 10,
  });
  console.log(user1);
  console.log(user2);
})();
