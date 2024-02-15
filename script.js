console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let mastersongname = document.getElementById('mastersongname');
let songitems = document.getElementsByClassName('songitem');
let myprogressbar = document.getElementById('myprogressbar');
let songs = [
    { songname: "NCS SONG 1", filepath: "1.mp3", coverpath: "cover/1.jpg" },
    { songname: "NCS SONG 2", filepath: "2.mp3", coverpath: "cover/2.jpg" },
    { songname: "NCS SONG 3", filepath: "3.mp3", coverpath: "cover/3.jpg" },
    { songname: "NCS SONG 4", filepath: "4.mp3", coverpath: "cover/4.jpg" },
    { songname: "NCS SONG 5", filepath: "5.mp3", coverpath: "cover/5.jpg" }]

    masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
    
        }
        else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
        }
    })

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        index = parseInt(e.target.id)
        audioElement.src = `${index + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else { songIndex += 1 }

    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 5;
    }
    else { songIndex -= 1 }

    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})


