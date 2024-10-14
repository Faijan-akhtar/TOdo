import mongoose from "mongoose";

const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`db connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default Dbconnection;
