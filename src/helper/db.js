import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Shopify",
    });
  } catch (error) {
    console.log("Error", error);
  }
};
