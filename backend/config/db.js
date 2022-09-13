const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const mong = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB connected: ${mong.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
