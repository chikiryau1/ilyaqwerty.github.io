$(document).ready(function() {
	var e = "";
	$.ajax({
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function(data) {
	console.log(data);
	for(var key in data){
		e += "<a href = "+data.key["src"]+">"+data.key["src"]+"</a>";
	}
	$( ".link" ).html(e);
  	}
});

})