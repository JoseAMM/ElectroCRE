let ultimoDisplay;
let pf = document.getElementById("personaFisica");
let pm = document.getElementById("personaMoral");
let siGD = document.getElementById("siGD");
let noGD = document.getElementById("noGD");

const elementosDisplay = [
  "datosUsuario",
  "datosSuministro",
  "datosInfraestructura",
  "datosGeneracion",
  "datosPrecio",
];

const botonesDisplay = [
  "botonUsuario",
  "botonSuministro",
  "botonInfraestructura",
  "botonGeneracion",
  "botonPrecio",
];
document.getElementById("contenedorPersonaFisica").style.display = "none";
document.getElementById("contenedorPersonaMoral").style.display = "none";
document.getElementById("datosSuministro").style.display = "none";
document.getElementById("datosInfraestructura").style.display = "none";
document.getElementById("tituloFuenteGeneracion").style.display = "none";
document.getElementById("datosGeneracion").style.display = "none";
document.getElementById("datosPrecio").style.display = "none";


displayormulario("datosUsuario", "botonUsuario");

document.getElementById("personaFisica").addEventListener("click", () => {
  tipoPersona("personaFisica", "contenedorPersonaFisica");
});

document.getElementById("personaMoral").addEventListener("click", () => {
  tipoPersona("personaMoral", "contenedorPersonaMoral");
});

document.getElementById("siGD").addEventListener("click", () => {
  generacionDistribuida("siGD");
});

document.getElementById("noGD").addEventListener("click", () => {
  generacionDistribuida("noGD");
});

document.getElementById("botonUsuario").addEventListener("click", () => {
  displayormulario("datosUsuario", "botonUsuario");
});

document.getElementById("botonSuministro").addEventListener("click", () => {
  displayormulario("datosSuministro", "botonSuministro");
});

document
  .getElementById("botonInfraestructura")
  .addEventListener("click", () => {
    displayormulario("datosInfraestructura", "botonInfraestructura");
  });
document.getElementById("botonGeneracion").addEventListener("click", () => {
  displayormulario("datosGeneracion", "botonGeneracion");
});
document.getElementById("botonPrecio").addEventListener("click", () => {
  displayormulario("datosPrecio", "botonPrecio");
});

function displayormulario(id, bt) {
  let img = document.getElementById(bt);

  if (ultimoDisplay == bt) {
    document.getElementById(id).style.display = "none";
    img.src = "../../public/images/more_black.svg";
    ultimoDisplay = undefined;
  } else {
    for (let index = 0; index < elementosDisplay.length; index++) {
      document.getElementById(elementosDisplay[index]).style.display = "none";
      let boton = document.getElementById(botonesDisplay[index]);
      boton.src = "../../public/images/more_black.svg";
    }
    img.src = "../../public/images/remove_black.svg";
    document.getElementById(id).style.display = "block";
    ultimoDisplay = bt;
  }
}

function tipoPersona(id, idContenedor) {
  document.getElementById("personaFisica").checked = false;
  document.getElementById("personaMoral").checked = false;
  document.getElementById("contenedorPersonaFisica").style.display = "none";

  document.getElementById("contenedorPersonaFisica").style.display = "none";
  document.getElementById("contenedorPersonaMoral").style.display = "none";

  document.getElementById(id).checked = true;
  document.getElementById(idContenedor).style.display = "block";
}

function generacionDistribuida(id, idContenedor) {
  document.getElementById("siGD").checked = false;
  document.getElementById("noGD").checked = false;
  document.getElementById("tituloFuenteGeneracion").style.display = "none";
  document.getElementById("datosGeneracion").style.display = "none";

  document.getElementById(id).checked = true;
  document.getElementById("tituloFuenteGeneracion").style.display = "flex";
  document.getElementById("datosGeneracion").style.display = "block";
}
