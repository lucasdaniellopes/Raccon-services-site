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
  championSearch();