function championSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-champions");
    const radioButtons = document.querySelectorAll(
      'input[name="collection-btns"]'
    );
    const skinsList = document.getElementById("skins-options");
    const championsList = document.getElementById("champions-options");

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

      skinsOptions.forEach((option) => {
        const text = option.getAttribute("data-slug").toLowerCase();
        if (text.includes(searchText)) {
          option.parentElement.classList.remove("hidden");
          matches++;
        } else {
          option.parentElement.classList.add("hidden");
        }
      });
    });

    radioButtons.forEach((radio) => {
      if (radio.checked && radio.value == "champions") {
        skinsList.classList.add("hidden");
        championsList.classList.remove("hidden");
        input.setAttribute("placeholder", "Procure um campeão");
      } else if (radio.checked && radio.value == "skins") {
        skinsList.classList.remove("hidden");
        championsList.classList.add("hidden");
        input.setAttribute("placeholder", "Procure uma skin");
      }
      radio.addEventListener("change", () => {
        if (radio.checked && radio.value === "champions") {
          skinsList.classList.add("hidden");
          championsList.classList.remove("hidden");
          input.setAttribute("placeholder", "Procure um campeão");
        } else if (radio.checked && radio.value == "skins") {
          skinsList.classList.remove("hidden");
          championsList.classList.add("hidden");
          input.setAttribute("placeholder", "Procure uma skin");
        }
      });
    });
  });
}
championSearch();
