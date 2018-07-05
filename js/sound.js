var audio, playbtn;
function initAudioPlayer() {
		audio = new Audio();
		audio.src = "audio/rain.mp3";	
		audio.loop = true;
		audio.play();
		// ----- SOUND CONTROLLER ------- //
		playbtn = document.getElementById("playpausebtn");
		mutebtn = document.getElementById("mutebtn");
		// -- ADD EVENT HANDLING
		playbtn.addEventListener("click",playPause);
		mutebtn.addEventListener("click",mute);
		// -- ADD FUNCTION ---
		function playPause() {
			if(audio.paused) {
				audio.play();
				playbtn.style.background = "url(icon/pause.png) no-repeat";
			}
			else {
				audio.pause();
				playbtn.style.background = "url(icon/play.png) no-repeat";
			}
		}
		
		function mute() {
			if(audio.muted) {
				audio.muted = false;
				mutebtn.style.background = "url(icon/speaker.png) no-repeat";
			}
			else {
				audio.muted = true;
				mutebtn.style.background = "url(icon/mute.png) no-repeat";
			}
		}
			
}
window.addEventListener("load", initAudioPlayer);
