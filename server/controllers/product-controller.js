const { Product } = require('../models');

const productController = {
    //get all products
    getAllProducts(req, res) {
        Product.find({})
            .then(dbProductData => res.json(dbProductData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //get a single product by its id
    getProductById({ params }, res) {
        Product.findOne({ _id: params.id })
            .then(dbProductData => {
                if (!dbProductData) {
                    res.status(404).json({ message: 'Could not find a product with that id' });
                    return;
                }
                res.json(dbProductData);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //create a product
    createProduct({ body }, res) {
        Product.create(body)
            .then(dbProductData => res.json(dbProductData))
            .catch(err => res.status(400).json(err));
    },
    //update a product
    updateProduct({ params, body }, res) {
        Product.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbProductData => {
                if (!dbProductData) {
                    res.status(404).json({ message: 'Could not find a product with that id' });
                    return;
                }
                res.json(dbProductData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete a product
    deleteProduct({ params }, res) {
        Product.findOneAndDelete({ _id: params.id })
            .then(dbProductData => {
                if (!dbProductData) {
                    res.status(404).json({ message: 'Could not find a product with that id'})
                }
            })
    }

};

module.exports = productController;