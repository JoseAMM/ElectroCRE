const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Ciudad de México",
        "Coahuila",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
      ]
      ,
    datasets: [
      {
        label: "# de Electrolineras",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4,
        pointBorderWidth: 2
      },

      {
        label: "# de Electroterminales",
        data: [1, 15, 8, 7, 6, 9],
        borderWidth: 4,
        pointBorderWidth: 2
      }
    ],
  },
  options: {
    // responsive: true,
    // maitainAspectRadio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

