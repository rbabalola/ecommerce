import  Mongoose  from "mongoose";

const orderSchema = Mongoose.Schema({

   user: {  // this part links that user that buys the pproduct to the order.
        type: Mongoose.Schema.Types.ObjectId,  
        required: true,
        ref: 'User'
    },

    orderItems: [
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product: {                              //this product here is use to refrence the order item to the product
                type: Mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
        
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: { // the information here will come from your payment provider.
        id: {type: String},
        status: {type: String},
       update_time: {type: String},
        email_address: {type: String}
        
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    },
},{
    timestamps: true
})

const Order = Mongoose.model('Order', orderSchema)

export default Order;