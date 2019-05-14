let myVideo = document.getElementById("rick-roll"); 

function playPause(){
  if(myVideo.paused){
    myVideo.play();
  }else {
    myVideo.pause();
  }
}