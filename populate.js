// We can do SQL 'join'.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');

const productSchema = new mongoose.Schema({
  name: String,
});
const Product = mongoose.model('Product', productSchema);

const userSchema = new mongoose.Schema({
  name: String,
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: Product,
  },
});
const User = mongoose.model('User', userSchema);

(async function () {
  try {
    // create
    const product1 = await Product.create({
      name: 'computer',
    });
    const user1 = await User.create({
      name: 'Bada',
      productId: product1._id,
    });

    // populate
    const a = await User.where('name').equals('Bada').populate('productId');
    console.log(a); // (1)
  } catch (err) {
    console.error(err.message);
  }
})();

// Below is the result of (1).
[
  {
    _id: new ObjectId('6321467cb73a0e63adb01a0c'),
    name: 'Bada',
    productId: {
      _id: new ObjectId('6321467cb73a0e63adb01a09'),
      name: 'computer',
      __v: 0,
    },
    __v: 0,
  },
];
