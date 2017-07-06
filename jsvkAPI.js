$(document).ready(function() {
	var e = "";
	$.ajax({
	type: "GET",
	
  	dataType: "json",
  	url: "https://api.vk.com/method/photos.get?owner_id=-55438333&album_id=wall&count=1000",
  	success: function(data) {
	console.log(data);
		for(var key in data.response){
			e += "<img src = "+data.response[key]["src"]+">";
			}
	$( ".link" ).html(e);
  	}
});

})
