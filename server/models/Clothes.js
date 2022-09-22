const mongoose = require('mongoose');

const { Schema } = mongoose;

const clothesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  customize: {
    type: Schema.Types.ObjectId,
    ref: 'Customize',
  }
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
