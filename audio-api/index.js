const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");
const volume = document.getElementById("volume");

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());
stop.addEventListener("click", () => {
  // first it will pause and then
  audio.pause();
  //reset to the initial state
  audio.currentTime = 0;
});
audio.addEventListener("timeupdate", () => {
  currentTime.innerText = audio.currentTime.toFixed(0);
});
volume.addEventListener("change", () => {
  audio.volume = volume.value;
});
