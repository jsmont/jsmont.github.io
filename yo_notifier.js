$(document).ready(function(){
	var http = new XMLHttpRequest();
	var url = "http://api.justyo.co/yo/";
	var params = "api_token=aa27b4f7-dbf6-4abe-b72c-75cf2881d30d&username=GILBERTOMY&text=[GITPAGE] New visit!";
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			console.log(http.responseText);
		}
	}
	http.send(params);

});
