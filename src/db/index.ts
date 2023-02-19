const mongoose = require("mongoose");
import { MongoURI } from "../config/key";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect(MongoURI);
};

export { connectDb };
