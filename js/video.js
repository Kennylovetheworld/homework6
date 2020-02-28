var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if(video.currentTime == video.duration)
		video.currentTime = 0;
		video.playbackRate = 1;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	var  m = document.querySelector("#mute");
  	if(video.muted){
		m.innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted");
	}
  	else{
		m.innerHTML = "Unmute";
		video.muted = true;
      	console.log("Muted");
	}
}

function changeVolume() {
	var slider = document.querySelector('#volumeSlider');
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	console.log("Volume is "+ video.volume*100+'%');
}
       

function gray() { 
	video.style.filter= 'grayscale(100%)';
	console.log("In grayscale")
}

function color() {
	video.style.filter= 'grayscale(0%)';
	console.log("In color") 
}
