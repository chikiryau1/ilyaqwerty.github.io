document.addEventListener("DOMContentLoaded", function(event) { 
	var l = document.getElementById("languages");
	var s = document.getElementById("social");
	var soc = document.getElementById("socwrap");

	l.onmouseover = function(){
		this.style.transition = "width  0.2s  ease-out";
		this.style.background = "#666";
		this.style.width = "66px";
	};

	l.onmouseout = function(){
		this.style.transition = "width  0.2s  ease-out";
		this.style.background = "transparent";
		this.style.width = "30px";
	};

	s.onmouseover = function(){
	soc.style.transition = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	//soc.style.background = "#666";
	soc.style.width = "140px";
	soc.style.height = "33px";
	soc.style.opacity = "1"
	};

	s.onmouseout = function(){
		soc.style.transition = "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style.background = "transparent";
		soc.style.width = "0px";
		soc.style.opacity = "0";
	};

	var audio = new Audio();
	audio.src = "sound.mp3";
	document.getElementById('sound_button').onmouseover= function() {
		this.classList.toggle("on")
		if (!document.getElementById('vol').classList.contains("off") && (this.classList.contains("on"))){
			audio.play();
		}
	}

	//console.log(document.getElementById('vol'));
	document.getElementById('vol').onclick = function(){
		this.classList.toggle("off");

		if (this.classList.contains("off")){
			this.style.backgroundImage = "url(img/red_off.svg)";
			this.onmouseover = function(){
				this.style.backgroundImage = "url(img/red_off.svg)";
			}
			this.onmouseout = function(){
				this.style.backgroundImage = "url(img/white_off.svg)";
			}
			audio.pause();
			}
		
		else{
			this.style.backgroundImage = "url(img/red_on.svg)";
			this.onmouseover = function(){
				this.style.backgroundImage = "url(img/red_on.svg)";
			}
			this.onmouseout = function(){
				this.style.backgroundImage = "url(img/white_on.svg)";
			}
		}
	}

});
