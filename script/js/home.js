const navhome = document.querySelector("#nav-home");
const navinfo = document.querySelector("#nav-info");
const navcontact = document.querySelector("#nav-contact");
const navlang = document.querySelector("#nav-lang");
const gmkStudioDesc = document.querySelector("#gmkstudios-description");
const titleinformazioni = document.querySelector("#title-informazioni");
const socialstitle = document.querySelector("#socials-title");
const socialdescription = document.querySelector("#social-description");
const socialthx = document.querySelector("#social-thx");
const progettiamotitle = document.querySelector("#progettiamo-title");
const progettiamodesc = document.querySelector("#progettiamo-desc");
const costovideotitle = document.querySelector("#costovideo-title");
const costovideodesc = document.querySelector("#costovideo-desc");
const fotautore = document.querySelector(".autore")
const fotdesigner = document.querySelector(".designer")

import { setCookie, getCookie } from "./cookie.js";

function Randomize() {
  let dataTrad = tradFile();

  let language = getCookie("language");
  if (!language) {
    language = setCookie("language", "Inglese", 365 * 1000)
  }

  if (language == "Italiano") {

    // Navbar
    navhome.innerHTML = dataTrad.navHome.Italiano;
    navinfo.innerHTML = dataTrad.navInfo.Italiano;
    navcontact.innerHTML = dataTrad.navContact.Italiano;
    navlang.innerHTML = dataTrad.navlang.Italiano;
    
    //GMK Studios
    gmkStudioDesc.innerHTML = dataTrad.gmkStudioDesc.Italiano;
    titleinformazioni.innerHTML = dataTrad.titleinformazioni.Italiano;

    //Social
    socialstitle.innerHTML = dataTrad.socialstitle.Italiano;
    socialdescription.innerHTML = dataTrad.socialdescription.Italiano;
    socialthx.innerHTML = dataTrad.socialthx.Italiano;

    //Progetti
    progettiamotitle.innerHTML = dataTrad.progettiamotitle.Italiano;
    progettiamodesc.innerHTML = dataTrad.progettiamodesc.Italiano;

    //Costo videogioco
    costovideotitle.innerHTML = dataTrad.costovideotitle.Italiano;
    costovideodesc.innerHTML = dataTrad.costovideodesc.Italiano;

    // Footer
    fotautore.innerHTML = dataTrad.fotautore.Italiano
    fotdesigner.innerHTML = dataTrad.fotdesigner.Italiano

  } else if (language == "Inglese") {
    // Navbar
    navhome.innerHTML = dataTrad.navHome.Inglese;
    navinfo.innerHTML = dataTrad.navInfo.Inglese;
    navcontact.innerHTML = dataTrad.navContact.Inglese;
    navlang.innerHTML = dataTrad.navlang.Inglese;

    //GMK Studios
    gmkStudioDesc.innerHTML = dataTrad.gmkStudioDesc.Inglese;
    titleinformazioni.innerHTML = dataTrad.titleinformazioni.Inglese;

    //Social
    socialstitle.innerHTML = dataTrad.socialstitle.Inglese;
    socialdescription.innerHTML = dataTrad.socialdescription.Inglese;
    socialthx.innerHTML = dataTrad.socialthx.Inglese;

    //Progetti
    progettiamotitle.innerHTML = dataTrad.progettiamotitle.Inglese;
    progettiamodesc.innerHTML = dataTrad.progettiamodesc.Inglese;

    //Costo videogioco
    costovideotitle.innerHTML = dataTrad.costovideotitle.Inglese;
    costovideodesc.innerHTML = dataTrad.costovideodesc.Inglese;
    
    // Footer
    fotautore.innerHTML = dataTrad.fotautore.Inglese;
    fotdesigner.innerHTML = dataTrad.fotdesigner.Inglese
    
  } else if (language == "Francese") {
    // Navbar
    navhome.innerHTML = dataTrad.navHome.Francese;
    navinfo.innerHTML = dataTrad.navInfo.Francese;
    navcontact.innerHTML = dataTrad.navContact.Francese;
    navlang.innerHTML = dataTrad.navlang.Francese;

    //GMK Studios
    gmkStudioDesc.innerHTML = dataTrad.gmkStudioDesc.Francese;
    titleinformazioni.innerHTML = dataTrad.titleinformazioni.Francese;

    //Social
    socialstitle.innerHTML = dataTrad.socialstitle.Francese;
    socialdescription.innerHTML = dataTrad.socialdescription.Francese;
    socialthx.innerHTML = dataTrad.socialthx.Francese;

    //Progetti
    progettiamotitle.innerHTML = dataTrad.progettiamotitle.Francese;
    progettiamodesc.innerHTML = dataTrad.progettiamodesc.Francese;

    //Costo videogioco
    costovideotitle.innerHTML = dataTrad.costovideotitle.Francese;
    costovideodesc.innerHTML = dataTrad.costovideodesc.Francese;

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
      Inglese: "Langu.",
      Italiano: "Lingue",
      Francese: "Langu.",
    },

    // Body
    gmkStudioDesc: {
      Inglese:
        '<span> GMK Studios </span>, is a newborn company, <br />developer of video games, including his first video game <br />still in development, has the name of "<span> The Dawn of a New Day </span> ", <br />which will be available shortly for free.',
      Italiano:
        '<span>GMK Studios</span>, ?? un\'azienda appena nata,<br />sviluppatrice di videogiochi, tra cui il suo primo videogioco<br />ancora insviluppo, ha il nome di "<span>The Dawn of a New Day</span> ",<br />che sar?? presto disponibile gratuitamente.',
      Francese:
        '<span> GMK Studios </span>, est une entreprise naissante, <br /> d??veloppeur de jeux vid??o, dont son premier jeu vid??o <br /> encore en cours de d??veloppement, porte le nom de <br>"<span> The Dawn of a New Day </span> ", <br /> qui sera bient??t disponible gratuitement.',
    },
    titleinformazioni: {
      Inglese: "Other Information",
      Italiano: "Altre Informazioni",
      Francese: "Autres Information",
    },
    socialstitle: {
      Inglese: "Our Social Networks",
      Italiano: "I nostri Social Network",
      Francese: "Nos r??seaux sociaux",
    },
    socialdescription: {
      Inglese:
        "We have various socials, <br /> all socials are linked in following buttons.",
      Italiano:
        "Noi abbiamo varii social network,<br />tutti i social network sono linkati nei seguenti bottoni.",
      Francese:
        "Nous avons diff??rents r??seaux sociaux, <br/> tous les r??seaux sociaux sont li??s dans les boutons suivants.",
    },
    socialthx: {
      Inglese: "We thank you!",
      Italiano: "Ti ringraziamo!",
      Francese: "Nous te remercions!",
    },
    progettiamotitle: {
      Inglese: "How we work",
      Italiano: "Come Progettiamo",
      Francese: "Comment nous concevons",
    },
    progettiamodesc: {
      Inglese:
        "We are a very slow but organized team, we focus on the smallest details to make the game more in line with the customer's requests. TDoaND will be created with a well-known software, one of the best <br /> Unreal Engine 4, which over time it could become Unreal Engine 5. <br /> We do not have the best performance at the moment, in fact we are trying to raise funds to give players <br /> the highest quality and compatibility. The game's release date is scheduled for August / September 2022.",
      Italiano:
        "Siamo un team molto lento ma organizzato, ci concentriamo sui minimi dettagli per rendere il videogioco pi?? in linea con le richieste del cliente<br />TDoaND verr?? creato con un software molto noto, uno dei migliori<br />Unreal Engine 4, che col tempo potrebbe diventare Unreal Engine 5.<br />Non abbiamo le migliori prestazioni al momento, infatti stiamo cercando di raccogliere fondi per dare ai giocatori<br /> il massimo della qualit?? e della compatibilit??. La data di pubblicazione del gioco ?? prevista a Agosto/Settembre 2022.",
      Francese:
        "Nous sommes une ??quipe tr??s lente mais organis??e, nous nous concentrons sur les moindres d??tails pour rendre le jeu plus conforme aux demandes du client TDoaND sera cr???? avec un logiciel bien connu, l'un des meilleurs <br /> Unreal Engine 4, qui avec le temps pourrait devenir Unreal Engine 5. Nous n'avons pas les meilleures performances pour le moment, en fait nous essayons de lever des fonds pour donner aux joueurs <br /> la meilleure qualit?? et compatibilit??. La date de sortie du jeu est pr??vue pour ao??t/septembre 2022.",
    },
    costovideotitle: {
      Inglese: "How much will the videogame cost",
      Italiano: "Quanto coster?? il videogioco?",
      Francese: "Combien co??tera le jeu vid??o ?",
    },
    costovideodesc: {
      Inglese:
        "TDoaND will be a 100% free game, in offline / story mode, subsequently, after obtaining <br /> the necessary funds, useful modes also decide to implement the Online mode in the game. <br /> TDoaND will be free only for the first players , after which the price will be set at around ??? 10 / ??? 15. <br /> Over time, you can enter the Official Server of GMK Studios and support us in the creation, <br /> provide some advice etc... You also have the possibility to donate a few $, this action will be of enormous help<br>and will speed us up a lot in the creation of the video game.<br>We accept wire transfers via PayPal and PaySafeCard.",
      Italiano:
        "TDoaND sar?? un gioco 100% gratuito, in modalit?? offline/storia, successivamente, dopo aver ottenuto <br />i fondi necessari, potremmo anche decidere di implementare nel gioco la modalit?? Online.<br />TDoaND sar?? gratuito solo per i primi giocatori, dopodich?? verr?? impostato il prezzo a circa ???10/???15.<br />Nel corso del tempo, potete entrare nel Server Ufficiale di GMK Studios e supportarci nella creazione,<br />fornire alcuni consigli ecc... Avete anche la possibilit?? di donare qualche ???, quest'azione ci sar?? di gigantesco aiuto e ci velocizzer?? tantissimo nella creazione del videogioco. Accettiamo bonifici via PayPal e PaySafeCard.",
      Francese:
        "TDoaND sera un jeu 100% gratuit, en mode hors ligne / histoire, par la suite, apr??s avoir obtenu <br /> les fonds n??cessaires, nous pourrons ??galement d??cider d'impl??menter le mode en ligne dans le jeu. <br /> TDoaND sera gratuit uniquement pour les premiers joueurs, apr??s quoi le prix sera fix?? aux alentours de 10???/15???. <br /> Au fil du temps, vous pourrez entrer sur le Serveur Officiel de GMK Studios et nous accompagner dans la cr??ation, <br /> prodiguer quelques conseils etc ... Vous avez ??galement la possibilit?? de faire un don de quelques ???, cette action nous sera d'une aide ??norme et nous fera beaucoup acc??l??rer dans la cr??ation du jeu vid??o. Nous acceptons les virements bancaires via PayPal et PaySafeCard.",
    },

    // Footer
    fotautore: {
      Inglese: "Website created by the GMK Studios developer team",
      Italiano: "Sito web creato dal team sviluppatori GMK Studios",
      Francese: "Site cr???? par l'??quipe de d??veloppeurs de GMK Studios"
    },
    fotdesigner: {
      Inglese: "Design created by Goldy",
      Italiano: "Design creato da Goldy",
      Francese: "Design cr????e par Goldy"
    }
    
  };

  return tradu;
}
