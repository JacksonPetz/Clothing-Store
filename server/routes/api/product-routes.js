const router = require('express').Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../../conrrtollers/product-controller');

//Set up all get and post at /api/products
router
    .route('/')
    .get(getAllProducts)
    .post(createProduct);

//set up all get one, put, and delete at /api/products/:id
router
    .route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;