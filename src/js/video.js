// main page video control
// 1. 스크롤에 따른 플레이
// 2. mute 버튼 처리

const mainVideoPlayScrollControl = (video) => {
  const scrollPlay = () => {
    const scrollHeight = Math.floor(window.scrollY);

    if (scrollHeight > 300) {
      video.pause();
    } else {
      video.play();
    }
  };

  window.addEventListener("scroll", scrollPlay);
};

const handleMuteBtn = (video, muteBtn) => {
  const muteIcon = muteBtn.querySelector("i");

  const muteCheck = (video, muteBtn) => {
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
  }

  muteCheck(video, muteBtn);
};

const loadMutedPreference = (video, muteBtn) => {
  const mutedPref = localStorage.getItem("muted");
  const muteIcon = muteBtn.querySelector("i");

  if (mutedPref !== null) {
    if (mutedPref === "true") {
      video.muted = true;
      muteIcon.classList.remove("fa-volume-up");
      muteIcon.classList.add("fa-volume-off");
    } else {
      video.muted = false;
      muteIcon.classList.remove("fa-volume-off");
      muteIcon.classList.add("fa-volume-up");
    }
  } else {
    video.muted = false;
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-off");
  }
}

export default function mainVideoControl() {
  const videoContainer = document.querySelector(".main-video-container"),
    video = videoContainer.querySelector("#js-main-video"),
    muteBtn = videoContainer.querySelector(".volume");

  video.autoplay = true;
  video.loop = true;
  video.poster = require('../media/image/poster.jpg');

  loadMutedPreference(video, muteBtn);
  mainVideoPlayScrollControl(video);
  muteBtn.addEventListener("click", function () {
    handleMuteBtn(video, muteBtn)
  });
};
