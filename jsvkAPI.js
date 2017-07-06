$(document).ready(function() {
	var e = "";
	$.ajax({
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function(data) {
	console.log(data);
		for(var key in data.response){
			e += "<img src = "+data.response[key]["src"]+">"+data.response[key]["src"] + ">";
			}
	$( ".link" ).html(e);
  	}
});

})