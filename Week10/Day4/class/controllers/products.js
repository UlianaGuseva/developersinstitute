const {getAllProducts,
    getProduct,
    searchProduct,
    insertProduct,
    deleteProduct,
    updateProduct
} = require('../modules/products.js')

//READ -GET all get all products

const getAllProductsA = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const getAllProductsEjs = (req, res) => {
    getAllProducts()
    .then(data => {
        res.render('shop', {
            data
        })
    })
    .catch(err=>{
        console.log(err)
        // res.status(404).json({msg:err.message})
        res.render('404')
    })
}

const getProductA = (req,res)=>{
    const id = req.params.id
    getProduct(id)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const _searchProduct = (req,res)=>{
    
    searchProduct(req.query.name)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const _insertProduct = (req,res)=>{
    
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const _deleteProduct = (req,res)=>{
    const id = req.params.id
    deleteProduct(id)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const _updateProduct = (req,res)=>{
    
    updateProduct(req.params.id, req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}
module.exports = {
    getAllProductsEjs,
    getProductA,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
}