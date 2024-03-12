function expandSearch() {
    var searchContainer = document.getElementById("searchContainer");
    searchContainer.style.display = "block";
}

function closeSearch() {
    var searchContainer = document.getElementById("searchContainer");
    searchContainer.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    video.play();
});

function openFullscreen() {
    const video = document.querySelector('.myVideo');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { 
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
}

//for nav button
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Define an array of video sources, titles, and descriptions
const videos = [
    { src: "image/Murder Mubarak.mp4", title: "Murder", description:""},
    { src: "image/yodha.mp4", title: "Yodha", description: "" },
    { src: "image/animal.mp4", title: "Animal" },
    {src:"image/LEASE ON LOVE Trailer (2022) Romantic Movie.mp4",title:"LEASE"}
];

// Function to shuffle the videos array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

shuffle(videos);

// Get the video element and set the source, title, and description
const videoElement = document.getElementById('featuredVideo');
const titleElement = document.getElementById('videoTitle');
const descriptionElement = document.getElementById('videoDescription');

// Set the first video from the shuffled array
videoElement.src = videos[0].src;
titleElement.textContent = videos[0].title;
descriptionElement.textContent = videos[0].description;

