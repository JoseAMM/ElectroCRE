document.getElementById("datosUsuario").style.display = "none";
document.getElementById("datosSuministro").style.display = "none";
document.getElementById("datosInfraestructura").style.display = "none";
var check = 0;

document.getElementById("botonUsuario").addEventListener("click", () => {
  displayormulario("datosUsuario", "botonUsuario");
});

document.getElementById("botonSuministro").addEventListener("click", () => {
  displayormulario("datosSuministro", "botonSuministro");
});

document.getElementById("botonInfraestructura").addEventListener("click", () => {
  displayormulario("datosInfraestructura", "botonInfraestructura");
});

function displayormulario(id, bt) {
  let img = document.getElementById(bt);
  if (check == 1) {
    document.getElementById(id).style.display = "none";
    img.src = "../../public/images/more_black.svg";
    check = 0;
  } else {
    check = 1;

    img.src = "../../public/images/remove_black.svg";
    document.getElementById(id).style.display = "inherit";
  }
}
