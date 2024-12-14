const video = document.getElementById('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
let stream;

// Start video stream
startBtn.addEventListener('click', async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } catch (error) {
    alert('Error accessing the webcam: ' + error.message);
  }
});

// Stop video stream
stopBtn.addEventListener('click', () => {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
});
