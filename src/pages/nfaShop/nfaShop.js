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
        const selectedServer = option.textContent;
        selectTop.querySelector("span").textContent = selectedServer;
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
      serverOptions.forEach((option) =>
        option.parentElement.classList.remove("hidden")
      );
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
    const serverOptions = document.querySelectorAll("#champions-options li a");
    const noResults = document.getElementById("champions-no-results");
    const resetBtn = document.getElementById("champions-reset-btn");
    const chevronIcon = document.getElementById("champions-chevron-icon");

    // Toggle the visibility of the select list
    selectTop.addEventListener("click", () => {
      selectList.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    });

    // Filter the server list based on the search input
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

    // Update the selected server when an option is clicked
    serverOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedServer = option.textContent;
        selectTop.querySelector("span").textContent = selectedServer;
        selectTop.setAttribute("data-slug", option.getAttribute("data-slug"));
        selectList.classList.add("hidden");
        chevronIcon.classList.remove("rotate-180");
      });
    });

    // Reset the selection and search input
    resetBtn.addEventListener("click", (event) => {
      event.preventDefault();
      selectTop.querySelector("span").textContent = "Selecione um campeão";
      selectTop.removeAttribute("data-slug");
      searchInput.value = "";
      serverOptions.forEach((option) =>
        option.parentElement.classList.remove("hidden")
      );
      noResults.classList.add("hidden");
    });

    // Close the select list if clicked outside
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
