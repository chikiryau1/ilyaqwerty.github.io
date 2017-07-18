var strs = []
function replaced() {
	var e = document.getElementById('slice')
	var str = e.value.replace(/ /g, '')

	for(var i = 0; i < str.length; i++){
		if (isNaN(parseInt(str[i], 10)) && (str[i] != '.') && (str[i] != ',')){
			var ss1 = str.substring(0, i)
			//console.log(ss1)
			//strs = strs.concat(ss1)
			//var ss2 = str.substring(i)
			//str = ss1 + "\\n" + ss2
			i++
			continue
		}
		else{
			continue
			//parseInt(str[i])
		}
	}
console.log(strs)
}
