function playPause() {
  var video = document.getElementById("my-video");
  var button = document.querySelector(".play-button");
  if (video.paused) {
    video.play();
    button.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    button.innerHTML = '<i class="fas fa-play"></i>';
  }

  // Hide the button after 2 seconds
  setTimeout(function () {
    button.style.display = "none";
  }, 2000);

  // set up loop
  var loop = setInterval(function () {
    if (!video.paused && !video.ended) {
      // clear loop if video is playing
      clearInterval(loop);
    } else {
      // seek to beginning of video if not playing
      video.currentTime = 0;
      video.play();
    }
  }, 5000); // repeat every 5 seconds
}
