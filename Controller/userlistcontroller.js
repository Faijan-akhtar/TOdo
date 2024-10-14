import userModel from "../Models/userModel.js";
const userControllerList = async (req, res) => {


  let result = await userModel.find();
  
   
  res.send(result);
};
export default userControllerList;
