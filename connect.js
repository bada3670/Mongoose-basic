const mongoose = require('mongoose');

// If the case is making a new database and not inserting any data,
// the database will not be made.
mongoose.connect(
  // The path (in this case 'mongoose') refers to the database.
  'mongodb://localhost:27017/mongoose',
  () => {
    console.log('connected');
  },
  (err) => {
    console.log(err);
  }
);
