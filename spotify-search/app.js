$(document).ready(function() {


 	alert("HTML loaded!");

 	$("#search-button").on("click", function() {

 		var userSearch = $("#search-query").val();

 		performSearch("https://api.spotify.com/v1/search", userSearch);
 		
 	});

});