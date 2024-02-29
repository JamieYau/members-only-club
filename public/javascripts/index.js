document.addEventListener("DOMContentLoaded", function () {
  // Get the header element
  let header = document.getElementById("header");

  // Get the main element
  let main = document.querySelector("main")

  // Set the main height dynamically based on viewport height and header height
  main.style.height = "calc(100vh - " + header.offsetHeight + "px)";
});
