function onToggleMenu(e) {
  const navbar = document.getElementById("navbar");
  const navbarUl = document.getElementById("navbar-ul");
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("bottom-[-30%]");
  navbar.classList.toggle("left-[0%]");
  navbar.classList.toggle("opacity-100");

  navbarUl.classList.toggle("hidden");
  navbarUl.classList.toggle("flex");
}

function changeHeaderArrow(e) {
  const navbar = e.childNodes[1].childNodes[3];
  navbar.name = navbar.name === "caret-down" ? "caret-up" : "caret-down";
}
function toggleAnswer(id) {
  const answer = document.getElementById(`answer-${id}`);
  answer.classList.toggle("hidden");
  answer.parentElement.classList.toggle("scale-[1.05]");
}

function changeFaqArrow(e) {
  const accordion = e.childNodes[1].childNodes[3].childNodes[1];
  accordion.name =
    accordion.name === "chevron-down-outline"
      ? "chevron-up-outline"
      : "chevron-down-outline";
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("block");
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("modal").classList.remove("block");
  document.getElementById("modal").classList.add("hidden");
}
