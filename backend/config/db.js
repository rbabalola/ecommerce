import mongoose from 'mongoose'
import Colors  from 'colors'

const connectDB = async () => {
    try {
        const Conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${Conn.connection.host}`  .cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}` .red.underline.bold) // the colors and underline is for a package call color we install. doesn't do a major work, just colorfy the message we get in the terminal.
        process.exit(1) // 1 means its going to exit with failure.

    }
}

export default connectDB;