const mongoDb = require("mongodb");
const contactModel = require("../Models/contactModel");

module.exports.getPageContact = async (req, res) => {
  // contactModel.CreateNewContact();
  return res.render("contact", { title: "Amine contact" });
};

module.exports.saveContactData = async (req, res) => {
  // console.log(req.body.data);
  contactModel.CreateNewContact(req.body.data);
  return res.render("test");
};
