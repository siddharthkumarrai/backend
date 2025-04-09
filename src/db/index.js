import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected SuccessFull|| DB HOSTED AT : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};
