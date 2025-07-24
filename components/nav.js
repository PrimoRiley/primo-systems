// assets/nav.js
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("flex"); // use flex to restore layout
      navLinks.classList.toggle("flex-col"); // makes the links stack vertically
      navLinks.classList.toggle("absolute");
      navLinks.classList.toggle("top-20"); // space below the nav bar
      navLinks.classList.toggle("bg-bgBlack");
      navLinks.classList.toggle("rounded-xl");
      navLinks.classList.toggle("p-4");
      navLinks.classList.toggle("z-50");
    });
  });
