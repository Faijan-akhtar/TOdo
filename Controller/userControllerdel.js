import userModel from "../Models/userModel.js";
const userControllerdel = async (req, res) => {
  const { id } = req.params;
  let result = await userModel.findByIdAndDelete(id);
  res.send("delete");
};

export default userControllerdel;
