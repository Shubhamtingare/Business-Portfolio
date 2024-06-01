const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function () {
  try {
    console.log(this);
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, saltRound);

    this.password = hashPassword;
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.comparePassword = function (password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
