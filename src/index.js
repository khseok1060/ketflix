import "./styles.css";

const header = document.querySelector(".js-header"),
  video = document.getElementById("js-main-video"),
  muteBtn = document.querySelector(".volume"),
  searchBtn = document.querySelector(".fa-search"),
  searchBar = document.querySelector(".header-menu-search"),
  searchBarInput = document.querySelector(".header-menu-search-input"),
  listMovieArr = document.querySelectorAll(".movie-item");

video.autoplay = true;
video.loop = true;

const handleScroll = event => {
  const scrollHeight = Math.floor(window.scrollY);
  if (scrollHeight > 50) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }

  if (scrollHeight > 300) {
    video.pause();
  } else {
    video.play();
  }
};

const handlePlayScroll = event => {
  const scrollHeight = Math.floor(window.scrollY);
  if (scrollHeight > 200) {
    video.pause();
  } else {
    video.play();
  }
};

const loadMutedPreference = () => {
  const mutedPref = localStorage.getItem("muted");
  if (mutedPref !== null) {
    if (mutedPref === "true") {
      video.muted = true;
    } else {
      video.muted = false;
    }
  } else {
    video.muted = false;
  }
};

const handleMuteBtn = event => {
  if (video.muted) {
    video.muted = false;
    localStorage.setItem("muted", false);
  } else {
    video.muted = true;
    localStorage.setItem("muted", true);
  }
};


const handleContentLoaded = () => {
  window.addEventListener("scroll", handleScroll);
  muteBtn.addEventListener("click", handleMuteBtn);
  searchBtn.addEventListener("click", handleSearchBar);
  loadMutedPreference();
};

// movie list handle
listMovieArr.forEach((movie, index) => {
  movie.addEventListener("mouseover", function() {
    movie.classList.add("movie-item-focus");
    for (let i = 0; i < listMovieArr.length; i++) {
      if (i < index) {
        listMovieArr[i].classList.add("movie-item-move-left");
      } else if (i > index) {
        listMovieArr[i].classList.add("movie-item-move-right");
      }
    }
  });
  movie.addEventListener("mouseout", function() {
    movie.classList.remove("movie-item-focus");
    for (let i = 0; i < listMovieArr.length; i++) {
      if (i < index) {
        listMovieArr[i].classList.remove("movie-item-move-left");
      } else if (i > index) {
        listMovieArr[i].classList.remove("movie-item-move-right");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", handleContentLoaded);
