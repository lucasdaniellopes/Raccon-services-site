function championSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-champions");
    const championsOptions = document.querySelectorAll(
      "#champions-options li a"
    );
    const skinsOptions = document.querySelectorAll("#skins-options li a");

    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();
      let matches = 0;
      championsOptions.forEach((option) => {
        const text = option.getAttribute("data-slug").toLowerCase();
        if (text.includes(searchText)) {
          option.parentElement.classList.remove("hidden");
          matches++;
        } else {
          option.parentElement.classList.add("hidden");
        }
      });
    });
  });
}

function handleQueryParams() {
  const main = document.querySelector("content");
  const list = document.getElementById("champions-options");
  const urlParams = new URLSearchParams(window.location.search);
  const champ = urlParams.get("champ");

  if (champ) {
    list.innerHTML = "";
    addChampionSkin(champ);
  }

  if (list) {
    main.scrollIntoView({ behavior: "smooth" });
  }
}

function addChampionSkin(champ) {
  const skinHtml = `<li class="content-collection__results-champs__champ max-w-[200px] w-[31%] sm:w-[25%] flex justify-center hover:scale-105 duration-300">
                  <a href="../handlevelConfirmation/handlevelConfirmation.html" data-slug="jhin-project" name="jhin-project">
                    <div class="content-col2__collection-info__img handlevelSkin overflow-hidden">
                      <img src="../../../assets/jhin-project.png" alt="" class="border-4 border-[#1f1032]">
                    </div>
                  </a>
                </li>`;
  const skinHtml2 = `<li class="content-collection__results-champs__champ relative max-w-[200px] w-[31%] sm:w-[25%] flex justify-center hover:scale-105 duration-300">
                  <a href="../handlevelConfirmation/handlevelConfirmation.html" data-slug="jhin-project2" name="jhin-project2">
                    <div class="content-col2__collection-info__img  handlevelSkin overflow-hidden">
                      <img src="../../../assets/jhin-project.png" alt="" class="border-4 border-[#1f1032]">
                    </div>
                    <div class="absolute flex items-start justify-center h-10 top-2 skinText font-medium text-[8px] md:text-sm ml-2">
                      <span class=" text-wrap text-center pt-1">Jhin PROJETO</span>
                    </div>
                    <div class="absolute flex items-end justify-center h-10 skinTextPreco font-medium bottom-2 text-[8px] md:text-sm ml-2">
                      <span class="text-wrap text-end pb-2">R$36.00</span>
                    </div>
                  </a>
                </li>`;
  document
    .getElementById("champions-options")
    .insertAdjacentHTML("beforeend", skinHtml);
  document
    .getElementById("champions-options")
    .insertAdjacentHTML("beforeend", skinHtml2);
}

window.onload = handleQueryParams;

championSearch();
