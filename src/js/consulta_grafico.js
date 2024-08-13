const lineal = document.getElementById("bar");

// Variables para ajustar el height del bar chart
var desktop = window.matchMedia("(min-width: 769px)");
var mobile = window.matchMedia("(max-width: 768px)");
let configBar;

const dataBar = {
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
    "Zacatecas",
  ],
  datasets: [
    {
      label: "# de Electrolineras",
      data: [
        12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3,
        5, 2, 3, 12, 19, 3, 5, 2, 3, 5, 9,
      ],
      borderWidth: 1,
      borderRadius: 5,
      borderSkipped: false,
    },

    {
      label: "# de Electroterminales",
      data: [
        8, 15, 7, 10, 4, 6, 8, 15, 7, 10, 4, 6, 8, 15, 7, 10, 4, 6, 8, 15, 7,
        10, 4, 6, 8, 15, 7, 10, 4, 6, 2, 9,
      ],
      borderWidth: 1,
      borderRadius: 5,
      // borderSkipped: false,
    },
  ],
};

if (desktop.matches) {
    configBar = {
        type: "bar",
        data: dataBar,
        options: {
          responsive: true,
          maintainAspectRatio: false, // Importante para ajustar la altura
          scales: {
            x: {
              ticks: {
                font: {
                  size: 10, // Tamaño de la fuente para los labels del eje X
                },
              },
              stacked: true,
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 10, // Tamaño de la fuente para los labels del eje Y
                },
              },
              stacked: true,
            },
          },
          plugins: {
            legend: {
              labels: {
                usePointStyle: true, // Cambia los rectángulos a puntos (círculos)
                pointStyle: "circle", // Otras opciones: 'circle', 'rect', 'rectRounded', 'rectRot', 'triangle', 'star', 'line', 'dash'
                boxWidth: 15, // Ancho de la caja (rectángulo)
                boxHeight: 15, // Altura de la caja (aplica a ciertas formas)
                padding: 20, // Espaciado entre el rectángulo y el texto
                font: {
                  size: 12, // Tamaño de la fuente para las etiquetas de la leyenda
                },
              },
            },
          },
        },
      };
}
if (mobile.matches) {
  configBar = {
    type: "bar",
    data: dataBar,
    options: {
      responsive: true,
      maintainAspectRatio: false, // Importante para ajustar la altura
      scales: {
        x: {
          ticks: {
            font: {
              size: 10, // Tamaño de la fuente para los labels del eje X
            },
          },
          stacked: true,
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 10, // Tamaño de la fuente para los labels del eje Y
            },
          },
          stacked: true,
        },
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true, // Cambia los rectángulos a puntos (círculos)
            pointStyle: "circle", // Otras opciones: 'circle', 'rect', 'rectRounded', 'rectRot', 'triangle', 'star', 'line', 'dash'
            boxWidth: 15, // Ancho de la caja (rectángulo)
            boxHeight: 15, // Altura de la caja (aplica a ciertas formas)
            padding: 20, // Espaciado entre el rectángulo y el texto
            font: {
              size: 12, // Tamaño de la fuente para las etiquetas de la leyenda
            },
          },
        },
      },
    },
  };
}

new Chart(lineal, configBar);