const mongoose = require("mongoose");
require("dotenv").config();

// Calling Schema class
const contactForm = mongoose.Schema(
  {
    firstLatsName: String,
    email: String,
    companyName: String,
    Country: String,
    city: String,
    phoneNumber: String,
    text: String,
  },
  { collection: "Contacts" }
);

const Contact = mongoose.model("Contact", contactForm);

module.exports.CreateNewContact = (data) => {
  Contact.create(data)
    .then((ans) => {
      console.log("Document inserted");
    })
    .catch((err) => {
      console.log(err.Message);
    });
};

module.exports.findIfEmailExits = async (email) => {
  let res = await Contact.findOne({ email: email }).exec();
  return res;
};
