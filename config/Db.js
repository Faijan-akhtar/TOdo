import mongoose from "mongoose";

const Dbconnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://faijanakhtar20:4YykVVHPiSc3d2Cz@tracker.gjsid.mongodb.net/Todo"
    );
    console.log(`db connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default Dbconnection;