function updateNumberOfSkins(value) {
  document.getElementById("minNumberOfSkins").textContent = value;
}

function updateNumberOfChampions(value) {
  document.getElementById("minNumberOfChampions").textContent = value;
}

function updatePrice(value) {
  document.getElementById("minPrice").textContent = value + " RP";
}

function serverDropdown() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectTop = document.getElementById("server-select-top");
    const selectList = document.getElementById("server-select-list");
    const searchInput = document.getElementById("search-servers");
    const serverOptions = document.querySelectorAll("#server-options li a");
    const noResults = document.getElementById("server-no-results");
    const resetBtn = document.getElementById("server-reset-btn");
    const chevronIcon = document.getElementById("server-chevron-icon");

    selectTop.addEventListener("click", () => {
      selectList.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    });

    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();
      let matches = 0;

      serverOptions.forEach((option) => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchText)) {
          option.parentElement.classList.remove("hidden");
          matches++;
        } else {
          option.parentElement.classList.add("hidden");
        }
      });

      noResults.classList.toggle("hidden", matches > 0);
    });

    serverOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedChampion = option.textContent;
        event.target.classList.toggle("bg-secondary");
        selectTop.querySelector("span").textContent = selectedChampion;
        selectTop.setAttribute("data-slug", option.getAttribute("data-slug"));
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      });
    });

    resetBtn.addEventListener("click", (event) => {
      event.preventDefault();
      selectTop.querySelector("span").textContent = "Selecione um servidor";
      selectTop.removeAttribute("data-slug");
      searchInput.value = "";
      serverOptions.forEach((option) => {
        option.classList.remove("bg-secondary");
        option.parentElement.classList.remove("hidden");
      });
      noResults.classList.add("hidden");
    });

    document.addEventListener("click", (event) => {
      if (
        !selectTop.contains(event.target) &&
        !selectList.contains(event.target)
      ) {
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      }
    });
  });
}

function championDropdown() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectTop = document.getElementById("champion-select-top");
    const selectList = document.getElementById("champions-select-list");
    const searchInput = document.getElementById("search-champions");
    const championsOptions = document.querySelectorAll(
      "#champions-options li a"
    );
    const noResults = document.getElementById("champions-no-results");
    const resetBtn = document.getElementById("champions-reset-btn");
    const chevronIcon = document.getElementById("champions-chevron-icon");

    selectTop.addEventListener("click", () => {
      selectList.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    });

    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();
      let matches = 0;

      championsOptions.forEach((option) => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchText)) {
          option.parentElement.classList.remove("hidden");
          matches++;
        } else {
          option.parentElement.classList.add("hidden");
        }
      });

      noResults.classList.toggle("hidden", matches > 0);
    });

    championsOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedChampion = option.textContent;
        selectTop.querySelector("span").textContent = selectedChampion;
        selectTop.setAttribute("data-slug", option.getAttribute("data-slug"));
        event.target.classList.toggle("bg-secondary");
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      });
    });

    resetBtn.addEventListener("click", (event) => {
      event.preventDefault();
      selectTop.querySelector("span").textContent = "Selecione um campeão";
      selectTop.removeAttribute("data-slug");
      searchInput.value = "";
      championsOptions.forEach((option) => {
        option.classList.remove("bg-secondary");
        option.parentElement.classList.remove("hidden");
      });
      noResults.classList.add("hidden");
    });

    document.addEventListener("click", (event) => {
      if (
        !selectTop.contains(event.target) &&
        !selectList.contains(event.target)
      ) {
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      }
    });
  });
}

function skinDropdown() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectTop = document.getElementById("skin-select-top");
    const selectList = document.getElementById("skins-select-list");
    const searchInput = document.getElementById("search-skins");
    const skinsOptions = document.querySelectorAll("#skins-options li a");
    const noResults = document.getElementById("skins-no-results");
    const resetBtn = document.getElementById("skins-reset-btn");
    const chevronIcon = document.getElementById("skins-chevron-icon");

    selectTop.addEventListener("click", () => {
      selectList.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    });

    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();
      let matches = 0;

      skinsOptions.forEach((option) => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchText)) {
          option.parentElement.classList.remove("hidden");
          matches++;
        } else {
          option.parentElement.classList.add("hidden");
        }
      });

      noResults.classList.toggle("hidden", matches > 0);
    });

    skinsOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedChampion = option.textContent;
        selectTop.querySelector("span").textContent = selectedChampion;
        selectTop.setAttribute("data-slug", option.getAttribute("data-slug"));
        event.target.classList.toggle("bg-secondary");
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      });
    });

    resetBtn.addEventListener("click", (event) => {
      event.preventDefault();
      selectTop.querySelector("span").textContent = "Selecione uma skin";
      selectTop.removeAttribute("data-slug");
      searchInput.value = "";
      skinsOptions.forEach((option) => {
        option.classList.remove("bg-secondary");
        option.parentElement.classList.remove("hidden");
      });
      noResults.classList.add("hidden");
    });

    document.addEventListener("click", (event) => {
      if (
        !selectTop.contains(event.target) &&
        !selectList.contains(event.target)
      ) {
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      }
    });
  });
}

serverDropdown();
championDropdown();
skinDropdown();
