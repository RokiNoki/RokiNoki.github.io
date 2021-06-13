console.log("TypeScript started");

const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

function Toggle() {
  toggleBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
}

toggleBtn.addEventListener("click", () => {
  Toggle();
});

/* Ignore This */

/* If you click on a list item
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (toggleBtn.classList.contains("open")) {
      Toggle();
    }
  });
});
*/
