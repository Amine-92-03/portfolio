const mongoDb = require("mongodb");
const contactModel = require("../Models/contactModel");
const sendGmailNotif = require("../sendMail");
// console.log(new Date("2023-02-05T16:25:06.826Z").toLocaleTimeString());

module.exports.getPageContact = async (req, res) => {
  // contactModel.CreateNewContact();
  return res.render("contact", { title: "Amine contact" });
};

module.exports.saveContactData = async (req, res) => {
  let email = req.body.email.toLowerCase();
  // check if email exists ?

  // console.log(req.body.data);
  let resp = await contactModel.findIfEmailExits(email);
  if (resp !== null) {
    try {
      return res.status(201).json({
        status_code: 201,
        message: "Contact exists",
      });
    } catch (error) {
      return res
        .status(501)
        .json({ stauts_code: 501, message: "Internal error server" });
    }
  }

  try {
    let dataToSave = req.body.data;
    contactModel.CreateNewContact(dataToSave);

    sendGmailNotif({
      firstLatsName: dataToSave.firstLatsName,
      email: dataToSave.email,
      companyName: dataToSave.companyName,
      Country: dataToSave.Country,
      city: dataToSave.city,
      phoneNumber: dataToSave.phoneNumber,
      text: dataToSave.text,
      dateSaved: dataToSave.dateSaved,
    });

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
