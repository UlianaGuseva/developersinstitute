const express = require('express')
const router = express.Router()

const {getAllProductsEjs,
    getProductA,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
} = require('../controllers/products.js')

router.get('/class/product', getAllProductsEjs)
router.get('/class/product/:id', getProductA)
router.get('/class/search', _searchProduct)
router.post('/class/product', _insertProduct)
router.delete('/class/product/:id', _deleteProduct)
router.put('/class/product/:id', _updateProduct)

module.exports = {
    router
}