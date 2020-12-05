let video = document.getElementById("video");
let playButton = document.getElementById("play");
let choiceDiv = document.getElementById("choiceDivID");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
video.addEventListener("ended", playNextVideo, false);

playButton.onclick = function () {
  video.play();
  console.log("test");
  playButton.style.display = "none";
};
function playNextVideo() {
  choiceDiv.style.display = "flex";
}
choice1.onclick = function () {
  console.log("psyduck");
  video.setAttribute("src", "psyduck.mp4");
  video.play();
  choiceDiv.style.display = "none";
};
choice2.onclick = function () {
  console.log("snorlax");
  video.setAttribute("src", "snorlax.mp4");
  video.play();
  choiceDiv.style.display = "none";
};
