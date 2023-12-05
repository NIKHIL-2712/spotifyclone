console.log("welcome to spotify");
let songIndex=0
let song1=Array.from(document.getElementsByClassName("song1"))
let songs=[
    {songName:"mera dil",filePath:"song2.mp3"},
    {songName:"tera dil",filePath:"song3.mp3"},
    {songName:"yeh jindangi",filePath:"song4.mp3"},
    {songName:"aasma",filePath:"song5.mp3"},
    {songName:"najra",filePath:"song6.mp3"},
    {songName:"number 1",filePath:"song7.mp3"},
    {songName:"number 1",filePath:"song7.mp3"},
    
    
]
song1.forEach((element,i)=>{
    console.log(element.children[1].innerHTML)
    element.children[1].innerHTML=songs[i].songName
    
    
    })
    

let audioElement=new Audio('song5.mp3')
let play=document.getElementById("masterplay")
play.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ 
        audioElement.play();
        play.hidden=true
        pause.hidden=false
    }
})
let pause=document.getElementById("masterpause");
pause.addEventListener("click",()=>{
    if(audioElement.play || audioElement.currentTime>0){
        audioElement.pause()
        pause.hidden=true;
        play.hidden=false
    }
})
pause.hidden=true

let playback=document.getElementById('playback')
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    playback.value=progress
})

playback.addEventListener("change",()=>{
    audioElement.currentTime=playback.value*audioElement.duration/100
})


let songplay=document.getElementById("songplay")
let songpause=document.getElementById("songpause")
songplay.addEventListener("click",(i)=>[
   

])

