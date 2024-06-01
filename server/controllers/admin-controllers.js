const User = require("../models/auth-model");
const Contact = require("../models/contact-model");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).send({ message: "No users found!" });
    }
    return res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      return res.status(400).send({ message: "No contacts found!" });
    }
    return res.status(200).send(contacts);
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await User.findOne({ _id: id }, { password: 0 });
    if (!data) {
      return res.status(400).send({ message: "Data not found" });
    }
    return res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

const UpdateUser = async (req, res, next) => {
  try {
    const id = await req.params.id;
    const updatedData = await req.body;
    // console.log("update data", data);

    const updateUser = await User.updateOne({ _id: id }, { $set: updatedData });
    if (!updateUser) {
      return res.status(421).send({ message: "Data can't be updated" });
    }
    return res.status(200).send(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = await req.params.id;
    const userData = await User.deleteOne({ _id: id });
    if (!userData) {
      return res.status(401).send({ message: "No user data found" });
    }
    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const contactData = await Contact.deleteOne({ _id: req.params.id });
    if (!contactData) {
      return res.status(401).send({ message: "No contact data found" });
    }
    return res.status(200).send({ message: "Contact delete successfully..." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getContacts,
  deleteUser,
  deleteContact,
  getSingleUser,
  UpdateUser,
};
