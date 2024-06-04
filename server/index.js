import express from "express";
import mongoose from "mongoose";

const BlogAppServer = express();

mongoose
  .connect("mongodb+srv://ayushchauhan212:joint420@blogdb.s8csphy.mongodb.net/")
  .then(() => {
    console.log("Database backend se connect hogaya h");
    BlogAppServer.listen(3000, () => {
      console.log("backend mai server mongoDB pe chal rha hai");
    });
  })
  .catch((error) => {
    console.log("database connection string mai dikat hai!");
  });
