import userModel from "../Models/userModel.js";

const userController = async (req, res) => {
  let result = await userModel(req.body);

  let data = await result.save();
  res.send(data);
};

export default userController;
