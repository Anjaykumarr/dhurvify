console.log("welcome to dhurvefy");

//variable initilisation
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("MyProgressBar");
let gif = document.getElementById("gif");
let name = Array.from(document.getElementsByClassName("songsName"));

let songs = [
    { songsName: "Legion", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "Trap", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songsName: "Lonely", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    {
        songsName: "Plug walk",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg",
    },
    { songsName: "Name", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    {
        songsName: "Safety dance",
        filePath: "songs/6.mp3",
        coverPath: "covers/6.jpg",
    },
    {
        songsName: "Break it up",
        filePath: "songs/7.mp3",
        coverPath: "covers/7.jpg",
    },
    {
        songsName: "Go to hell",
        filePath: "songs/8.mp3",
        coverPath: "covers/8.jpg",
    },
    {
        songsName: "come back",
        filePath: "songs/9.mp3",
        coverPath: "covers/9.jpg",
    },
    {
        songsName: "True love",
        filePath: "songs/10.mp3",
        coverPath: "covers/10.jpg",
    },
];

name.forEach((element) => {
    console.log(element, i);
    element.getElementsByClassName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("name")[0].innerText = songs[i].songsName;
});

// let audioElement = new Audio('songs/1.mp3');
// audioElement.play();

//play/pause
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
});
// event listner
audioElement.addEventListener("timeupdate", () => {
    //bar update
    progres = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progres;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
            element.classList.add("fa-circle-pause");
            element.classList.add("fa-play");
        });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-circle-pause");
})