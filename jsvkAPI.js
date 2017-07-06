$(document).ready(function() {
	var e = "";
	$.ajax({
  	dataType: "json",
  	url: "vkAPIbd.json",
  	success: function() {
	console.log(e);
  	}
});

})