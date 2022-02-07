var songs = [
    {
        id: 0,
        title: "Beyonce",
        text: "Don't Hurt Yourself",
        src: "./assets/audio/beyonce.mp3",
        img: "url('./assets/img/lemonade.png')"
    },
    {
        id: 1,
        title: "Dua Lipa",
        text: "Don't Start Now",
        src: "./assets/audio/dontstartnow.mp3",
        img: "url('./assets/img/dontstartnow.png')"
    }
];
const my_audio = document.getElementsByClassName("my_audio")[0];
const cover = document.querySelector('body')
let isPlay = false;
var buttons_play_pause=document.querySelectorAll(".play-pause-botton");
var i = 0;
current_song(i);
function nextAudio()
{
    i++;
    if(i>songs.length-1)
    {
        i=0;
    }
    current_song(i);
}
function prevAudio()
{
    i--;
    if(i==-1)
    {
        i=songs.length-1;
    }
    current_song(i);
}
function playAudio() {
    isPlay = !isPlay;
    buttons_play_pause.forEach(element => 
        element.classList.toggle("hide")
    );
if(isPlay)
   { my_audio.play();}
   else{
    my_audio.pause();
   }
}
function current_song(i) {
    i = ++i % songs.length;
    var current_song = songs[i];
    var title = document.getElementsByClassName("title")[0];
    var text = document.getElementsByClassName("text")[0];
    title.innerHTML = current_song.title;
    text.innerHTML = current_song.text;
    my_audio.src = current_song.src;
    cover.style.setProperty('--background', current_song.img);

    
}
