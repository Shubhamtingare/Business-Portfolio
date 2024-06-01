const Service = require("../models/service-model");

const getService = async (req, res, next) => {
  try {
    const serviceData = await Service.find();
    if (!serviceData) {
      res.status(200).send({ message: "Service data not found" });
    }
    console.log("Servicedata:", serviceData);
    res.status(200).send(serviceData);
  } catch (error) {
    next(error);
  }
};

module.exports = getService;
