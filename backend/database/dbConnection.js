import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "jobPortal",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
