// ELEMENTS //
const navBtns = document.getElementsByClassName("nav-btn");
const toggleBtn = document.getElementById("toggle-icon");
const navBtnContainer = document.getElementsByClassName("nav-btn-container")[0];

// EVENT LISTENERS //
// active nav btn border
for (const btn of navBtns) {
  btn.addEventListener("click", e => {
    if (!btn.classList.contains("active")) {
      const current = document.getElementsByClassName("active")[0];
      current.classList.remove("active");
      btn.classList.add("active");
    }
  });
}

// toggle-btn click
toggleBtn.addEventListener("click", () => {
  navBtnContainer.classList.toggle("collapse");
});
