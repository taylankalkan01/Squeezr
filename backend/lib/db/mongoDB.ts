import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env.local"
});

const MONGO_URL = process.env.MONGO_URL;
mongoose.set("strictQuery", false);

export const MongoConnection = async () => {
  await mongoose
    .connect(MONGO_URL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)
    .then(() => {
      console.log("Database Connected Successfuly.");
    })
    .catch((err) => {
      console.log("Error Connectiong to the Database: ", err);
    });
};
