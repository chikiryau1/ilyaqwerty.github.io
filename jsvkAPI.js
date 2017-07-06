$(document).ready(function() {
	var e = "";
	$.ajax({
	/*type: "GET",
	data: {
		owner_id: "-55438333",
		album_id: "wall",
		count:"1000"
	},*/
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function(data) {
	console.log(data);
		for(var key in data.response){
			e += "<img src = "+data.response[key]["src"]+">";
			}
	$( ".link" ).html(e);
  	}
});

})