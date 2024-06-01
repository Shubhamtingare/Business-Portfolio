const Contact = require("../models/contact-model");

const contactForm = async (req, res, next) => {
  try {
    const data = req.body;
    const contactCreated = await Contact.create(data);
    if (!contactCreated) {
      return res
        .status(400)
        .send({ message: "Error occurs in created contact" });
    }
    return res.status(200).send({ message: "User contact created" });
  } catch (error) {
    next(error);
  }
};

module.exports = contactForm;
