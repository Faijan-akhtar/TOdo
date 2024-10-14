import express from "express";
import router from "./Routs/userRouts.js";
import Dbconnection from "./config/Db.js";
import dotenv from 'dotenv'
import cors from "cors";
dotenv.config()
const app = express();
Dbconnection();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(5000, () => {
  console.log("server is runing on 5000");
});
