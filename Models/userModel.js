import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const userModel = mongoose.model("todo", userSchema);

export default userModel;
