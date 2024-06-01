const jwt = require("jsonwebtoken");
const User = require("../models/auth-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = await req.header("Authorization");
    if (!token) {
      res.status(401).send({ message: "Unauthrized HTTP! Token not provided" });
    }
    const jwtToken = token.replace("Bearer", "").trim();

    try {
      const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
      //   console.log("isVerified:", isVerified);

      const userData = await User.findOne(
        { email: isVerified.email },
        { password: 0 }
      );
      //   console.log(userData);
      req.user = userData;
      req.token = token;
      req.userId = userData._id;
      next();
    } catch (error) {
      res.status(401).send({ message: "Invalid token" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = authMiddleware;
