$(document).ready(function() {
	var e = "";
	$.ajax({
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function(data) {
	console.log(data);
	for(var key in data.response){
		for(var key1 in data.response[key]){
			for(var key2 in data.response[key][key1]){
			e += "<a href = "+data.response[key][key1][key2]["src"]+">"+data.response[key][key1][key2]["src"]+"</a><br>";
		}
	}
	}
	$( ".link" ).html(e);
  	}
});

})