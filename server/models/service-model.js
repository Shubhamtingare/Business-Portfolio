const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
