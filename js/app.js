const alertBar = document.querySelector(".alert-bar");
const closeBtn = document.querySelector(".close-alert");
const purple = "#6060B1";
const darkGreen = "#62A2B1";
const lightGreen = "#70C07C";

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
      responsive: true,
      maintainAspectRatio: false,
      legend: {
         display: false
      }
   }
});

let dailyChart = document.querySelector("#daily-traffic").getContext("2d");

let dailyBar = new Chart("daily-traffic", {
   type: "bar",
   data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
         {
            data: [50, 120, 221, 175, 250, 120, 130],
            borderWidth: 1,
            borderColor: "#888",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
            backgroundColor: purple
         }
      ]
   },
   options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
         display: false
      }
   }
});

let mobileUserChart = document.querySelector("#mobile-users").getContext("2d");

let mobileDoughnut = new Chart("mobile-users", {
   type: "doughnut",
   data: {
      labels: ["Phone", "Tablet", "Desktop"],
      datasets: [
         {
            data: [50, 50, 200],
            borderWidth: 1,
            borderColor: "#888",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
            backgroundColor: [lightGreen, darkGreen, purple]
         }
      ]
   },
   options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
         display: true,
         position: "right",
         labels: {
            fontColor: "#7C7C7C"
         },
         backgroundColor: ["#5F61B6", "#43C27A", "#3EA4B4"]
      }
   }
});
