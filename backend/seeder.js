// this script is used to import data. When ran, it import data from our local data folder to mongoDB
// IMPORTANT: this file is only neccessary why using sample data. you don't need for the post development function of this app.

import Mongoose from 'mongoose'
import Dotenv from 'dotenv'
import Colors from 'colors'
import Users from './data/users.js'
import Products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import ConnectDB from './config/db.js'  

Dotenv.config()

ConnectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(Users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = Products.map(product => {   // we use this line to link the admin user as the person who listed all the existing sample products.
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported' .green.inverse)
        process.exit()

    } catch (error) {
console.error(`${error}` .red.inverse)
process.exit(1)  //passing in 1 means exit with failure.
    }
}


const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed' .red.inverse)
        process.exit()

    } catch (error) {
console.error(`${error}` .red.inverse)
process.exit(1)  //passing in 1 means exit with failure.
    }
}

if(process.argv [2] === '-d') { // this is a nodejs method. we use this method to run this seeder script. 
    destroyData()
} else {
    importData()
}

// to run this script: if you want to import data, on the terminal type: node backend/seeder
// to destroy data: node backend/seeder -d     / this two command however has been added to the script section of  json file
// so that we can use npm to run it.

//so to import use: npm run data:import
//to delete/destroy use: npm run data:destroy

//note: each time you run this script, the name data will overide the previous in the DB.