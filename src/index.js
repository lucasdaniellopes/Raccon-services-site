function onToggleMenu(e) {
  const navbar = document.getElementById("navbar");
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("bottom-[-25%]");
  navbar.classList.toggle("opacity-100");
}

function changeArrow(e) {
  const navbar = e.childNodes[1].childNodes[3];
  navbar.name = navbar.name === "caret-down" ? "caret-up" : "caret-down";
}
