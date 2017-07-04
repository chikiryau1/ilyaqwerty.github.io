document.addEventListener("DOMContentLoaded", function(event) { 
	var l = document.getElementById("languages");
	var s = document.getElementById("social_butt");
	var soc = document.getElementById("socwrap");

	l.onmouseover = function(){
		this.style.transition = "width  0.2s  ease-out";
		this.style["-webkit-transition"] = "width  0.2s  ease-out";
		this.style["-moz-transition"] = "width  0.2s  ease-out";
		this.style["-ms-transition"] = "width  0.2s  ease-out";
		this.style["-o-transition"] = "width  0.2s  ease-out";
		this.style.background = "rgba(0, 0, 0, 0.5)";
		this.style.width = "87px";
	};

	l.onmouseout = function(){
		this.style.transition = "width  0.2s  ease-out";
		this.style["-webkit-transition"] = "width  0.2s  ease-out";
		this.style["-moz-transition"] = "width  0.2s  ease-out";
		this.style["-ms-transition"] = "width  0.2s  ease-out";
		this.style["-o-transition"] = "width  0.2s  ease-out";
		this.style.background = "transparent";
		this.style.width = "40px";
	};

	s.onmouseover = function(){
	soc.style.transition = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	soc.style["-webkit-transition"] = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	soc.style["-moz-transition"] = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	soc.style["-ms-transition"] = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	soc.style["-o-transition"] = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	//soc.style.background = "#666";
	soc.style.width = "180px";
	soc.style.height = "32px";
	soc.style.opacity = "1"
	};

	s.onmouseout = function(){
		soc.style.transition = "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style["-webkit-transition"]= "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style["-moz-transition"] = "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style["-ms-transition"] = "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style["-o-transition"]= "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
		soc.style.background = "transparent";
		soc.style.width = "0px";
		soc.style.opacity = "0";
	};

	/*var audio = new Audio();
	audio.src = "sound.mp3";
	document.getElementById('sound_button').onmouseover= function() {
		this.classList.toggle("on")
		if (!document.getElementById('vol').classList.contains("off") && (this.classList.contains("on"))){
			audio.play();
		}
	}*/

	//console.log(document.getElementById('vol'));
	document.getElementById('vol').onclick = function(){
		this.classList.toggle("off");

		if (this.classList.contains("off")){
			this.style.backgroundImage = "url(img/red_off.svg)"; //изменить путь 
			this.onmouseover = function(){
				this.style.backgroundImage = "url(img/red_off.svg)";//изменить путь 
			}
			this.onmouseout = function(){
				this.style.backgroundImage = "url(img/white_off.svg)";//изменить путь 
			}
			audio.pause();
			}
		
		else{
			this.style.backgroundImage = "url(img/red_on.svg)";//изменить путь 
			this.onmouseover = function(){
				this.style.backgroundImage = "url(img/red_on.svg)";//изменить путь 
			}
			this.onmouseout = function(){
				this.style.backgroundImage = "url(img/white_on.svg)";//изменить путь 
			}
		}
	}

});
