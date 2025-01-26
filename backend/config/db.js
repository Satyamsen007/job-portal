import mongoose from 'mongoose';

// Function to connect mongodb Database

export const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Job Portal`)
  } catch (error) {

  }
}