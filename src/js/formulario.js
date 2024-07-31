let ultimoDisplay;
let pf = document.getElementById("personaFisica");
let pm = document.getElementById("personaMoral");
let siGD = document.getElementById("siGD");
let noGD = document.getElementById("noGD");
let nuevoCargador = document.getElementById("nuevoCargador");
let formularioCargador = document.getElementById("1");
let clonFormularioCargador = formularioCargador.cloneNode(true);
let ultimoCargador = document.getElementById("1");
let indexCargador = 1;

const elementosDisplay = [
  "datosUsuario",
  "datosSuministro",
  "datosInfraestructura",
  "datosGeneracion",
  "datosAnexo"
];

const botonesDisplay = [
  "botonUsuario",
  "botonSuministro",
  "botonInfraestructura",
  "botonGeneracion",
  "botonAnexo"
];

document.getElementById("contenedorPersonaFisica").style.display = "none";
document.getElementById("contenedorPersonaMoral").style.display = "none";
document.getElementById("datosSuministro").style.display = "none";
document.getElementById("datosInfraestructura").style.display = "none";
document.getElementById("tituloFuenteGeneracion").style.display = "none";
document.getElementById("datosGeneracion").style.display = "none";
document.getElementById("datosAnexo").style.display = "none";

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
document
  .getElementById("botonAnexo")
  .addEventListener("click", () => {
    displayormulario("datosAnexo", "botonAnexo");
  });
document.getElementById("botonGeneracion").addEventListener("click", () => {
  displayormulario("datosGeneracion", "botonGeneracion");
});
// document.getElementById("botonPrecio").addEventListener("click", () => {
//   displayormulario("datosPrecio", "botonPrecio");
// });

document.getElementById("nuevoCargador").addEventListener("click", () => {
  agregarCargador();
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

function generacionDistribuida(id) {
  document.getElementById("siGD").checked = false;
  document.getElementById("noGD").checked = false;

  if (id == "siGD") {
    document.getElementById("tituloFuenteGeneracion").style.display = "flex";
  }
  if (id == "noGD") {
    document.getElementById("tituloFuenteGeneracion").style.display = "none";
  }

  document.getElementById(id).checked = true;
}

function agregarCargador() {
  let nuevoCargador = clonFormularioCargador.cloneNode(true);
  indexCargador++;
  nuevoCargador.id = indexCargador;
  let ultimoCargador = document.getElementById("contenedorCargadores");
  ultimoCargador.appendChild(nuevoCargador);

  let sectionBotonBorrarCargador = document.createElement("section");
  sectionBotonBorrarCargador.classList = "formulario__botonBorrarCargador";
  let bontonBorrarCargador = document.createElement("button");
  bontonBorrarCargador.textContent = "Borrar Cargador";
  bontonBorrarCargador.type = "button";
  bontonBorrarCargador.onclick = function () {
    nuevoCargador.remove();
  };

  sectionBotonBorrarCargador.appendChild(bontonBorrarCargador);
  nuevoCargador.appendChild(sectionBotonBorrarCargador);
}

function borrarCargador(id) {}
