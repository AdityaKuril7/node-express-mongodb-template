import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.DATABASE_URL as string,
    );
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
  }
};
