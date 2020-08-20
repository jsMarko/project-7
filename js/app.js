const alertBar = document.querySelector(".alert-bar");
const closeBtn = document.querySelector(".close-alert");

closeBtn.addEventListener("click", () => {
   alertBar.style.display = "none";
});

let trafficChart = document.querySelector("#chartjs-traffic").getContext("2d");

let trafficLine = new chart("chartjs-traffic", {
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
            label: "TRAFFIC",
            data: [500, 1000, 1500, 2000, 2500]
         }
      ]
   },
   options: {}
});
