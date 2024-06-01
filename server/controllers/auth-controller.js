const User = require("../models/auth-model");

const home = (req, res) => {
  try {
    return res.status(200).send({ message: "This is home page" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).send({ message: "Email already exist" });
    }
    // const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      phone,
      password,
    });
    // console.log(user);

    return res.status(201).send({
      message: "Registration successful",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    // return res.status(500).send({ message: error });
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      // const comparePass = await bcrypt.compare(password, userExist.password);
      const comparePass = await userExist.comparePassword(password);

      if (!comparePass) {
        return res.status(400).send({ message: "Invalid email or password" });
      }
      return res.status(200).send({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(404).send({ message: "Invalid credentials" });
    }
  } catch (error) {
    // return res.status(500).send({ message: error });
    next(error);
  }
};

const user = async (req, res, next) => {
  try {
    const userData = await req.user;
    return res.status(200).send({ userData });
  } catch (error) {
    next(error);
  }
};

module.exports = { home, register, login, user };
