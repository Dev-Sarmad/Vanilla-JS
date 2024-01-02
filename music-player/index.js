const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = [
  "Clockwork",
  "Done Better",
  "Morning Drift",
  "All I Need",
  "FAVHELLA",
];

let song = 1;

loadSong(songs[song]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.png`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");

  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}
function prevSong() {
  song--;
  if (song < 0) {
    song = songs.length - 1;
  }
  loadSong(songs[song]);
  playSong();
}
function nextSong() {
  song++;
  if (song > songs.length - 1) {
    song = 0;
  }
  loadSong(songs[song]);
  playSong();
}
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
volume.addEventListener("change", () => (audio.volume = volume.value));
progressContainer.addEventListener("click", setProgress);
