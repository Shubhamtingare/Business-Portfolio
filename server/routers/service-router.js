const express = require("express");
const getService = require("../controllers/service-controller");
const router = express.Router();

router.get("/service", getService);

module.exports = router;
