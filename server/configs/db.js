import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect fail");
  }
};

export default connectDB;
