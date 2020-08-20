const alertBar = document.querySelector(".alert-bar");
const closeBtn = document.querySelector(".close-alert");

closeBtn.addEventListener("click", () => {
   alertBar.style.display = "none";
});

let trafficChart = document.querySelector("#chartjs-traffic").getContext("2d");

let trafficLine = new Chart("chartjs-traffic", {
   type: "line",
   data: {
      labels: [
         "16-22",
         "23-29",
         "30-5",
         "6-12",
         "13-19",
         "20-26",
         "17-3",
         "4-10",
         "11-17",
         "18-24",
         "25-31"
      ],
      datasets: [
         {
            data: [
               500,
               850,
               1200,
               740,
               1500,
               2100,
               1200,
               1850,
               1300,
               1400,
               2100
            ],
            borderWidth: 1,
            borderColor: "#888",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
         }
      ]
   },
   options: {
      maintainAspectRatio: false,
      legend: {
         display: false
      }
   }
});
