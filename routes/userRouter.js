const mongoose = require("mongoose");
const express = require("express");
const { userModel } = require("../model/userModel");
const userRouter = express.Router();
require("dotenv").config();
userRouter.post("/api/signup", (req, res) => {
  const { name, email } = req.body;
  const user = new userModel({ email, name });
  user.save();
  res.send({ msg: "Successful user sign-up" });
});
userRouter.post("/api/posts", (req, res) => {
    const { userId, content } = req.body;
    const newPost = new userModel({ userId, content });
    newPost.save();
    res.status(200).json({ message: "Post created successfully" });
  });
  userRouter.delete("/api/deletepost/:userId", (req, res) => {
    let {userId} = req.params;
    const post = userModel.findByIdAndDelete({ _id: userId });
    res.send({ msg: "Post deleted successfully" });
  });
  userRouter.get(" /api/posts/:userId", async (req, res) => {
        const { userId } = req.params;
      const posts = await userModel.find({userId});
      res.status(200).json({posts});
    });
module.exports = {
  userRouter,
};
