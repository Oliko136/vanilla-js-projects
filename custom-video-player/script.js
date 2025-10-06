const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
    video.paused
        ? video.play()
        : video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
    video.paused
        ? play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
        : play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
}

// // Update progress & timestamp
// function updateProgress() {

// }

// // Set progress

// function setVideoProgress() {

// }

// Stop video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
//video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
//progress.addEventListener('change', setVideoProgress);