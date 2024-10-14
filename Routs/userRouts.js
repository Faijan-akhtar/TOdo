import express from "express";
import userController from "../Controller/usercontroller.js";
import userControllerList from "../Controller/userlistcontroller.js";
import userControllerdel from "../Controller/userControllerdel.js";
const router = express.Router();

router.post("/user", userController);
router.get("/userlist", userControllerList);
router.delete("/userdelete/:id", userControllerdel);
export default router;
