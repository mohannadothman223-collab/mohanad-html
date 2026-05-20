document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('myVideo');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const restartBtn = document.getElementById('restartBtn');
  const volume = document.getElementById('volume');
  const progress = document.getElementById('progress');

  function updateButton() {
    playPauseBtn.textContent = video.paused ? 'Play' : 'Pause';
  }

  playPauseBtn.addEventListener('click', function () {
    if (video.paused) video.play(); else video.pause();
  });

  restartBtn.addEventListener('click', function () {
    video.currentTime = 0;
    video.play();
  });

  volume.addEventListener('input', function () {
    video.volume = parseFloat(this.value);
  });

  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);

  // update progress bar as video plays
  video.addEventListener('timeupdate', function () {
    if (video.duration) {
      progress.value = (video.currentTime / video.duration) * 100;
    }
  });

  // allow seeking by moving the progress range
  progress.addEventListener('input', function () {
    if (video.duration) {
      video.currentTime = (this.value / 100) * video.duration;
    }
  });

  // ensure duration is available
  video.addEventListener('loadedmetadata', function () {
    if (video.duration) progress.value = (video.currentTime / video.duration) * 100;
  });

  // initialize UI
  updateButton();
  volume.value = video.volume;
});
