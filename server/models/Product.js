const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        require: true,
        min: 0.99
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
});

//create the Product model
const Product = model('Product', ProductSchema);

module.exports = Product;