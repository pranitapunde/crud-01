const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB CONNECTION SUCCESSFULL, ${conn.connection.name}` .bgBlue.white)
    } catch (error) {
        console.log(`DB CONNECTION FAILD,${error.message}`.bgGreen .white)
    }
}

module.exports = connectDB