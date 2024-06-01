const express = require("express");
const {
  getUsers,
  getContacts,
  deleteUser,
  deleteContact,
  getSingleUser,
  UpdateUser,
} = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, getSingleUser);
router.patch("/users/update/:id", authMiddleware, adminMiddleware, UpdateUser);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/contacts", authMiddleware, adminMiddleware, getContacts);
router.delete(
  "/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteContact
);

module.exports = router;
