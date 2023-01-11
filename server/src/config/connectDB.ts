import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose.set('strictQuery', true);
  try {
    mongoose.connect(process.env.MONGO as string);
    console.log('MongoDB Connected'.green.bold);
  } catch (error: any) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};
