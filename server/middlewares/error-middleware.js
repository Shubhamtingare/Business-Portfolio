const errorMiddleware = (err, req, res, next) => {
  try {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "ERROR FROM BACKEND";
    // console.log("err getting is:", err);
    return res.status(status).send({ message, extraDetails });
  } catch (error) {
    console.log(error);
  }
};

module.exports = errorMiddleware;
