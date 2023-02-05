const mongoDb = require("mongodb");
const contactModel = require("../Models/contactModel");

module.exports.getPageContact = async (req, res) => {
  // contactModel.CreateNewContact();
  return res.render("contact", { title: "Amine contact" });
};

module.exports.saveContactData = async (req, res) => {
  // console.log(Object.keys(req.body.data).length);
  let dataContactForm = req.body.data;
  console.log(req.body.data);
  try {
    contactModel.CreateNewContact(req.body.data);
    return res.status(200).json({
      status_code: 200,
      message: "save contact to db with success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ stauts_code: 500, message: "Internal error server" });
  }
};
