const lineal = document.getElementById("lineal");
const dona = document.getElementById("dona");

new Chart(lineal, {
  type: "line",
  data: {
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
  },
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
    radius: 10,
  },
});

const data = {
  labels: ["Aprobados", "En revisión", "Sin revisar", "Con problemas"],
  datasets: [
    {
      label: "Propietarios",
      data: [12, 19, 3, 5], // Valores numéricos para cada categoría
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)", // Aprobadas
        "rgba(255, 205, 86, 0.6)", // En revisión
        "rgba(54, 162, 235, 0.6)", // Con problemas
        "rgba(255, 99, 132, 0.6)", // Sin revisar
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
      tension: 0.4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
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

new Chart(dona, config);
