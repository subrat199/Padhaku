const express = require("express");
const cors=require('cors');
const { connection } = require("mongoose");
const { userRouter } = require("./routes/userRouter");
const app = express();
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use("/user",userRouter)
app.listen(3000, async () => {
    try {
      await connection;
      console.log("connected to db");
    } catch (error) {
      console.log(error);
    }
    console.log("Server listening on port " + 3000);
  });