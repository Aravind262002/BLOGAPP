import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogrouter from "./routes/blog-routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogrouter);

mongoose
  .connect("mongodb+srv://Aru:262002@cluster0.ebigr.mongodb.net/test")
  .then(() => app.listen(5000))
  .then(() => console.log("Connected on port 5000"))
  .catch((err) => console.log(err));
