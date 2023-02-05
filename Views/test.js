let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = async () => {
  event.preventDefault();
  const listInfoForm = Array.from(contactForm.elements);
  let listDataForm = [];
  listInfoForm.forEach((elm) => {
    listDataForm.push(document.getElementById(elm.id).value);
  });

  let dataForm = {
    firstLatsName: listDataForm[0],
    email: listDataForm[1],
    companyName: listDataForm[2],
    Country: listDataForm[5],
    city: listDataForm[6],
    phoneNumber: listDataForm[4],
    text: listDataForm[7],
  };
  //  des conditions à satisfaire pour l'envoie
  if (
    dataForm.email.length === 0
    // ||       dataForm.phoneNumber.length === 0
  ) {
    document.getElementById("alert").innerHTML = alertHTML(
      "danger",
      `Problème d'enregistrement! l'adresse email est requise pour pouvoir vous contacter`
    );
    document.getElementById("inputEmail").style.backgroundColor =
      "hsl(30, 100%, 50%)";
    return false;
  }
  document.getElementById("inputEmail").style.backgroundColor = "white";
  let checBx = document.getElementById("gridCheck");
  if (!checBx.checked) {
    document.getElementById("alert").innerHTML = alertHTML(
      "danger",
      `Vous devez etre d'accord avec la politique d'utilisation de vos données`
    );
    checBx.style.backgroundColor = "hsl(30, 100%, 50%)";
    return false;
  }

  var fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: dataForm }),
  };
  let data = await fetch("/contact/saveContact", fetchOptions);
  let json = await data.json();
  console.log(json);
  if (json.status_code === 200) {
    contactForm.reset();
    document.getElementById("alert").innerHTML = alertHTML(
      "success",
      "Formulaire enregistré avec succèes!"
    );
  } else {
    document.getElementById("alert").innerHTML = alertHTML(
      "danger",
      `Problème d'enregistrement sur le serveur !`
    );
  }
};

let alertHTML = (state, text) => {
  return `<div class="alert alert-${state}" role="alert">
   ${text}
  </div>`;
};
