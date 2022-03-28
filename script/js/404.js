const sorry = document.querySelector(".h");

import { setCookie, getCookie } from "./cookie.js";

function Randomize() {
    let dataTrad = tradFile();
  
    let language = getCookie("language");
    if (!language) {
      language = setCookie("language", "Inglese", 365 * 1000)
    }
  
    if (language == "Italiano") {
  
        sorry.innerHTML = dataTrad.sorry.Italiano;
  
    } else if (language == "Inglese") {

        sorry.innerHTML = dataTrad.sorry.Inglese;

    } else if (language == "Francese") {
        
        sorry.innerHTML = dataTrad.sorry.Francese;

    }
  }
  
  window.onload = Randomize;
  
  function tradFile() {
    let tradu = {
        sorry: {
            Inglese: "Sorry! This page was missing.",
            Italiano: "Spiacenti! Questa pagina è risultata mancante.",
            Francese: "Pardon! Cette page manquait.",
          }
    };
  
    return tradu;
  }
  