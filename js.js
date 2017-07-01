var l = document.getElementById("languages");
var s = document.getElementById("social");
var soc = document.getElementById("socwrap");



l.onmouseover = function(){
	this.style.transition = "width  0.2s  ease-out";
	this.style.background = "#666";
	this.style.width = "66px";
}

l.onmouseout = function(){
	this.style.transition = "width  0.2s  ease-out";
	this.style.background = "transparent";
	this.style.width = "30px";
}

s.onmouseover = function(){
	soc.style.transition = "width  0.5s  ease-out, opacity 0.3s ease-out, background 0.5s ease";
	//soc.style.background = "#666";
	soc.style.width = "140px";
	soc.style.opacity = "1"
}

s.onmouseout = function(){
	soc.style.transition = "width  0.5s  ease-out, opacity 0.5s ease-out, background 0.5s ease";
	soc.style.background = "transparent";
	soc.style.width = "0px";
	soc.style.opacity = "0"
}

