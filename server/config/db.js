import mongoose from "mongoose";
// import "dotenv/config";

const connect = async () => {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL);
    if (db) {
      console.log("Database is connected....");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
