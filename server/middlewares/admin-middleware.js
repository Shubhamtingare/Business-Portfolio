const adminMiddleware = async (req, res, next) => {
  try {
    const userData = await req.user;
    // console.log("isadmin", userData);
    if (!userData.isAdmin) {
      return res
        .status(403)
        .send({ message: "Access Denied! User is not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
