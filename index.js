console.log("Welcome to SKYmusic");
//Initialize the variables
let SongIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let innerSongName = document.getElementById('innerSongName')
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { SongName: "Dil chura liya", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { SongName: "Ja Pardeshi dil de diya", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { SongName: "Dil dena hi padata h-Kache dhage", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { SongName: "dil dind dond bole", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { SongName: "Dil galti kar baitha h galti ker", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { SongName: "bol hamara ky hoga", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { SongName: "dil me tere bat jo h", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { SongName: "tere liye dil ka teliphone bajta", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { SongName: "dil ke tukade kar ke 4", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { SongName: "dil lage na ab kehu or se", filePath: "song/10.mp3", coverPath: "covers/10.jpg" }
]
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;

    }
})
// listen to Event
audioElement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlay();
            SongIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${SongIndex + 1}.mp3`;
            innerSongName.innerText = songs[SongIndex].SongName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
        else {
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }

    })

})

document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >= 9) {
        SongIndex = 0
    }
    else {
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    makeAllPlay();
    audioElement.play();
    gif.style.opacity = 1;
    innerSongName.innerText = songs[SongIndex].SongName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 9
    }
    else {
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    makeAllPlay();
    audioElement.play();
    gif.style.opacity = 1;
    innerSongName.innerText = songs[SongIndex].SongName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
