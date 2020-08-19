const alertBar = document.querySelector(".alert-bar");
const closeBtn = document.querySelector(".close-alert");

closeBtn.addEventListener("click", () => {
   alertBar.style.display = "none";
});
