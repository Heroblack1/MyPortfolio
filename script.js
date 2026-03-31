const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeVideo");
const video = document.getElementById("demoVideo");

openBtn.onclick = (e) => {
  e.preventDefault();
  modal.style.display = "block";
  video.play();
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
};
