import Express from 'express'

import AsyncHandler from 'express-async-handler' // this is used for error handling
const Router = Express.Router()
import Product from '../models/productModel.js'

//@desc Fetch all products
//@route GET /api/products
//@access Public (meaning anybody can request this route, even if they are not logged in)

Router.get('/', AsyncHandler(async (req, res) => {
    
    const Products = await Product.find({})
    res.json(Products)
}))

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public (meaning anybody can request this route, even if they are not logged in)

Router.get('/:id', AsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error( 'Product not found')
    }
    
}))

export default Router;

