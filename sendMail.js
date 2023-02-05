const nodemailer = require("nodemailer");
require("dotenv").config();

// console.log(process.env.USER_MAIL);

function sendMail(message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL,
    },
  });

  var mailOptions = {
    from: "bigdatamspr@gmail.com",
    to: "bigdatamspr@gmail.com",
    subject: `Nouveau contact de l'entreprise : ${
      message.companyName || "Non renseignée"
    } Le   ${new Date(message.dateSaved).toLocaleDateString()}  à ${new Date(
      message.dateSaved
    ).toLocaleTimeString()}  `,
    // text: message,
    html: htmlTable(message),
  };

  let sendmail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent!", info.response);
    }
  });
}

var htmlTable = (message) => {
  return `
    <div>
    <table>
    <thead>
        <tr>
            <th colspan="2"><b>* Récapitulatif du contact *</b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Entreprise : </b></td>
            <td> ${message.companyName || "Non renseignée"}</td>
        </tr>
        <tr>
            <td><b>Nom  et prénom : </b></td>
            <td> ${message.firstLatsName || "Non renseignée"}</td>
        </tr>
        <tr>
            <td><b>Adresse email : </b></td>
            <td> ${message.email || "Non renseignée"}</td>
        </tr>
        <tr>
            <td><b>Téléphone : </b> </td>
            <td>${message.phoneNumber || "Non renseignée"}</td>
        </tr>
        <tr>
            <td><b>Pays: </b></td>
            <td>${message.country || "Non renseignée"}</td>
        </tr>
        <tr>
            <td><b>Message : </b></td>
            <td> ${message.text}</td>
        </tr>
    </tbody>
  </table>
  </div>`;
};

// sendMail("Hello");

module.exports = sendMail;

// `<div>
//     <h3> Bonjour! Nouveau Contact Ajouté. </h3> <br>
//             <h4>Entreprise : ${
//               message.companyName || "Non renseignée"
//             }</h4> <br>
//             <h4>Nom  et prénom : ${
//               message.firstLatsName || "Non renseignée"
//             }</h4>  <br>
//             <h4>Adresse email : ${message.email || "Non renseignée"}</h4>  <br>
//             <h4>Téléphone  : ${message.phoneNumber || "Non renseignée"}</h4>
//             <h4>Pays :  ${message.country || "Non renseignée"}</h4>
//             </div>
//             <p> Message : ${message.text}</p>`,
