//document.getElementById("login__box--consulta").style.display = "none"

// Setear valores iniciales
document.getElementById("modal__inicio").style.zIndex = "1";
document.getElementById("modal__inicio").style.display = "none";
document.getElementById("login__box--CRE").style.display = "none";
document.getElementById("login__box--suministrador").style.display = "none";
document.getElementById("login__box--personal").style.display = "none";

let background = document.querySelector("html");

document.getElementById("buttonModal").addEventListener("click", removeModal);

document
  .getElementById("buttonConsulta")
  .addEventListener("click", changeSelectConsulta);
document.getElementById("buttonCRE").addEventListener("click", changeSelectCRE);
document
  .getElementById("buttonSuministrador")
  .addEventListener("click", changeSelectSumistrator);
document
  .getElementById("buttonPersonal")
  .addEventListener("click", changeSelectPersonal);

function removeModal() {
  document.getElementById("modal__inicio").style.display = "none";
}

function changeSelectConsulta() {
  resetStylesButtons();
  resetBoxesLogin();
  background.style.background =
    "url('../../public/images/consulta_publica.png')";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--consulta").style.display = "flex";
  addStylesButtons("buttonConsulta");
}

function changeSelectCRE() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = "url('../../public/images/personal_cre.png')";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--CRE").style.display = "block";
  addStylesButtons("buttonCRE");
}
function changeSelectSumistrator() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = "url('../../public/images/suministrador.png')";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--suministrador").style.display = "block";
  addStylesButtons("buttonSuministrador");
}
function changeSelectPersonal() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = "url('../../public/images/propietario.png')";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--personal").style.display = "block";
  addStylesButtons("buttonPersonal");
}

function resetStylesButtons() {
  buttons = [
    "buttonConsulta",
    "buttonCRE",
    "buttonSuministrador",
    "buttonPersonal",
  ];
  for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).style.border = "none";
    document.getElementById(buttons[i]).style.borderBottom =
      "0.1rem solid black";
    document.getElementById(buttons[i]).style.backgroundColor = "initial";
  }
}

function addStylesButtons(id) {
  document.getElementById(id).style.border = "0.1rem solid black";
  document.getElementById(id).style.backgroundColor = "#fdebae";
}

function resetBoxesLogin() {
  document.getElementById("login__box--consulta").style.display = "none";
  document.getElementById("login__box--CRE").style.display = "none";
  document.getElementById("login__box--suministrador").style.display = "none";
  document.getElementById("login__box--personal").style.display = "none";
}
