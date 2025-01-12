const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  link: String,
});

module.exports = mongoose.model('Data', DataSchema);
