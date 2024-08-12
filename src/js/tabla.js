let habilitar = document.querySelectorAll(".habilitar");
let borrar = document.querySelectorAll(".borrar");

habilitar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    if (this.src.includes("deshabilitar__red.svg")) {
      this.src = "../../public/images/habilitar__green.svg";
    } else {
      this.src = "../../public/images/deshabilitar__red.svg";
    }
  });
});

borrar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
      keyboard: false,
    });
    myModal.show();
  });
});
