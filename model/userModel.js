const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    userId: { type: String, require: true },
    content: { type: String, require: true },

  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel,
  
};
