const express = require("express");
const authController = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validator/user-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/", authController.home);
router.post("/register", validate(signupSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.get("/user", authMiddleware, authController.user);

module.exports = router;
