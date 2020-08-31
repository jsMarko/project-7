const alertBar = document.querySelector(".alert-bar");
const closeBtn = document.querySelector(".close-alert");
const purple = "#6060B1";
const darkGreen = "#62A2B1";
const lightGreen = "#70C07C";
const msgCloseBtn = document.querySelector(".msgCloseBtn");
const bellBtn = document.querySelector(".notification-bell");

// ! STILL NEED TO ADD MARKER NEXT TO BELL ICON
bellBtn.addEventListener("click", (e) => {
   const button = e.target;
   const popup = document.querySelector(".popup");
   const alertMsgs = popUpCon.querySelectorAll(".hide");
   console.log(alertMsgs.length);

   const marker = document.querySelector(".marker");
   marker.style.display = "none";

   if (alertMsgs.length === 3) {
      console.log("You have no more messages");
      const noMsg = document.querySelector(".noMsg-marker");
      noMsg.style.opacity = "1";
   } else {
      if (popup.classList.contains("hide")) {
         console.log("hide was found");
         popup.classList.remove("hide");
      } else {
         popup.classList.add("hide");
      }
   }
});

// ! ****** ClOSE MESSAGES IN POPUP *********
const popUpCon = document.querySelector(".popup");

popUpCon.addEventListener("click", (e) => {
   const tgt = e.target;
   const alertMsgs = popUpCon.querySelectorAll(".message");
   // console.log(alertMsgs.length);

   if (tgt.classList.contains("msgCloseBtn")) {
      if (alertMsgs.length === 1) {
         console.log("Close Container");
         tgt.closest(".message").className = "hide";
         popUpCon.className = "popup hide";
      } else {
         console.log("Close One Message");
         tgt.closest(".message").className = "hide";
      }
   }
});

closeBtn.addEventListener("click", () => {
   alertBar.style.display = "none";
});

const trafficBtns = document.querySelectorAll(".li-traffic");

trafficBtns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      const tgt = e.target;

      if (tgt.classList.contains("li-traffic")) {
         document.querySelector(".active").classList.remove("active");
         tgt.classList.add("active");
         if (btn.textContent === "Hourly") {
            hourly();
         } else if (btn.textContent === "Daily") {
            daily();
         } else if (btn.textContent === "Weekly") {
            weekly();
         } else if (btn.textContent === "Monthly") {
            monthly();
         }
      }
   });
});

weekly();

function hourly() {
   let trafficLine = new Chart("chartjs-traffic", {
      type: "line",
      data: {
         labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
         datasets: [
            {
               data: [0, 20, 10, 18, 22, 21, 35, 47, 21, 40, 50],
               borderWidth: 1,
               borderColor: "#888",
               hoverBorderWidth: 3,
               hoverBorderColor: "#000"
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
}

function daily() {
   let trafficLine = new Chart("chartjs-traffic", {
      type: "line",
      data: {
         labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         datasets: [
            {
               data: [0, 100, 71, 331, 183, 118, 105, 320, 455, 165, 225, 500],
               borderWidth: 1,
               borderColor: "#888",
               hoverBorderWidth: 3,
               hoverBorderColor: "#000"
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
}

function weekly() {
   let trafficLine = new Chart("chartjs-traffic", {
      type: "line",
      data: {
         labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "17-3", "4-10", "11-17", "18-24", "25-31"],
         datasets: [
            {
               data: [0, 750, 1200, 500, 1500, 2100, 1200, 1850, 1300, 1400, 2500],
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
}

function monthly() {
   let trafficLine = new Chart("chartjs-traffic", {
      type: "line",
      data: {
         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         datasets: [
            {
               data: [500, 850, 1200, 740, 1500, 1710, 1200, 1850, 1300, 1400, 1743, 2100],
               borderWidth: 1,
               borderColor: "#888",
               hoverBorderWidth: 3,
               hoverBorderColor: "#000"
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
}

// let dailyChart = document.querySelector("#daily-traffic").getContext("2d");

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

// let mobileUserChart = document.querySelector("#mobile-users").getContext("2d");

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

// ! AutoComplete

const names = [{ name: "Cindy Martin" }, { name: "Clark Kent" }, { name: "Susan Day" }, { name: "John Mathis" }];

const inputField = document.querySelector(".userField");
const dropDownResults = document.querySelector(".search-results");

inputField.addEventListener("keyup", () => {
   const input = inputField.value.toLowerCase();
   dropDownResults.innerHTML = "";
   const results = names.filter((name) => {
      return name.name.toLowerCase().startsWith(input);
   });

   results.forEach((result) => {
      const div = document.createElement("div");
      div.innerHTML = result.name;
      div.className = "result-names";
      dropDownResults.appendChild(div);
   });

   if (input === "") {
      dropDownResults.innerHTML = "";
   }
});

const resultEvent = document.querySelector(".search-results");

resultEvent.addEventListener("click", (e) => {
   const item = e.target;
   inputField.value = item.textContent;
   console.log(inputField.value);
   dropDownResults.innerHTML = "";
});

// setting eventListener for send

const user = document.querySelector(".userField");
const message = document.querySelector(".messageField");
const send = document.querySelector(".send-btn");

send.addEventListener("click", (e) => {
   e.preventDefault();
   // make sure user and message fields are filled out
   if (user.value === "" && message.value === "") {
      alert("Please fill out user and message fields before sending");
   } else if (user.value === "") {
      alert("Please fill out user field before sending");
   } else if (message.value === "") {
      alert("Please fill out message field before sending");
   } else {
      alert(`Message successfully sent to: ${user.value}`);
      user.value = "";
      message.value = "";
   }
});

const switchOne = document.querySelector("#btn1");
const switchTwo = document.querySelector("#btn2");
const switchBtns = document.querySelectorAll(".switch-btn");
const displayed = document.querySelector(".display-storage");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");

switchBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
         btn.classList.remove("active");
      } else if (!btn.classList.contains("active")) {
         btn.classList.add("active");
      }
   });
});

function saveSettings() {
   let activeStrB1 = switchOne.classList.contains("active").toString();
   let activeStrB2 = switchTwo.classList.contains("active").toString();
   let timezone = document.querySelector(".timeZone").value;

   const settingsObj = {
      switch1: activeStrB1,
      switch2: activeStrB2,
      timeZone: timezone
   };
   localStorage.setItem("Settings", JSON.stringify(settingsObj));
}

save.addEventListener("click", () => {
   saveSettings();
});

const settings = JSON.parse(localStorage.getItem("Settings"));

if (settings === null) {
   // Do nothing
} else {
   console.log(settings.switch1 + " " + settings.switch2 + " " + settings.timeZone);
   if (settings.switch1 === "true") {
      switchOne.classList.add("active");
   } else {
      switchOne.classList.remove("active");
   }

   if (settings.switch2 === "true") {
      switchTwo.classList.add("active");
   } else {
      switchTwo.classList.remove("active");
   }

   // console.log(timezone.value);
   let timezone = document.querySelector(".timeZone");
   timezone.value = settings.timeZone;
   console.log(settings.timeZone);
}

cancel.addEventListener("click", () => {
   if (switchOne.classList.contains("active")) {
      switchOne.classList.remove("active");
   }
   if (switchTwo.classList.contains("active")) {
      switchTwo.classList.remove("active");
   }

   let timezone = document.querySelector(".timeZone");
   timezone.value = "Atlantic Standard Time";
   saveSettings();
});
