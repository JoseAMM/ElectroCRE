let latitud = document.getElementById("latitud");
let longitud = document.getElementById("longitud");
let botonConsultarCoordenadas = document.getElementById(
  "botonConsultarCoordenadas"
);

var map = L.map("map", {
  zoomControl: true,
  minZoom: 5,
  maxZoom: 20,
}).setView([19, -99], 9);

L.control.scale().addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let markerGroup = L.layerGroup().addTo(map);

document
  .getElementById("botonConsultarCoordenadas")
  .addEventListener("click", () => {
    graficarCoordenadas(latitud.value, longitud.value);
  });

function graficarCoordenadas(lt, lg) {
  markerGroup.clearLayers();
  L.marker([lt, lg])
    .addTo(markerGroup)
    .bindPopup(lt + "<br>" + lg)
    .openPopup();
  map.setView([lt, lg],15);
}
