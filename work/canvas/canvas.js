var canv = document.getElementById('my-canvas')
var c = canv.getContext('2d')
canv.width = 400
canv.height = 300
var w = canv.width;
var h = canv.height;
console.log('width = ' + w)
console.log('height = ' + h)
c.strokeStyle = '#000000'
c.moveTo(w/2,0)
c.lineTo(w/2,h)
c.moveTo(0, h/2)
c.lineTo(w, h/2)


c.stroke()

var x = 0
var y = 0
var t = 0
sin()
cos()
ellipse()

function sin() {
	y = 30 * Math.sin(x/5) + h/2
	x += 0.1
	c.fillStyle = 'green'
	c.fillRect(x, y, 1, 1)
	if(x <= w/2){
		var timer = setTimeout(function(){
		sin()
		cos()
		}, 0.01)
	}
}


function cos(){
	y = 30 * Math.cos(x/5) + 75
	x += 0.1
	c.fillStyle = 'red'
	c.fillRect(x, y, 1, 1)
}

function ellipse(){
	var pi = Math.PI
	x1 = w/2 + 5
	y1 = h/2 + 5
	x1 = 70 * Math.cos(t) + w/2 + 100
	y1 = 30 * Math.sin(t) + h/2 + 50
	t += 0.01 * pi
	if (t >= 2 * pi){
		return 0
	}
	c.fillStyle = 'blue'
	c.fillRect(x1,y1, 1,1)
	var timer = setTimeout(function(){
		ellipse()
	},0.01)
}

var canv2 = document.getElementById('my-second-canvas')
var context = canv.getContext('2d')
canv2.width = 400
canv2.height = 300
var w2 = canv.width;
var h2 = canv.height;
canv2.onmousedown = function(){
	context.fillStyle = '#000000'
	x = event.clientX;
	y = event.clientY;
	//c.fillRect(x, y, 2,2)
	console.log(x, y)
	this.onmousemove = function(){
		var timer = setTimeout(function(){
			c.fillRect(x,y,2,2)
		}, 0.001)
	}
	this.onmouseup = function(){
		return 0
	}
}