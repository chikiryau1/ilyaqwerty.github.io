var strs = [];
function replaced() {
	var e = document.getElementById('slice');
	var str = e.value.replace(/ /g, '');

	for(var i = 0; i < str.length; i++){
 		if (isNaN(parseInt(str[i], 10)) && (str[i] != '.') && (str[i] != ',')){
 			var ss1 = str.substring(0, i);
 			i++;
			continue;
		}
	
		else{
			continue;
		}
	}
console.log(str.length);
}
