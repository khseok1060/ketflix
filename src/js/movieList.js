const listMovieArr = document.querySelectorAll(".movie-item");
let postInterval = null;

const startSlideShow = (slideImgArr) => {
  let index = 0;

  if (postInterval === null) {
    postInterval = setInterval(function () {
      if (index === 0) {
        slideImgArr[slideImgArr.length - 1].classList.remove("slide-show");
        slideImgArr[0].classList.add("slide-show");
        index = index + 1;
      } else if (index === slideImgArr.length - 1) {
        slideImgArr[index - 1].classList.remove("slide-show");
        slideImgArr[index].classList.add("slide-show");
        index = 0;
      } else {
        slideImgArr[index - 1].classList.remove("slide-show");
        slideImgArr[index].classList.add("slide-show");
        index = index + 1;
      }
    }, 1500);
  }
};

const removeSlideClass = (slideImgArr) => {
  for(let i = 0; i < slideImgArr.length; i++) {
    slideImgArr[i].classList.remove("slide-show");
  }
}


const stopSlideShow = () => {
  clearInterval(postInterval);
  postInterval = null;
};

const onMouseEvent = (movie, index) => {
  const movieSlideContainer = movie.querySelector(".movie-slide");
  const slideImgArr = Array.from(movieSlideContainer.querySelectorAll("img"));

  movie.classList.add("movie-item-focus");
  movie.childNodes[1].style.opacity = 1;
  movieSlideContainer.style.opacity = 1;

  for (let i = 0; i < listMovieArr.length; i++) {
    if (i < index) {
      listMovieArr[i].classList.add("movie-item-move-left");
    } else if (i > index) {
      listMovieArr[i].classList.add("movie-item-move-right");
    }
  }

  startSlideShow(slideImgArr);
};

const outMouseEvent = (movie, index) => {
  const movieSlideContainer = movie.querySelector(".movie-slide");
  const slideImgArr = Array.from(movieSlideContainer.querySelectorAll("img"));
  movieSlideContainer.style.opacity = 0;

  movie.classList.remove("movie-item-focus");
  movie.childNodes[1].style.opacity = 0;
  for (let i = 0; i < listMovieArr.length; i++) {
    if (i < index) {
      listMovieArr[i].classList.remove("movie-item-move-left");
    } else if (i > index) {
      listMovieArr[i].classList.remove("movie-item-move-right");
    }
  }
  stopSlideShow();
  removeSlideClass(slideImgArr);
}

export default function movieList() {
  listMovieArr.forEach((movie, index) => {
    movie.addEventListener("mouseover", function () {
      onMouseEvent(movie, index);
    });
    movie.addEventListener("mouseout", function () {
      outMouseEvent(movie, index);
    });
  });
};
