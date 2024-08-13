// Contenedores
let contenedorBody = document.getElementById("table__body");
let contenedorInformacion = document.getElementById(
  "mapa__layout--informacion"
);
let contenedorMapa = document.getElementById("mapa__layout--grafico");

// Variables para ajustar el width del mapa
var desktop = window.matchMedia("(min-width: 769px)");
var mobile = window.matchMedia("(max-width: 768px)");

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
    tipoCorriente: ["AC", "CC"],
    conectores: ["Tipo 1", "Tipo 2"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["7.4 kW", "22 kW"],
    latitud: 19.3170016,
    longitud: -99.17981835327518,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Durango",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG8",
    tarifa: [18, 17],
    tarifaParametro: ["/kWh", "/h"],
    tipoCorriente: ["AC", "CC"],
    conectores: ["Tipo 2", "CHAdeMO"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["22 kW", "50 kW"],
    latitud: 24.9815191,
    longitud: -99.04997791998939,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Chiapas",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG7",
    tarifa: [25],
    tarifaParametro: ["/kWh"],
    tipoCorriente: ["CC"],
    conectores: ["CCS1"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["350 kW"],
    latitud: 31.0093967,
    longitud: -106.56396473393269,
    icon: electroterminal,
  },
  {
    nombre: "Electroterminal Sonora",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG6",
    tarifa: [19, 34],
    tarifaParametro: ["/kWh", "/h"],
    tipoCorriente: ["AC", "CC"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["22 kW", "350 kW"],
    latitud: 29.135024,
    longitud: -102.33851494009673,
    icon: electroterminal,
  },
  {
    nombre: "Electrolinera Exxon",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG5",
    tarifa: [5, 150],
    tarifaParametro: ["/min", "/h"],
    tipoCorriente: ["AC", "CC"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["22 kW", "350 kW"],
    latitud: 20.7831126,
    longitud: -101.46017253379192,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Ajusco",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG4",
    tarifa: [180],
    tarifaParametro: ["/kWh"],
    tipoCorriente: ["CC"],
    conectores: ["GBT"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["150 kW"],
    latitud: 27.348122,
    longitud: -106.56396473393269,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Tabasco",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG3",
    tarifa: [56, 210],
    tarifaParametro: ["/kWh", "/h"],
    tipoCorriente: ["AC", "AC"],
    conectores: ["Tipo 2", "CCS2"],
    numeroCargadores: 5,
    modoCarga: ["1", "2"],
    potencia: ["22 kW", "350 kW"],
    latitud: 20.794587,
    longitud: -89.11421900338362,
    icon: electrolinera,
  },
  {
    nombre: "Electrolinera Nuevo León",
    ubicacion: "https://maps.app.goo.gl/DyKvt4vwiKfNm2UG2",
    tarifa: [78, 156, 245],
    tarifaParametro: ["/kWh", "/h", "/h"],
    tipoCorriente: ["AC", "AC", "CC"],
    conectores: ["Tipo 1", "CCS2", "CHAdeMO"],
    numeroCargadores: 5,
    modoCarga: ["1", "2", "4"],
    potencia: ["7.4 kW", "350 kW", "50 kW"],
    latitud: 31.270606,
    longitud: -112.47193657723827,
    icon: electrolinera,
  },
];
db.forEach(function (db) {
  let marker = L.marker([db.latitud, db.longitud], { icon: db.icon }).addTo(
    map
  );

  marker.on("click", function () {
    // Resetear contenedorBody
    contenedorBody.innerHTML = "";

    // Determina estilos para el border e img dependiendo el tipo de estación
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
      document.getElementById("tipoEstacion").innerHTML = "Estacion de Carga Gratuita";
      document.getElementById("mapa__layout--informacion").style.border =
        "0.3rem solid var(--color-azul-cielo-claro)";

      var url = document.getElementById("vaciadoURL").classList;
      url.remove("electrolinera");
      url.add("electroterminal");
      let img = document.getElementById("imgEstacion");
      img.src = iconEstacion;
    }

    // Se agrega el nombre de la estacion y la URL de la ubicación para Google Maps
    document.getElementById("nombreEstacion").innerHTML = db.nombre;
    document.getElementById("vaciadoURL").href = db.ubicacion;

    // Se agregan los conectores y su información
    for (let index = 0; index < db.conectores.length; index++) {
      // Crear los elementos contenedores de cada propiedad
      let tr = document.createElement("tr");
      let tdConector = document.createElement("td");
      let tdNombre = document.createElement("td");
      let tdCorriente = document.createElement("td");
      let tdPotencia = document.createElement("td");
      let tdModoCarga = document.createElement("td");
      let tdTarifa = document.createElement("td");

      // Asignar su clase a cada propiedad
      tdConector.className = "table__body--conector";
      tdNombre.className = "table__body--nombre";
      tdCorriente.className = "table__body--corriente";
      tdPotencia.className = "table__body--potencia";
      tdModoCarga.className = "table__body--modoCarga";
      tdTarifa.className = "table__body--tarifa";

      // Insertar la img del conector
      switch (db.conectores[index]) {
        case "Tipo 1":
          var img = document.createElement("img");
          img.src = "../../public/images/Tipo1.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        case "Tipo 2":
          var img = document.createElement("img");
          img.src = "../../public/images/Tipo2.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        case "GBT":
          var img = document.createElement("img");
          img.src = "../../public/images/GBT.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        case "CCS1":
          var img = document.createElement("img");
          img.src = "../../public/images/CCS1.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        case "CCS2":
          var img = document.createElement("img");
          img.src = "../../public/images/CCS2.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        case "CHAdeMO":
          var img = document.createElement("img");
          img.src = "../../public/images/CHAdeMO.png";
          img.className = "grid__img";
          tdConector.appendChild(img);
          break;

        default:
          break;
      }

      // Insertar nombre del conector
      tdNombre.textContent = db.conectores[index];

      // Insertar tipo de corriente "AC/CC"
      tdCorriente.textContent = db.tipoCorriente[index];

      // Insertar tarifa del conector
      tdTarifa.textContent = "$" + db.tarifa[index] + db.tarifaParametro[index];

      // Insertar modo de carga
      tdModoCarga.textContent = db.modoCarga[index];

      // Insertar potencia
      tdPotencia.textContent = db.potencia[index];

      // Se agregan los elementos a la fila
      tr.appendChild(tdConector);
      tr.appendChild(tdNombre);
      tr.appendChild(tdCorriente);
      tr.appendChild(tdPotencia);
      tr.appendChild(tdModoCarga);
      tr.appendChild(tdTarifa);

      // Se agrega la fila al contenedorBody
      contenedorBody.appendChild(tr);
    }
    if (desktop.matches) {
      contenedorMapa.style.width = "60%";
      contenedorInformacion.style.width = "40%";
      map.invalidateSize();
      contenedorInformacion.style.display = "block";
    }

    if (mobile.matches) {
      contenedorInformacion.style.width = "100%";
      contenedorInformacion.style.display = "block";
    }

    map.panTo([db.latitud, db.longitud]);
    // Se cambia el centro del mapa a las coordenadas de la estación
  });
});
