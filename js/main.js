// ELEMENTS //
const navBtns = document.getElementsByClassName("nav-btn");

// EVENT LISTENERS //

for (const btn of navBtns) {
  btn.addEventListener("click", e => {
    if (!btn.classList.contains("active")) {
      const current = document.getElementsByClassName("active")[0];
      current.classList.remove("active");
      btn.classList.add("active");
    }
  });
}
