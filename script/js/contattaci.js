const navhome = document.querySelector("#nav-home");
const navinfo = document.querySelector("#nav-info");
const navcontact = document.querySelector("#nav-contact");
const navlang = document.querySelector("#nav-lang");
const scatoladesc = document.querySelector("#scatola-desc");
const contactit = document.querySelector("#man")
const contactdes = document.querySelector("#des")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const button = document.querySelector("#button")

import { setCookie, getCookie } from "./cookie.js";

function Randomize() {
  let dataTrad = tradFile();

  let language = getCookie("language");
  if (!language) {
    language = setCookie("language", "Inglese", 365 * 1000)
  }

  if (language == "Italiano") {

    // NavBar
    navhome.innerHTML = dataTrad.navHome.Italiano;
    navinfo.innerHTML = dataTrad.navInfo.Italiano;
    navcontact.innerHTML = dataTrad.navContact.Italiano;
    navlang.innerHTML = dataTrad.navlang.Italiano;

    // Scatola
    scatoladesc.innerHTML = dataTrad.scatoladesc.Italiano;
    contactit.innerHTML = dataTrad.contactit.Italiano;
    contactdes.innerHTML = dataTrad.contactdes.Italiano;
    username.placeholder = dataTrad.username.Italiano;
    email.placeholder = dataTrad.email.Italiano;
    message.placeholder = dataTrad.message.Italiano;
    button.value = dataTrad.button.Italiano;

    // Footer
    fotautore.innerHTML = dataTrad.fotautore.Italiano
    fotdesigner.innerHTML = dataTrad.fotdesigner.Italiano

  } else if (language == "Inglese") {

    // NavBar
    navhome.innerHTML = dataTrad.navHome.Inglese;
    navinfo.innerHTML = dataTrad.navInfo.Inglese;
    navcontact.innerHTML = dataTrad.navContact.Inglese;
    navlang.innerHTML = dataTrad.navlang.Inglese;

    // Scatola
    scatoladesc.innerHTML = dataTrad.scatoladesc.Inglese;
    contactit.innerHTML = dataTrad.contactit.Inglese
    contactdes.innerHTML = dataTrad.contactdes.Inglese
    username.placeholder = dataTrad.username.Inglese;
    email.placeholder = dataTrad.email.Inglese;
    message.placeholder = dataTrad.message.Inglese;
    button.value = dataTrad.button.Inglese;

    // Footer
    fotautore.innerHTML = dataTrad.fotautore.Inglese
    fotdesigner.innerHTML = dataTrad.fotdesigner.Inglese

  } else if (language == "Francese") {

    // NavBar
    navhome.innerHTML = dataTrad.navHome.Francese;
    navinfo.innerHTML = dataTrad.navInfo.Francese;
    navcontact.innerHTML = dataTrad.navContact.Francese;
    navlang.innerHTML = dataTrad.navlang.Francese;

    // Scatola
    scatoladesc.innerHTML = dataTrad.scatoladesc.Francese;
    contactit.innerHTML = dataTrad.contactit.Francese
    contactdes.innerHTML = dataTrad.contactdes.Francese
    username.placeholder = dataTrad.username.Francese;
    email.placeholder = dataTrad.email.Francese;
    message.placeholder = dataTrad.message.Francese;
    button.value = dataTrad.button.Francese;

    // Footer
    fotautore.innerHTML = dataTrad.fotautore.Francese
    fotdesigner.innerHTML = dataTrad.fotdesigner.Francese

  }
}

window.onload = Randomize;

function tradFile() {
  let tradu = {

    // NavBar
    navHome: {
      Inglese: "Home",
      Italiano: "Home",
      Francese: "Home",
    },
    navInfo: {
      Inglese: "Informations",
      Italiano: "Informazioni",
      Francese: "Information",
    },
    navContact: {
      Inglese: "Contact Us",
      Italiano: "Contattaci",
      Francese: "Contactez-Nous",
    },
    navlang: {
      Inglese: "Langs.",
      Italiano: "Lingue",
      Francese: "Langu.",
    },

    // Body
    scatoladesc: {
      Inglese: "Contact us by e-mail, we will reply as soon as possible! <br> If a text box has a *, it means it is mandatory.",
      Italiano: "Contattaci via E-mail, risponderemo il prima possibile!<br>Se una casella di testo ha un *, significa che è obbligatoria.",
      Francese: "Contactez-nous par e-mail, nous vous répondrons dans les plus brefs délais ! <br> Si une zone de texte comporte un *, cela signifie qu'elle est obligatoire.",
    },
    contactit: {
      Inglese: "Do you want to contact us manually?",
      Italiano: "Vuoi contattarci manualmente?",
      Francese: "Voulez-vous nous contacter manuellement ?"
    },
    contactdes: {
      Inglese: "Below you have all our information.", 
      Italiano: "Qui sotto hai tutte le nostre informazioni.",
      Francese: "Ci-dessous vous avez toutes nos informations."
    },
    username: {
      Inglese: "Full Name *",
      Italiano: "Nome e cognome *",
      Francese: "Nom et prenom *"
    },
    email: {
      Inglese: "Full Name *",
      Italiano: "Nome e cognome *",
      Francese: "Nom et prenom *"
    },
    message: {
      Inglese: "Email Address *",
      Italiano: "Indirizzo Email *",
      Francese: "Adresse e-mail *"
    },
    button: {
      Inglese: "Send",
      Italiano: "Invia",
      Francese: "Envoyer"
    },
    // Footer
    fotautore: {
      Inglese: "Website created by the GMK Studios developer team",
      Italiano: "Sito web creato dal team sviluppatori GMK Studios",
      Francese: "Site créé par l'équipe de développeurs de GMK Studios"
    },
    fotdesigner: {
      Inglese: "Design created by Goldy",
      Italiano: "Design creato da Goldy",
      Francese: "Design créée par Goldy"
    }
  };

  return tradu;
}
