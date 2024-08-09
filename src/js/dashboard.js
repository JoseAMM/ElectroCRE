const lineal = document.getElementById("lineal");
const dona = document.getElementById("dona");

new Chart(lineal, {
  type: "bar",
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
      "Zacatecas",
    ],
    datasets: [
      {
        label: "# de Electrolineras",
        data: [
          12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3,
          5, 2, 3, 12, 19, 3, 5, 2, 3,
        ],
        borderWidth: 1,
      },

      {
        label: "# de Electroterminales",
        data: [
          8, 15, 7, 10, 4, 6, 8, 15, 7, 10, 4, 6, 8, 15, 7, 10, 4, 6, 8, 15, 7,
          10, 4, 6, 8, 15, 7, 10, 4, 6,
        ],
        borderWidth: 1,
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
          font: {
            size: 12, // Tamaño de la fuente para las etiquetas de la leyenda
          },
        },
      },
    },
  },
});


const data = {
  labels: ['Aprobadas', 'En revisión', 'Sin revisar', 'Con problemas'],
  datasets: [
    {
      label: 'Electrolinera',
      data: [12, 19, 3, 5], // Valores numéricos para cada categoría
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',  // Aprobadas
        'rgba(255, 205, 86, 0.6)',  // En revisión
        'rgba(54, 162, 235, 0.6)',   // Con problemas
        'rgba(255, 99, 132, 0.6)',  // Sin revisar
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1
    },
    // {
    //   label: 'Electroterminal',
    //   data: [8, 23, 4, 2], // Valores numéricos para cada categoría
    //   backgroundColor: [
    //     'rgba(75, 192, 192, 0.6)',  // Aprobadas
    //     'rgba(255, 205, 86, 0.6)',  // En revisión
    //     'rgba(54, 162, 235, 0.6)',   // Con problemas
    //     'rgba(255, 99, 132, 0.6)',  // Sin revisar
    //   ],
    //   borderColor: [
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(255, 205, 86, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 99, 132, 1)',
    //   ],
    //   borderWidth: 1
    // }
  ]
};

const config = {
  type: "polarArea",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,  // Tamaño de la fuente de la leyenda
            family: 'Arial',
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: "Estatus Estaciones de Carga",
        font: {
          size: 12,  // Tamaño de la fuente del título
          family: 'Arial',
          weight: 'bold'
        }
      }
    }
  }
};

new Chart(dona, config);

