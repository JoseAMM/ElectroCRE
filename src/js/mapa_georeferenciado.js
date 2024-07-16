// Conectores
let contenedorGrid = document.getElementById("conectores__informacion--grid");
let contenedorInformacion = document.getElementById(
  "mapa__layout--informacion"
);

var map = L.map("map", {
  zoomControl: true,
  minZoom: 4.5,
  maxZoom: 15,
}).setView([23.5, -102], 4.5);

L.control.scale().addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

document.getElementById("modal__inicio").style.zIndex = "1";

var electrolinera = L.icon({
  iconUrl: "../../public/images/electrolinera.png",
  iconSize: [30],
});
var electroterminal = L.icon({
  iconUrl: "../../public/images/electroterminal.png",
  iconSize: [30],
});

// Database Simulación
let db = [
  {
    nombre: "Electroterminal C.U",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG9",
    tarifa: [20, 22],
    tarifaParametro: ["/h", "/kWh"],
    tipoCargador: ["Nivel 1", "Carga Rápida"],
    conectores: ["Tipo 1", "Tipo 2"],
    numeroCargadores: 5,
    latitud: 19.317001648583958,
    longitud: -99.17981835327518,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Durango",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG8",
    tarifa: [18, 17],
    tarifaParametro: ["/kWh", "/h"],
    tipoCargador: ["Nivel 2", "Carga Rápida"],
    conectores: ["Tipo 2", "CHAdeMO"],
    numeroCargadores: 5,
    latitud: 24.98151911207458,
    longitud: -99.04997791998939,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Chiapas",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG7",
    tarifa: [25],
    tarifaParametro: ["/kWh"],
    tipoCargador: ["Carga Rápida"],
    conectores: ["CCS1"],
    numeroCargadores: 5,
    latitud: 31.009396713561113,
    longitud: -106.56396473393269,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Sonora",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG6",
    tarifa: [19, 34],
    tarifaParametro: ["/kWh", "/h"],
    tipoCargador: ["Nivel 2", "Carga Rápida"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    latitud: 29.13502497409781,
    longitud: -102.33851494009673,
    icon: electroterminal,
  },
  {
    nombre: "Electrolinera Exxon",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG5",
    tarifa: [5, 150],
    tarifaParametro: ["/min", "/h"],
    tipoCargador: ["Nivel 2", "Carga Rápida"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    latitud: 20.783112681665266,
    longitud: -101.46017253379192,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Ajusco",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG4",
    tarifa: [180],
    tarifaParametro: ["/kWh"],
    tipoCargador: ["Carga Rápida"],
    conectores: ["GBT"],
    numeroCargadores: 5,
    latitud: 27.348122917935317,
    longitud: -106.56396473393269,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Tabasco",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG3",
    tarifa: [56, 210],
    tarifaParametro: ["/kWh", "/h"],
    tipoCargador: ["Nivel 1", "Nivel 2"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    latitud: 20.79014042819992,
    longitud: -89.11421900338362,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Nuevo León",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG2",
    tarifa: [78, 156, 245],
    tarifaParametro: ["/kWh", "/h", "/h"],
    tipoCargador: ["Nivel 1", "Nivel 2", "Carga Rápida"],
    conectores: ["Tipo 1", "CCS2", "CHAdeMO"],
    numeroCargadores: 5,
    latitud: 31.270606174770812,
    longitud: -112.47193657723827,
    icon: electrolinera,
  },
];

db.forEach(function (db) {
  let marker = L.marker([db.latitud, db.longitud], { icon: db.icon }).addTo(
    map
  );

  marker.on("click", function () {
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");

    check1.checked = false;
    check2.checked = false;
    check3.checked = false;

    check1.addEventListener("click", function (e) {
      e.preventDefault();
    });
    check2.addEventListener("click", function (e) {
      e.preventDefault();
    });
    check3.addEventListener("click", function (e) {
      e.preventDefault();
    });

    while (contenedorGrid.children.length > 5) {
      contenedorGrid.removeChild(contenedorGrid.lastElementChild);
    }

    if (db.icon == electrolinera) {
      let iconEstacion = "../../public/images/electrolinera.png";
      document.getElementById("tipoEstacion").innerHTML = "Electrolinera";
      document.getElementById("mapa__layout--informacion").style.border =
        "0.3rem solid var(--color-verde-claro)";
      var url = document.getElementById("vaciadoURL").classList;
      url.remove("electroterminal");
      url.add("electrolinera");
      let img = document.getElementById("imgEstacion");
      img.src = iconEstacion;
    } else {
      let iconEstacion = "../../public/images/electroterminal.png";
      document.getElementById("tipoEstacion").innerHTML = "Electroterminal";
      document.getElementById("mapa__layout--informacion").style.border =
        "0.3rem solid var(--color-guinda)";

      var url = document.getElementById("vaciadoURL").classList;
      url.remove("electrolinera");
      url.add("electroterminal");
      let img = document.getElementById("imgEstacion");
      img.src = iconEstacion;
    }

    document.getElementById("nombreEstacion").innerHTML = db.nombre;
    document.getElementById("vaciadoURL").href = db.ubicacion;

    if (db.tipoCargador.includes("Nivel 1")) {
      check1.checked = true;
    }
    if (db.tipoCargador.includes("Nivel 2")) {
      check2.checked = true;
    }
    if (db.tipoCargador.includes("Carga Rápida")) {
      check3.checked = true;
    }

    for (let index = 0; index < db.conectores.length; index++) {
      switch (db.conectores[index]) {
        case "Tipo 1":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/Tipo1.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);

          break;

        case "Tipo 2":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/Tipo2.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);
          break;

        case "GBT":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/GBT.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);
          break;

        case "CCS1":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/CCS1.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);
          break;

        case "CCS2":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/CCS2.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);
          break;

        case "CHAdeMO":
          // Insertar img del conector
          var img = document.createElement("img");
          img.src = "../../public/images/CHAdeMO.png";
          img.className = "grid__img";
          contenedorGrid.appendChild(img);
          break;

        default:
          break;
      }

      // Insertar nombre del conector
      let nombreConector = document.createElement("p");
      nombreConector.textContent = db.conectores[index];
      contenedorGrid.appendChild(nombreConector);

      // Insertar tipo de corriente "AC/CC"
      let corriente = document.createElement("p");

      if (
        db.tipoCargador[index] == "Nivel 1" ||
        db.tipoCargador[index] == "Nivel 2"
      ) {
        corriente.textContent = "AC";
        contenedorGrid.appendChild(corriente);
      }
      if (db.tipoCargador[index] == "Carga Rápida") {
        corriente.textContent = "CC";
        contenedorGrid.appendChild(corriente);
      }

      // Insertar el nivel del cargador
      let nivel = document.createElement("section");

      if (db.tipoCargador[index] == "Nivel 1") {
        let img1 = document.createElement("img");
        img1.src = "../../public/images/bolt_black.svg";
        nivel.appendChild(img1);
      }

      if (db.tipoCargador[index] == "Nivel 2") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");

        img1.src = "../../public/images/bolt_black.svg";
        img2.src = "../../public/images/bolt_black.svg";
        nivel.appendChild(img1);
        nivel.appendChild(img2);
      }
      if (db.tipoCargador[index] == "Carga Rápida") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");

        img1.src = "../../public/images/bolt_black.svg";
        img2.src = "../../public/images/bolt_black.svg";
        img3.src = "../../public/images/bolt_black.svg";

        nivel.appendChild(img1);
        nivel.appendChild(img2);
        nivel.appendChild(img3);
      }
      contenedorGrid.appendChild(nivel);

      // Insertar tarifa del conector
      let tarifa = document.createElement("p");
      tarifa.textContent = "$" + db.tarifa[index] + db.tarifaParametro[index];
      contenedorGrid.appendChild(tarifa);
    }

    map.panTo([db.latitud, db.longitud]);

    contenedorInformacion.style.display = "block";
  });
});
