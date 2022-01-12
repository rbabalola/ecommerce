import express from 'express'
import dotenv from 'dotenv'
import Colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import ProductRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express ()




app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', ProductRoutes) // All the route in the productRoutes.js folder use to have the path /api/products 
// in front of what you have on there now. but will cut that common path out and use this app.use line to point to them
//this express means for every request that contains this path: /api/products , refer to the ProductRoutes.js file.

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}` .yellow.bold))

