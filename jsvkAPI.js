$(document).ready(function() {
	var e = "";
	$.ajax({
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function(data) {
	console.log(data);
	for(var key in data.response){
		for(var key1 in data.response[key]){
			e += "<a href = "+data.response[key][key1]["src"]+">"+data.response[key][key1]["src"]+"</a>";
		}
	}
	$( ".link" ).html(e);
  	}
});

})