const handleScroll = header => {
  const scrollHeight = Math.floor(window.scrollY);
  if (scrollHeight > 50) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
};

const searchBtnFocus = (searchBar, searchBarInput) => {
  if (searchBarInput.classList[1]) {
    searchBarInput.classList.remove("active");
    searchBarInput.style.width = "0px";
    searchBar.classList.remove("active-container");
  } else {
    searchBarInput.classList.add("active");
    searchBarInput.style.width = "250px";
    searchBar.classList.add("active-container");
  }
};

export default function handleNavigation() {
  const header = document.querySelector(".js-header"),
    searchBtn = header.querySelector(".fa-search"),
    searchBar = header.querySelector(".item-bar"),
    searchBarInput = document.querySelector(".item-bar-input input");

  window.addEventListener("scroll", function () {
    handleScroll(header);
  });

  searchBtn.addEventListener("click", function () {
    searchBtnFocus(searchBar, searchBarInput);
  });
}
