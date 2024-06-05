document.addEventListener("DOMContentLoaded", (event) => {
  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");
  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      navbar.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      navbar.classList.remove("open");
      menuOpen = false;
    }
  });
});
