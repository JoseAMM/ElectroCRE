let latitud = document.getElementById("latitud");
let longitud = document.getElementById("longitud");

var map = L.map("map", {
  zoomControl: true,
  minZoom: 9,
  maxZoom: 20,
}).setView([23.5, -102], 9);

L.control.scale().addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


document.getElementById("longitud").addEventListener("input", () => {
  graficarCoordenadas(latitud.value, longitud.value)
})
document.getElementById("latitud").addEventListener("input", () => {
  graficarCoordenadas(latitud.value, longitud.value)
})


function graficarCoordenadas(lt, lg){

    L.marker([lt, lg]).addTo(map)
    .bindPopup(lt + '<br>' + lg)
    .openPopup();
    map.panTo([lt, lg]);

}