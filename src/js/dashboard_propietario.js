const lineal = document.getElementById("lineal");
const dona = document.getElementById("dona");

// Variables para ajustar el height del bar chart
var desktop = window.matchMedia("(min-width: 769px)");
var mobile = window.matchMedia("(max-width: 768px)");
let configBar;

const dataBar = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "# Registros de Propietarios",
      data: [12, 10, 4, 10, 23, 43, 22, 0, 0, 0, 0, 0],
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      // backgroundColor: "#ff6385",
    },
  ],
};

if (desktop.matches) {
  configBar = {
    type: "line",
    data: dataBar,
    options: {
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
      pointBackgroundColor: "#ffff",
      radius: 5,
    },
  };
}
if (mobile.matches) {
  configBar = {
    type: "line",
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
      pointBackgroundColor: "#ffff",
      radius: 5,
    },
  };
}

const dataDona = {
  labels: ["Activos", "Sin revisar", "Supendidos"],
  datasets: [
    {
      label: "Propietarios",
      data: [120, 63, 12], // Valores numéricos para cada categoría
      backgroundColor: [
        // "#007bff",
        // "#235b4e",
        // "#bc945a",
        // "#9f2241",
        "rgba(75, 192, 192, 0.6)", // Aprobadas
        "rgba(255, 205, 86, 0.6)", // En revisión
        "rgba(255, 99, 132, 0.6)", // Sin revisar
        "rgba(54, 162, 235, 0.6)", // Con problemas
      ],
      borderColor: [
        // "#007bff",
        // "#235b4e",
        // "#bc945a",
        // "#9f2241",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
      tension: 0.4,
    },
  ],
};

const configDona = {
  type: "pie",
  data: dataDona,
  options: {

    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true, // Cambia los rectángulos a puntos (círculos)
          pointStyle: "circle", // Otras opciones: 'circle', 'rect', 'rectRounded', 'rectRot', 'triangle', 'star', 'line', 'dash'
          boxWidth: 15, // Ancho de la caja (rectángulo)
          boxHeight: 15, // Altura de la caja (aplica a ciertas formas)
          padding: 20, // Espaciado entre el rectángulo y el texto
          font: {
            size: 12, // Tamaño de la fuente de la leyenda
            family: "Arial",
            weight: "bold",
          },
          
        },
      },
      title: {
        display: true,
        text: "Estatus de Propietarios",
        font: {
          size: 12, // Tamaño de la fuente del título
          family: "Arial",
          weight: "bold",
        },
      },
    },
  },
};

new Chart(dona, configDona);
new Chart(lineal, configBar);
