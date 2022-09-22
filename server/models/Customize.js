const mongoose = require('mongoose');

const { Schema } = mongoose;

const customizeSchema = new Schema({
  size: {
    type: String,
    default: "Small"
  },
  brand: {
      type: String,
      default: "None"
  },
  color: {
      type: String,
      default: "None"
  }
});

const Customize = mongoose.model('Customize', customizeSchema);

module.exports = Customize;