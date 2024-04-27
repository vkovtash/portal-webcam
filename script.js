function startVideo() {
  const constraints = {
    video: { width: 990, height: 720 },
    audio: true,
  };
  
  constraints.audio.echoCancellation = false
  constraints.audio.autoGainControl = false
  constraints.audio.googAutoGainControl = false
  constraints.audio.noiseSuppression = false

  console.log({ constraints });
  
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      document.querySelector("video").srcObject = stream;
    });
}

function enterFullscreen() {
  const element = document.documentElement;

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

startVideo();
enterFullscreen();
