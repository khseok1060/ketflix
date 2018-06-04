// import css
import "../styles.css";
// import Media Url
import "./mediaUrl";
// import JS Files
import mainVideoControl from "./video";
import handleNavigation from "./navigation";
import movieList from "./movieList";

const handleContentLoaded = () => {
  handleNavigation();
  mainVideoControl();
  movieList();
};

document.addEventListener("DOMContentLoaded", handleContentLoaded);
