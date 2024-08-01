//document.getElementById("login__box--consulta").style.display = "none"

var desktop = window.matchMedia("(min-width: 769px)");
var mobile = window.matchMedia("(max-width: 768px)");

let background_consulta;
let background_cre;
let background_suministrador;
let background_propietario;

function mediaQueryBackground(desktop, mobile) {
  if (desktop.matches) {
    background_consulta = "url('../../public/images/consulta_publica.png')";
    background_cre = "url('../../public/images/personal_cre.png')";
    background_suministrador = "url('../../public/images/suministrador.png')";
    background_propietario = "url('../../public/images/propietario.png')";
  }
  if (mobile.matches) {
    background_consulta =
      "url('../../public/images/consulta_publica_mobile.png')";
    background_cre = "url('../../public/images/personal_cre_mobile.png')";
    background_suministrador = "url('../../public/images/suministrador_mobile.png')";
    background_propietario = "url('../../public/images/propietario_mobile.png')";
  }
}

mediaQueryBackground(desktop, mobile);

desktop.addEventListener("change", function(){
  mediaQueryBackground(desktop, mobile)
})
mobile.addEventListener("change", function(){
  console.log("hola")
  mediaQueryBackground(desktop, mobile)
})

// Setear valores iniciales
document.getElementById("modal__inicio").style.zIndex = "1";
document.getElementById("modal__inicio").style.display = "none";
document.getElementById("login__box--CRE").style.display = "none";
document.getElementById("login__box--suministrador").style.display = "none";
document.getElementById("login__box--personal").style.display = "none";

let background = document.querySelector("html");
cambiarSelectConsulta();

document.getElementById("buttonModal").addEventListener("click", removeModal);

document
  .getElementById("buttonConsulta")
  .addEventListener("click", cambiarSelectConsulta);
document
  .getElementById("buttonCRE")
  .addEventListener("click", cambiarSelectCRE);
document
  .getElementById("buttonSuministrador")
  .addEventListener("click", cambiarSelectSumistrador);
document
  .getElementById("buttonPersonal")
  .addEventListener("click", cambiarSelectPersonal);

function removeModal() {
  document.getElementById("modal__inicio").style.display = "none";
}

function cambiarSelectConsulta() {
  resetStylesButtons();
  resetBoxesLogin();
  background.style.background = background_consulta;
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--consulta").style.display = "flex";
  addStylesButtons("buttonConsulta");
}

function cambiarSelectCRE() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = background_cre;
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--CRE").style.display = "block";
  addStylesButtons("buttonCRE");
}
function cambiarSelectSumistrador() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = background_suministrador;
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundSize = "cover";
  document.getElementById("login__box--suministrador").style.display = "block";
  addStylesButtons("buttonSuministrador");
}
function cambiarSelectPersonal() {
  resetBoxesLogin();
  resetStylesButtons();
  background.style.background = background_propietario;
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
