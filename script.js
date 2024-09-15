const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "song3.mp3"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

playButton.addEventListener('click', playPauseSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// Load the first song on page load
loadSong(currentSongIndex);