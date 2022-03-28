document.querySelector("#inglese-click").addEventListener("click", inglese)
document.querySelector("#italiano-click").addEventListener("click", italiano)
document.querySelector("#francese-click").addEventListener("click", francese)

function inglese() {
  setCookie("language", "Inglese", 365 * 1000);
}

function italiano() {
  setCookie("language", "Italiano", 365 * 1000);
}

function francese() {
  setCookie("language", "Francese", 365 * 1000);
}

function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export { setCookie, getCookie }