import "./styles.css";
import happy from "./media/happy.png";
import lostinspace from "./media/lostinspace.png";
import kevinjames from "./media/kevinjames.png";
import thealienist from "./media/thealienist.png";
import theweekof from "./media/theweekof.png";
import extraodrinary from "./media/extraodrinary.png";
import movieTrailer from "./media/movieTrailer.mp4";
import logo from "./media/logo.png";

const header = document.querySelector(".js-header"),
  video = document.getElementById("js-main-video"),
  muteBtn = document.querySelector(".volume"),
  muteIcon = document.querySelector(".volume i"),
  searchBtn = document.querySelector(".fa-search"),
  searchBar = document.querySelector(".item-bar"),
  searchBarInput = document.querySelector(".item-bar-input input"),
  listMovieArr = document.querySelectorAll(".movie-item"),
  movie__overlay = document.querySelector(".movie__overlay");

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
    muteIcon.classList.remove("fa-volume-off");
    muteIcon.classList.add("fa-volume-up");
    localStorage.setItem("muted", false);
  } else {
    video.muted = true;
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-off");
    localStorage.setItem("muted", true);
  }
};


const handleContentLoaded = () => {
  window.addEventListener("scroll", handleScroll);
  muteBtn.addEventListener("click", handleMuteBtn);
  // searchBtn.addEventListener("click", handleSearchBar);
  loadMutedPreference();
};

searchBtn.addEventListener("click", function() {
  if (searchBarInput.classList[1]) {
    searchBarInput.classList.remove("active");
    searchBarInput.style.width = "0px";
    searchBar.classList.remove("active-container");
  } else {
    searchBarInput.classList.add("active");
    searchBarInput.style.width = "250px";
    searchBar.classList.add("active-container");
  }
});

// movie list handle
listMovieArr.forEach((movie, index) => {
  movie.addEventListener("mouseover", function() {
    movie.classList.add("movie-item-focus");
    movie.childNodes[1].style.opacity = 1;
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
    movie.childNodes[1].style.opacity = 0;
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
