import mongoose from "mongoose";

export const connectDB=async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Data base is connected to ${conn.connection.host}`)
  } catch (error) {
    console.log('Error conncting to database', error)
    process.exit(1)
  }
}