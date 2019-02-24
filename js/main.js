// ELEMENTS //
const navBtns = document.getElementsByClassName("nav-btn");
const toggleBtn = document.getElementById("toggle-icon");
const navBtnContainer = document.getElementsByClassName("nav-btn-container")[0];

// EVENT LISTENERS //

// adding EventListener for each nav btn
for (const btn of navBtns) {
  btn.addEventListener("click", e => {
    // to collapse after a nav-btn is clicked
    if (!btn.classList.contains("collapse")) {
      navBtnContainer.classList.add("collapse");
    }

    // add class active for styling
    if (!btn.classList.contains("active")) {
      const current = document.getElementsByClassName("active")[0];
      current.classList.remove("active");
      btn.classList.add("active");
    }
  });
}

// toggle collapse on toggle-btn click
toggleBtn.addEventListener("click", () => {
  navBtnContainer.classList.toggle("collapse");
});
